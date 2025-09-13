import { Component, OnInit, signal, inject, HostListener, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { NavigationItem } from '../../interfaces/content.interface';
import { filter } from 'rxjs/operators';
import { NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  animations: [],
  template: `
    <nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out"
      [style.background]="(router.url !== '/' && router.url !== '') ? 'linear-gradient(to right, #0D1B2A, #0c4a6e, #0D1B2A)' : (isScrolled() ? 'linear-gradient(to right, #0D1B2A, #0c4a6e, #0D1B2A)' : 'transparent')"
      [style.backdrop-filter]="(router.url !== '/' && router.url !== '') ? 'blur(12px)' : (isScrolled() ? 'blur(12px)' : 'none')"
      [style.border-bottom]="(router.url !== '/' && router.url !== '') ? '1px solid rgba(255, 255, 255, 0.1)' : (isScrolled() ? '1px solid rgba(255, 255, 255, 0.1)' : 'none')"
      [style.box-shadow]="(router.url !== '/' && router.url !== '') ? '0 4px 20px rgba(0, 0, 0, 0.1)' : (isScrolled() ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none')"
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
            <div class="flex flex-col">
              <span class="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white via-accent-100 to-white bg-clip-text text-transparent group-hover:from-accent-400 group-hover:via-accent-300 group-hover:to-accent-400 transition-all duration-300 whitespace-nowrap">
                Okul Panel
              </span>
              <span class="text-xs text-white/60 group-hover:text-accent-300 transition-colors duration-300 -mt-1 font-medium">
                Eğitim Yönetim Sistemi
              </span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Ana navigasyon">
            <div class="flex space-x-6">
              @for (item of navigationItems(); track item.href) {
                <a
                  [routerLink]="item.href"
                  routerLinkActive="text-accent-500"
                  [routerLinkActiveOptions]="{ exact: item.href === '/' }"
                  class="text-white/80 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-950 rounded-lg px-3 py-2 transition-all duration-300 font-medium hover:bg-white/10 whitespace-nowrap"
                  [attr.aria-label]="item.label + ' sayfasına git'"
                >
                  {{ item.label }}
                </a>
              }
              
              <!-- Dropdown Menu Trigger -->
              <div class="relative" 
                   (mouseenter)="onSubMenuEnter()" 
                   (mouseleave)="onSubMenuLeave()">
                <button
                  class="text-white/80 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-950 rounded-lg px-3 py-2 transition-all duration-300 font-medium flex items-center space-x-1 hover:bg-white/10 whitespace-nowrap"
                  [attr.aria-label]="'Alt menüyü aç'"
                  [attr.aria-expanded]="subMenuOpen()"
                >
                  <span>İstatistikler</span>
                  <svg class="w-4 h-4 transition-transform duration-300" [class.rotate-180]="subMenuOpen()" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <!-- Dropdown Menu -->
                <div 
                  data-submenu
                  class="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/30 py-4 z-[70] transform transition-all duration-500 ease-out"
                  [class.visible]="subMenuOpen()"
                >
                  <a href="/about" class="group block px-6 py-4 text-gray-900 hover:bg-gradient-to-r hover:from-accent-50/80 hover:to-blue-50/80 hover:text-accent-800 transition-all duration-400 rounded-xl mx-2 hover:shadow-lg hover:scale-105 hover:backdrop-blur-md">
                    <div class="font-semibold text-lg group-hover:text-accent-800 transition-colors">Okul Panel Nedir?</div>
                    <div class="text-sm text-gray-700 group-hover:text-accent-700 mt-1">Platform hakkında detaylı bilgi ve özellikler</div>
                    <div class="text-xs text-gray-600 group-hover:text-gray-800 mt-2 font-medium flex items-center">
                      <span>Bilgi almak için sayfaya git</span>
                      <svg class="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </div>
                  </a>
                  
                  <a href="/features" class="group block px-6 py-4 text-gray-900 hover:bg-gradient-to-r hover:from-accent-50/80 hover:to-blue-50/80 hover:text-accent-800 transition-all duration-400 rounded-xl mx-2 hover:shadow-lg hover:scale-105 hover:backdrop-blur-md">
                    <div class="font-semibold text-lg group-hover:text-accent-800 transition-colors">Neden Okul Panel?</div>
                    <div class="text-sm text-gray-700 group-hover:text-accent-700 mt-1">Avantajlar ve benzersiz özellikler</div>
                    <div class="text-xs text-gray-600 group-hover:text-gray-800 mt-2 font-medium flex items-center">
                      <span>Bilgi almak için sayfaya git</span>
                      <svg class="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </div>
                  </a>
                  
                  <a href="/pricing" class="group block px-6 py-4 text-gray-900 hover:bg-gradient-to-r hover:from-accent-50/80 hover:to-blue-50/80 hover:text-accent-800 transition-all duration-400 rounded-xl mx-2 hover:shadow-lg hover:scale-105 hover:backdrop-blur-md">
                    <div class="font-semibold text-lg group-hover:text-accent-800 transition-colors">Şeffaf Fiyatlandırma</div>
                    <div class="text-sm text-gray-700 group-hover:text-accent-700 mt-1">Yıllık %15 indirim + 3 gün ücretsiz deneme</div>
                    <div class="mt-2 flex space-x-2">
                      <button 
                        (click)="selectSchoolType('private')"
                        [class]="selectedSchoolType() === 'private' ? 'bg-green-500 text-white shadow-lg' : 'bg-green-100 text-green-800 hover:bg-green-200'"
                        class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-lg transition-all duration-300 cursor-pointer"
                      >
                        Özel Okul
                      </button>
                      <button 
                        (click)="selectSchoolType('public')"
                        [class]="selectedSchoolType() === 'public' ? 'bg-blue-500 text-white shadow-lg' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'"
                        class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-lg transition-all duration-300 cursor-pointer"
                      >
                        Devlet Okulu
                      </button>
                    </div>
                    <div class="text-xs text-gray-600 group-hover:text-gray-800 mt-2 font-medium flex items-center">
                      <span>Fiyatları görüntüle</span>
                      <svg class="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </div>
                  </a>
                  
                  <a href="/faq" class="group block px-6 py-4 text-gray-900 hover:bg-gradient-to-r hover:from-accent-50/80 hover:to-blue-50/80 hover:text-accent-800 transition-all duration-400 rounded-xl mx-2 hover:shadow-lg hover:scale-105 hover:backdrop-blur-md">
                    <div class="font-semibold text-lg group-hover:text-accent-800 transition-colors">Sık Sorulan Sorular</div>
                    <div class="text-sm text-gray-700 group-hover:text-accent-700 mt-1">Merak edilen sorular ve cevapları</div>
                    <div class="text-xs text-gray-600 group-hover:text-gray-800 mt-2 font-medium flex items-center">
                      <span>Bilgi almak için sayfaya git</span>
                      <svg class="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </div>
                  </a>
                  
                  <a href="/testimonials" class="group block px-6 py-4 text-gray-900 hover:bg-gradient-to-r hover:from-accent-50/80 hover:to-blue-50/80 hover:text-accent-800 transition-all duration-400 rounded-xl mx-2 hover:shadow-lg hover:scale-105 hover:backdrop-blur-md">
                    <div class="font-semibold text-lg group-hover:text-accent-800 transition-colors">Kullanıcı Yorumları</div>
                    <div class="text-sm text-gray-700 group-hover:text-accent-700 mt-1">Müşteri deneyimleri ve geri bildirimler</div>
                    <div class="text-xs text-gray-600 group-hover:text-gray-800 mt-2 font-medium flex items-center">
                      <span>Bilgi almak için sayfaya git</span>
                      <svg class="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
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
              class="text-white p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-950 transition-all duration-300"
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

      <!-- Mobile Menu Overlay -->
      <div 
        *ngIf="mobileMenuOpen()"
        class="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-md z-50 transition-all duration-300"
        (click)="closeMobileMenu()"
      ></div>

      <!-- Mobile Menu -->
      <div
        *ngIf="mobileMenuOpen()"
        class="lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-primary-950/98 via-primary-900/95 to-primary-950/98 backdrop-blur-2xl border-l border-white/20 shadow-2xl z-[60] transform transition-all duration-500 ease-out"
        role="navigation"
        aria-label="Mobil navigasyon menüsü"
      >
          <!-- Close Button -->
          <div class="flex justify-end p-4">
            <button
              class="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
              (click)="closeMobileMenu()"
              aria-label="Menüyü kapat"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="px-6 pb-8 space-y-6">
            <!-- Main Navigation -->
            <div class="space-y-3">
              @for (item of navigationItems(); track item.href) {
                <a
                  [routerLink]="item.href"
                  routerLinkActive="text-accent-400 bg-accent-500/20"
                  [routerLinkActiveOptions]="{ exact: item.href === '/' }"
                  class="group block text-white/90 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-950 rounded-xl px-4 py-3 transition-all duration-500 font-medium hover:bg-white/10 hover:scale-105 hover:shadow-lg backdrop-blur-sm hover:translate-x-2"
                  (click)="closeMobileMenu()"
                  [attr.aria-label]="item.label + ' sayfasına git'"
                >
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-accent-500 rounded-full group-hover:scale-125 group-hover:bg-accent-400 transition-all duration-300"></div>
                    <span class="group-hover:translate-x-1 transition-transform duration-300 whitespace-nowrap">{{ item.label }}</span>
                  </div>
                </a>
              }
            </div>
            
            <!-- Mobile Submenu -->
            <div class="border-t border-white/20 pt-6">
              <div class="flex items-center space-x-3 mb-4 px-4">
                <div class="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
                <div class="text-white text-lg font-semibold">İstatistikler</div>
              </div>
              
              <div class="space-y-2">
                <a href="/about" class="group block text-white/80 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-950 rounded-xl px-4 py-3 transition-all duration-500 font-medium hover:bg-gradient-to-r hover:from-accent-500/20 hover:to-blue-500/20 hover:scale-105 hover:shadow-lg backdrop-blur-sm hover:translate-x-2"
                   (click)="closeMobileMenu()">
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <div class="font-medium">Okul Panel Nedir?</div>
                      <div class="text-xs text-white/60 group-hover:text-white/80">Platform hakkında bilgi</div>
                      <div class="text-xs text-white/60 group-hover:text-white/80 mt-1 font-medium flex items-center">
                        <span>Bilgi almak için sayfaya git</span>
                        <svg class="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                
                <a href="/features" class="group block text-white/80 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-950 rounded-xl px-4 py-3 transition-all duration-500 font-medium hover:bg-gradient-to-r hover:from-accent-500/20 hover:to-blue-500/20 hover:scale-105 hover:shadow-lg backdrop-blur-sm hover:translate-x-2"
                   (click)="closeMobileMenu()">
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <div class="font-medium">Neden Okul Panel?</div>
                      <div class="text-xs text-white/60 group-hover:text-white/80">Avantajlar ve özellikler</div>
                      <div class="text-xs text-white/60 group-hover:text-white/80 mt-1 font-medium flex items-center">
                        <span>Bilgi almak için sayfaya git</span>
                        <svg class="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                
                <a href="/faq" class="group block text-white/80 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-950 rounded-xl px-4 py-3 transition-all duration-500 font-medium hover:bg-gradient-to-r hover:from-accent-500/20 hover:to-blue-500/20 hover:scale-105 hover:shadow-lg backdrop-blur-sm hover:translate-x-2"
                   (click)="closeMobileMenu()">
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <div class="font-medium">Sık Sorulan Sorular</div>
                      <div class="text-xs text-white/60 group-hover:text-white/80">Merak edilen sorular</div>
                      <div class="text-xs text-white/60 group-hover:text-white/80 mt-1 font-medium flex items-center">
                        <span>Bilgi almak için sayfaya git</span>
                        <svg class="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                
                <a href="/testimonials" class="group block text-white/80 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-950 rounded-xl px-4 py-3 transition-all duration-500 font-medium hover:bg-gradient-to-r hover:from-accent-500/20 hover:to-blue-500/20 hover:scale-105 hover:shadow-lg backdrop-blur-sm hover:translate-x-2"
                   (click)="closeMobileMenu()">
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <div class="font-medium">Kullanıcı Yorumları</div>
                      <div class="text-xs text-white/60 group-hover:text-white/80">Müşteri deneyimleri</div>
                      <div class="text-xs text-white/60 group-hover:text-white/80 mt-1 font-medium flex items-center">
                        <span>Bilgi almak için sayfaya git</span>
                        <svg class="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            
            <!-- CTA Button -->
            <div class="pt-4">
              <a
                routerLink="/contact"
                class="group block w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2 focus:ring-offset-primary-950 text-center hover:scale-105 hover:shadow-xl hover:shadow-accent-500/25 hover:translate-y-1"
                (click)="closeMobileMenu()"
                aria-label="İletişim sayfasına git"
              >
                <div class="flex items-center justify-center space-x-2">
                  <span>Demo Talep Et</span>
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
      </div>
    </nav>
  `,
  styles: [`
    .mobile-menu {
      background-color: #0f172a !important;
      border-left: 2px solid #f59e0b !important;
    }
    
    #mobile-menu {
      background-color: #0f172a !important;
      border-left: 2px solid #f59e0b !important;
    }
    
    .mobile-menu-toggle {
      @apply lg:hidden;
    }
    
    /* Dropdown menu initial state - hidden with opacity */
    [data-submenu] {
      opacity: 0;
      visibility: hidden;
      transform: translateY(6px) scale(0.75) rotate(2deg);
      filter: blur(4px);
    }
    
    [data-submenu].visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1) rotate(0deg);
      filter: blur(0);
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
  public router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  
  navigationItems = signal<NavigationItem[]>([]);
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  isHomePage = signal(true);
  subMenuOpen = signal(false);
  selectedSchoolType = signal<'private' | 'public'>('private');

  ngOnInit() {
    this.navigationItems.set(this.contentService.getNavigationItems());
    
          // Listen to navigation start
          this.router.events
            .pipe(filter(event => event instanceof NavigationStart))
            .subscribe(() => {
              this.isNavigating = true;
              this.subMenuOpen.set(false);
              this.mobileMenuOpen.set(false);
              // Clear any pending timeouts
              if (this.subMenuTimeout) {
                clearTimeout(this.subMenuTimeout);
                this.subMenuTimeout = null;
              }
              // Force close dropdown immediately and prevent reopening
              this.subMenuOpen.set(false);
            });

    // Listen to route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Reset navigation flag after a short delay
        setTimeout(() => {
          this.isNavigating = false;
        }, 500);
        
        this.isHomePage.set(event.url === '/' || event.url === '');
        // Close mobile menu and submenu on navigation
        this.mobileMenuOpen.set(false);
        this.subMenuOpen.set(false);
        
        // Update scroll state for new page
        if (isPlatformBrowser(this.platformId)) {
          this.isScrolled.set(window.scrollY > 50 || !this.isHomePage());
        }
        
        // Mobile menu will be recreated with *ngIf
      });

    // Set initial state
    this.isHomePage.set(this.router.url === '/' || this.router.url === '');
    
    // Set initial scroll state for non-home pages
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 50 || !this.isHomePage());
    }

    // Listen for custom submenu events (only in browser)
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('openSubMenu', (event: any) => {
        this.subMenuOpen.set(true);
      });
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 50);
      // Close mobile menu and submenu when scrolling
      if (this.mobileMenuOpen()) {
        this.mobileMenuOpen.set(false);
      }
      if (this.subMenuOpen()) {
        this.subMenuOpen.set(false);
      }
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (isPlatformBrowser(this.platformId) && window.innerWidth >= 1024) {
      this.mobileMenuOpen.set(false);
      this.subMenuOpen.set(false);
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      const target = event.target as HTMLElement;
      const submenu = document.querySelector('[data-submenu]');
      
      if (submenu && !submenu.contains(target) && this.subMenuOpen()) {
        this.subMenuOpen.set(false);
      }
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

  getNavbarBackground(): string {
    const currentUrl = this.router.url;
    const isHome = currentUrl === '/' || currentUrl === '';
    const shouldShow = !isHome || this.isScrolled();
    return shouldShow ? 'linear-gradient(to right, #0f172a, #1e293b, #0f172a)' : 'transparent';
  }

  getNavbarBackdrop(): string {
    const currentUrl = this.router.url;
    const isHome = currentUrl === '/' || currentUrl === '';
    const shouldShow = !isHome || this.isScrolled();
    return shouldShow ? 'blur(12px)' : 'none';
  }

  getNavbarBorder(): string {
    const currentUrl = this.router.url;
    const isHome = currentUrl === '/' || currentUrl === '';
    const shouldShow = !isHome || this.isScrolled();
    return shouldShow ? '1px solid rgba(255, 255, 255, 0.1)' : 'none';
  }

  selectSchoolType(type: 'private' | 'public'): void {
    this.selectedSchoolType.set(type);
    // Navigate to pricing page with school type parameter
    this.router.navigate(['/pricing'], { queryParams: { schoolType: type } });
    this.subMenuOpen.set(false);
  }

  onSubMenuEnter() {
    // Don't open if navigating
    if (this.isNavigating) {
      return;
    }

    // Clear any existing timeout
    if (this.subMenuTimeout) {
      clearTimeout(this.subMenuTimeout);
      this.subMenuTimeout = null;
    }

    this.subMenuOpen.set(true);
  }

  onSubMenuLeave() {
    // Clear any existing timeout
    if (this.subMenuTimeout) {
      clearTimeout(this.subMenuTimeout);
    }
    
    // Add delay to prevent flickering
    this.subMenuTimeout = setTimeout(() => {
      this.subMenuOpen.set(false);
      this.subMenuTimeout = null;
    }, 300);
  }

  isNavigating = false;
  private subMenuTimeout: any = null;
}
