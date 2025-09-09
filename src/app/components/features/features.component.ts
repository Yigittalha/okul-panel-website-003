import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { Feature } from '../../interfaces/content.interface';
import { fadeInAnimation, slideUpAnimation, staggerAnimation, scaleInAnimation } from '../../animations/page-animations';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, RouterModule],
  animations: [fadeInAnimation, slideUpAnimation, staggerAnimation, scaleInAnimation],
  template: `
    <section id="ozellikler" class="min-h-screen pt-0 pb-20 bg-gradient-to-r from-primary-950 via-primary-900 to-primary-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <!-- Section Header -->
        <div class="text-center mb-16" [@fadeIn]>
          <a routerLink="/" class="inline-block text-white/60 hover:text-white text-sm mb-4 transition-colors duration-300">
            ← Ana Sayfaya Dön
          </a>
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            Güçlü <span class="text-accent-500">Özellikler</span>
          </h2>
          <p class="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Okul yönetiminizi kolaylaştıran, öğrenci başarısını artıran ve eğitim kalitesini 
            yüksek tutan kapsamlı özellikler. Her ihtiyacınız için özel olarak tasarlanmış çözümler.
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" [@stagger]>
          @for (feature of features(); track feature.id) {
            <div class="group">
              <div class="card p-6 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/20 bg-white/10 backdrop-blur-sm">
                <!-- Icon -->
                <div class="mb-6">
                  <div 
                    class="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    [class]="getIconClasses(feature.color)"
                  >
                    @switch (feature.icon) {
                      @case ('users') {
                        <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-1.1.9-2 2-2s2 .9 2 2V18h2v-4h3v4h1v2H3v-2h1z"/>
                        </svg>
                      }
                      @case ('clipboard-list') {
                        <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                        </svg>
                      }
                      @case ('calendar-check') {
                        <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-4-4 1.41-1.41L12 14.17l6.59-6.59L20 9l-8 8z"/>
                        </svg>
                      }
                      @case ('heart') {
                        <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                      }
                      @case ('message-circle') {
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                        </svg>
                      }
                      @case ('bar-chart-3') {
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                        </svg>
                      }
                      @case ('smartphone') {
                        <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v12H7V4z"/>
                        </svg>
                      }
                      @case ('link') {
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                        </svg>
                      }
                    }
                  </div>
                </div>

                <!-- Content -->
                <div>
                  <h3 class="text-xl font-semibold text-white mb-3 group-hover:text-accent-400 transition-colors duration-300">
                    {{ feature.title }}
                  </h3>
                  <p class="text-white/80 leading-relaxed">
                    {{ feature.description }}
                  </p>
                </div>

                <!-- Hover Effect -->
                <div class="absolute inset-0 border-2 border-transparent group-hover:border-accent-200 rounded-xl transition-all duration-300 pointer-events-none"></div>
              </div>
            </div>
          }
        </div>

        <!-- Call to Action -->
        <div class="text-center mt-16" [@fadeIn]>
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 max-w-3xl mx-auto">
            <h3 class="text-2xl font-bold text-white mb-4">
              Tüm Özellikleri Deneyimleyin
            </h3>
            <p class="text-white/80 mb-6">
              30 gün ücretsiz deneme sürümü ile tüm özelliklerimizi test edin. 
              Kredi kartı bilgisi gerekmez.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                class="btn-primary px-8 py-3"
                (click)="startTrial()"
              >
                Ücretsiz Denemeyi Başlat
              </button>
              <button 
                class="btn-secondary px-8 py-3"
                (click)="viewDemo()"
              >
                Canlı Demo İzle
              </button>
            </div>
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
      transition: left 0.5s;
    }
    
    .card:hover::before {
      left: 100%;
    }
  `],
})
export class FeaturesComponent implements OnInit {
  private contentService = inject(ContentService);
  
  features = signal<Feature[]>([]);

  ngOnInit() {
    this.features.set(this.contentService.getFeatures());
  }

  getIconClasses(color?: string): string {
    const baseClasses = 'bg-gradient-to-br shadow-lg';
    
    switch (color) {
      case 'blue':
        return `${baseClasses} from-blue-500 to-blue-600`;
      case 'green':
        return `${baseClasses} from-green-500 to-green-600`;
      case 'orange':
        return `${baseClasses} from-orange-500 to-orange-600`;
      case 'red':
        return `${baseClasses} from-red-500 to-red-600`;
      case 'purple':
        return `${baseClasses} from-purple-500 to-purple-600`;
      case 'indigo':
        return `${baseClasses} from-indigo-500 to-indigo-600`;
      case 'teal':
        return `${baseClasses} from-teal-500 to-teal-600`;
      case 'cyan':
        return `${baseClasses} from-cyan-500 to-cyan-600`;
      default:
        return `${baseClasses} from-primary-500 to-primary-600`;
    }
  }

  startTrial() {
    // Navigate to contact form
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

  viewDemo() {
    // Open demo video or navigate to demo section
    window.open('https://www.youtube.com/watch?v=demo', '_blank');
  }
}
