import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { Screenshot } from '../../interfaces/content.interface';
import { fadeInAnimation, slideUpAnimation, staggerAnimation } from '../../animations/page-animations';

@Component({
  selector: 'app-screenshots',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeInAnimation, slideUpAnimation, staggerAnimation],
  template: `
    <section id="ekranlar" class="section py-20 bg-neutral-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16" [@fadeIn]>
          <h2 class="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Ekran <span class="text-accent-500">Görüntüleri</span>
          </h2>
          <p class="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Kullanıcı dostu arayüz tasarımımızı ve güçlü özelliklerimizi keşfedin. 
            Modern, sezgisel ve etkili tasarım anlayışımız.
          </p>
        </div>

        <!-- Screenshots Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" [@stagger]>
          @for (screenshot of screenshots(); track screenshot.id) {
            <div class="group cursor-pointer" (click)="openLightbox(screenshot)">
              <div class="card overflow-hidden">
                <!-- Image Container -->
                <div class="relative aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 overflow-hidden">
                  <img
                    [src]="screenshot.imageUrl"
                    [alt]="screenshot.alt"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    (error)="onImageError($event)"
                  />
                  
                  <!-- Overlay -->
                  <div class="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/20 transition-all duration-300 flex items-center justify-center">
                    <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div class="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <svg class="w-6 h-6 text-primary-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Content -->
                <div class="p-6">
                  <h3 class="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {{ screenshot.title }}
                  </h3>
                  <p class="text-neutral-600 leading-relaxed">
                    {{ screenshot.description }}
                  </p>
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Lightbox Modal -->
        @if (selectedScreenshot()) {
          <div 
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            (click)="closeLightbox()"
            [@fadeIn]
          >
            <div class="relative max-w-6xl max-h-[90vh] mx-4">
              <!-- Close Button -->
              <button
                class="absolute -top-12 right-0 text-white/80 hover:text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-500"
                (click)="closeLightbox()"
                aria-label="Lightbox'ı kapat"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>

              <!-- Image -->
              <img
                [src]="selectedScreenshot()!.imageUrl"
                [alt]="selectedScreenshot()!.alt"
                class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                (click)="$event.stopPropagation()"
              />

              <!-- Caption -->
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 class="text-xl font-semibold text-white mb-2">
                  {{ selectedScreenshot()!.title }}
                </h3>
                <p class="text-white/80">
                  {{ selectedScreenshot()!.description }}
                </p>
              </div>
            </div>
          </div>
        }

        <!-- Call to Action -->
        <div class="text-center mt-16" [@fadeIn]>
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 max-w-2xl mx-auto">
            <h3 class="text-2xl font-bold text-neutral-900 mb-4">
              Canlı Demo ile Keşfedin
            </h3>
            <p class="text-neutral-600 mb-6">
              Tüm özellikleri interaktif demo ortamında deneyimleyin. 
              Gerçek verilerle nasıl çalıştığını görün.
            </p>
            <button 
              class="btn-primary px-8 py-3"
              (click)="requestDemo()"
            >
              Canlı Demo İste
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    .card {
      position: relative;
      overflow: hidden;
    }
    
    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 214, 10, 0.1), transparent);
      transition: left 0.6s;
      z-index: 1;
    }
    
    .card:hover::before {
      left: 100%;
    }
  `],
})
export class ScreenshotsComponent implements OnInit {
  private contentService = inject(ContentService);
  
  screenshots = signal<Screenshot[]>([]);
  selectedScreenshot = signal<Screenshot | null>(null);

  ngOnInit() {
    // Placeholder screenshots - bunlar gerçek ekran görüntüleriyle değiştirilecek
    this.screenshots.set([
      {
        id: 'dashboard',
        title: 'Ana Dashboard',
        description: 'Kullanıcı dostu ana kontrol paneli ve özet bilgiler',
        imageUrl: '/assets/images/screenshots/dashboard.jpg',
        alt: 'Okul Panel ana dashboard ekran görüntüsü',
      },
      {
        id: 'student-management',
        title: 'Öğrenci Yönetimi',
        description: 'Kapsamlı öğrenci bilgi sistemi ve takip ekranı',
        imageUrl: '/assets/images/screenshots/student-management.jpg',
        alt: 'Öğrenci yönetimi ekran görüntüsü',
      },
      {
        id: 'grade-system',
        title: 'Not Sistemi',
        description: 'Esnek not girişi ve değerlendirme ekranı',
        imageUrl: '/assets/images/screenshots/grade-system.jpg',
        alt: 'Not sistemi ekran görüntüsü',
      },
      {
        id: 'parent-portal',
        title: 'Veli Portalı',
        description: 'Veliler için özel tasarlanmış takip arayüzü',
        imageUrl: '/assets/images/screenshots/parent-portal.jpg',
        alt: 'Veli portalı ekran görüntüsü',
      },
      {
        id: 'reports',
        title: 'Raporlama',
        description: 'Detaylı analitik ve görselleştirme araçları',
        imageUrl: '/assets/images/screenshots/reports.jpg',
        alt: 'Raporlama ekran görüntüsü',
      },
      {
        id: 'mobile-app',
        title: 'Mobil Uygulama',
        description: 'Responsive tasarım ve mobil optimizasyon',
        imageUrl: '/assets/images/screenshots/mobile-app.jpg',
        alt: 'Mobil uygulama ekran görüntüsü',
      },
    ]);
  }

  openLightbox(screenshot: Screenshot) {
    this.selectedScreenshot.set(screenshot);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedScreenshot.set(null);
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    // Placeholder image for broken links
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDIyNVYxNzVIMTc1VjEyNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHN2ZyBjbGFzcz0idGV4dC1ncmF5LTQwMCB3LTggaC04IiBmaWxsPSJjdXJyZW50Q29sb3IiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CjxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxNWwtNS01IDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIvPgo8L3N2Zz4KPHRleHQgeD0iMjAwIiB5PSIyMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RWtyYW4gR8O2csO8bnTDvHPDvCBZw7xrbGVuaXlvcjwvdGV4dD4KPC9zdmc+';
  }

  requestDemo() {
    // Navigate to contact section
    const contactElement = document.querySelector('#iletisim');
    if (contactElement) {
      const offsetTop = contactElement.getBoundingClientRect().top + window.pageYOffset;
      const navbarHeight = 80;
      window.scrollTo({
        top: offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  }
}
