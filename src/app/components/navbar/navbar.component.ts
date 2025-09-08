import { Component, OnInit, signal, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { NavigationItem } from '../../interfaces/content.interface';
import { fadeInAnimation, slideUpAnimation } from '../../animations/page-animations';
import { navbarSticky, mobileMenuToggle } from '../../shared/animations/presets';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  animations: [fadeInAnimation, slideUpAnimation, navbarSticky, mobileMenuToggle],
  template: `
    <nav
      class="fixed top-0 left-0 right-0 z-50"
      [@navbarSticky]="getNavbarState()"
      [@fadeIn]
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 lg:h-20">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center space-x-0 group">
            <img 
              src="/okul-panel-logo.png" 
              alt="Okul Panel Logo" 
              width="100" 
              height="100"
              class="w-20 h-20 lg:w-24 lg:h-24 transition-transform duration-300 group-hover:scale-110"
              loading="eager"
              decoding="sync"
            />
            <span class="text-xl lg:text-2xl font-bold text-white group-hover:text-accent-500 transition-colors duration-300">Okul Panel</span>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Ana navigasyon">
            <div class="flex space-x-6">
              @for (item of navigationItems(); track item.href) {
                <a
                  [routerLink]="item.href"
                  routerLinkActive="text-accent-500"
                  [routerLinkActiveOptions]="{ exact: item.href === '/' }"
                  class="text-white/80 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-950 rounded-md px-2 py-1 transition-colors duration-300 font-medium"
                  [attr.aria-label]="item.label + ' sayfasına git'"
                >
                  {{ item.label }}
                </a>
              }
            </div>
            <a
              routerLink="/contact"
              class="btn-primary ml-4 focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2 focus:ring-offset-primary-950 inline-block text-center"
              aria-label="İletişim sayfasına git"
            >
              Demo Talep Et
            </a>
          </nav>

          <!-- Mobile Menu Button -->
          <div class="lg:hidden">
            <button
              class="text-white p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-950 transition-colors duration-300"
              (click)="toggleMobileMenu()"
              [attr.aria-label]="mobileMenuOpen() ? 'Menüyü kapat' : 'Menüyü aç'"
              [attr.aria-expanded]="mobileMenuOpen()"
              aria-controls="mobile-menu"
            >
              <svg
                class="w-6 h-6 transition-transform duration-300"
                [class.rotate-180]="mobileMenuOpen()"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                @if (!mobileMenuOpen()) {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                } @else {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <nav
        id="mobile-menu"
        class="lg:hidden bg-primary-950/95 backdrop-blur-md border-t border-white/10 mobile-menu"
        [@mobileMenuToggle]="mobileMenuOpen() ? 'open' : 'closed'"
        role="navigation"
        aria-label="Mobil navigasyon menüsü"
      >
          <div class="px-4 py-6 space-y-4">
            @for (item of navigationItems(); track item.href) {
              <a
                [routerLink]="item.href"
                routerLinkActive="text-accent-500"
                [routerLinkActiveOptions]="{ exact: item.href === '/' }"
                class="block text-white/80 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-950 rounded-md px-2 py-2 transition-colors duration-300 font-medium"
                (click)="closeMobileMenu()"
                [attr.aria-label]="item.label + ' sayfasına git'"
              >
                {{ item.label }}
              </a>
            }
            <a
              routerLink="/contact"
              class="btn-primary w-full mt-4 focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2 focus:ring-offset-primary-950 inline-block text-center"
              (click)="closeMobileMenu()"
              aria-label="İletişim sayfasına git"
            >
              Demo Talep Et
            </a>
          </div>
      </nav>
    </nav>
  `,
  styles: [`
    .mobile-menu-toggle {
      @apply lg:hidden;
    }
    
    // Enhanced hover effects
    .group:hover img {
      transform: scale(1.1);
      transition: transform 240ms cubic-bezier(0.2, 0.0, 0.0, 1);
    }
    
    // Focus-visible improvements
    a:focus-visible,
    button:focus-visible {
      outline: 2px solid #FFD60A;
      outline-offset: 2px;
      border-radius: 6px;
    }
    
    // Improved mobile menu animation
    .mobile-menu {
      will-change: height, opacity;
    }
  `],
})
export class NavbarComponent implements OnInit {
  private contentService = inject(ContentService);
  private router = inject(Router);
  
  navigationItems = signal<NavigationItem[]>([]);
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  isHomePage = signal(true);

  ngOnInit() {
    this.navigationItems.set(this.contentService.getNavigationItems());
    
    // Listen to route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHomePage.set(event.url === '/' || event.url === '');
        // Close mobile menu on navigation
        this.mobileMenuOpen.set(false);
      });

    // Set initial state
    this.isHomePage.set(this.router.url === '/' || this.router.url === '');
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth >= 1024) {
      this.mobileMenuOpen.set(false);
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(value => !value);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }

  getNavbarState() {
    // Always show solid background on non-home pages
    if (!this.isHomePage()) {
      return 'sticky';
    }
    
    // On home page, show background only when scrolled
    return this.isScrolled() ? 'sticky' : 'default';
  }

  // Method removed - now using routerLink directly
}
