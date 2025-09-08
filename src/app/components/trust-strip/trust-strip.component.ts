import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { TrustBadge } from '../../interfaces/content.interface';
import { fadeInAnimation, staggerAnimation } from '../../animations/page-animations';

@Component({
  selector: 'app-trust-strip',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeInAnimation, staggerAnimation],
  template: `
    <section class="py-16 bg-white border-b border-neutral-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-12" [@fadeIn]>
          <h2 class="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Güvenilir ve <span class="text-accent-500">Sertifikalı</span>
          </h2>
          <p class="text-xl text-neutral-600 max-w-3xl mx-auto">
            Eğitim verileriniz en yüksek güvenlik standartlarıyla korunur. 
            Sektörün önde gelen sertifikalarına sahip güvenilir çözüm.
          </p>
        </div>

        <!-- Trust Badges Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" [@stagger]>
          @for (badge of trustBadges(); track badge.id) {
            <div class="text-center group">
              <div class="relative mb-4">
                <!-- Icon Container -->
                <div class="w-16 h-16 mx-auto bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                  @switch (badge.icon) {
                    @case ('shield-check') {
                      <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    }
                    @case ('lock') {
                      <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15.1 8H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z"/>
                      </svg>
                    }
                    @case ('server') {
                      <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 1h16c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2zm0 8h16c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2z"/>
                        <circle cx="6" cy="5" r="1"/>
                        <circle cx="6" cy="15" r="1"/>
                      </svg>
                    }
                    @case ('cloud') {
                      <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                      </svg>
                    }
                  }
                </div>
                
                <!-- Decorative Ring -->
                <div class="absolute inset-0 w-16 h-16 mx-auto rounded-2xl border-2 border-accent-200 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></div>
              </div>

              <!-- Badge Content -->
              <h3 class="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                {{ badge.title }}
              </h3>
              <p class="text-sm text-neutral-600 leading-relaxed">
                {{ badge.description }}
              </p>
            </div>
          }
        </div>

        <!-- Additional Trust Indicators -->
        <div class="mt-16 pt-12 border-t border-neutral-200" [@fadeIn]>
          <div class="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <!-- ISO 27001 Badge -->
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                <span class="text-xs font-bold text-neutral-600">ISO</span>
              </div>
              <div>
                <div class="text-sm font-semibold text-neutral-700">ISO 27001</div>
                <div class="text-xs text-neutral-500">Bilgi Güvenliği</div>
              </div>
            </div>

            <!-- SSL Certificate -->
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-neutral-700">SSL Sertifikası</div>
                <div class="text-xs text-neutral-500">256-bit Şifreleme</div>
              </div>
            </div>

            <!-- KVKK Compliance -->
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-neutral-700">KVKK Uyumlu</div>
                <div class="text-xs text-neutral-500">Veri Koruma</div>
              </div>
            </div>

            <!-- Uptime Guarantee -->
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-neutral-700">%99.9 Uptime</div>
                <div class="text-xs text-neutral-500">Kesintisiz Hizmet</div>
              </div>
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
  `],
})
export class TrustStripComponent implements OnInit {
  private contentService = inject(ContentService);
  
  trustBadges = signal<TrustBadge[]>([]);

  ngOnInit() {
    this.trustBadges.set(this.contentService.getTrustBadges());
  }
}
