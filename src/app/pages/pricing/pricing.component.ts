import { Component, OnInit, inject, signal, computed, effect, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { PricingService, PricingCalculation } from '../../services/pricing.service';
import { Counter } from '../../shared/utils/counter';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NavbarComponent],
  template: `
    <div class="min-h-screen bg-white">
      <app-navbar></app-navbar>
      
      <main class="pt-20">
        <!-- Header -->
        <section class="section py-20 bg-gradient-to-br from-primary-950 to-primary-800 text-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl lg:text-6xl font-bold mb-6">
              Şeffaf <span class="text-accent-500">Fiyatlandırma</span>
            </h1>
            <p class="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto">
              İhtiyacınıza uygun paketi seçin. 3 gün deneme süreci ile sistemi test edin.
            </p>
          </div>
        </section>

        <!-- Pricing Calculator -->
        <section class="section py-16 bg-neutral-50">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6">
              <h2 class="text-2xl font-bold text-neutral-900 mb-6 text-center">
                Fiyat Hesaplayıcı
              </h2>

              <!-- Compact Calculator -->
              <div class="grid lg:grid-cols-2 gap-8 items-center">
                <!-- Left: Controls -->
                <div class="space-y-6">
                  <!-- School Type Info -->
                  <div class="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div class="flex items-start">
                      <svg class="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                      <div>
                        <h4 class="font-semibold text-blue-800 text-sm mb-1">Okul Türü</h4>
                        <p class="text-blue-800 text-xs">
                          <strong>Özel Okullar:</strong> Tam destek paketi<br>
                          <strong>Devlet Okulları:</strong> Özel fiyatlandırma
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Student Count Input -->
                  <div>
                    <label for="studentCount" class="block text-sm font-semibold text-neutral-700 mb-3">
                      Öğrenci Sayısı: <span class="text-accent-600">{{ currentStudentCount() }}</span>
                    </label>
                    
                    <!-- Range Slider -->
                    <div class="mb-3">
                      <input
                        type="range"
                        id="studentCount"
                        [min]="constraints.min"
                        [max]="constraints.max"
                        [step]="constraints.step"
                        [ngModel]="currentStudentCount()"
                        (ngModelChange)="updateStudentCount($event)"
                        class="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
                        aria-label="Öğrenci sayısı slider"
                      />
                      <div class="flex justify-between text-xs text-neutral-500 mt-1">
                        <span>{{ constraints.min }}</span>
                        <span>{{ constraints.max }}</span>
                      </div>
                    </div>

                    <!-- Number Input -->
                    <div class="flex justify-center">
                      <input
                        type="number"
                        [min]="constraints.min"
                        [max]="constraints.max"
                        [step]="constraints.step"
                        [ngModel]="currentStudentCount()"
                        (ngModelChange)="updateStudentCount($event)"
                        class="w-32 px-3 py-2 text-center text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                        aria-label="Öğrenci sayısı input"
                      />
                    </div>
                  </div>

                  <!-- Price Breakdown -->
                  <div class="bg-neutral-50 rounded-lg p-3 text-xs">
                    <div class="space-y-1 text-neutral-600">
                      <div class="flex justify-between">
                        <span>Taban fiyat:</span>
                        <span>{{ pricingService.formatPrice(calculation().basePrice) }}</span>
                      </div>
                      <div class="flex justify-between">
                        <span>Öğrenci başı:</span>
                        <span>{{ pricingService.formatPrice(calculation().perStudentPrice) }}</span>
                      </div>
                      <div class="flex justify-between border-t border-neutral-200 pt-1 font-semibold">
                        <span>Toplam:</span>
                        <span class="text-primary-950">{{ animatedPrice() }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Right: Price Display & Features -->
                <div class="space-y-6">
                  <!-- Price Display -->
                  <div class="text-center">
                    <div class="text-4xl font-bold text-primary-950 mb-2">
                      <span class="animated-number">{{ animatedPrice() }}</span>
                      <span class="text-lg font-normal text-neutral-600">/yıllık</span>
                    </div>
                    <p class="text-sm text-neutral-500">
                      {{ calculation().studentCount }} öğrenci için
                    </p>
                  </div>

                  <!-- Compact Features -->
                  <div class="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <h4 class="font-semibold text-neutral-900 mb-2">Özellikler</h4>
                      <ul class="space-y-1 text-neutral-600">
                        <li class="flex items-center"><span class="text-green-500 mr-1">✓</span> Öğrenci Yönetimi</li>
                        <li class="flex items-center"><span class="text-green-500 mr-1">✓</span> Veli Bildirimleri</li>
                        <li class="flex items-center"><span class="text-green-500 mr-1">✓</span> Ders Programı</li>
                        <li class="flex items-center"><span class="text-green-500 mr-1">✓</span> Devamsızlık</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-semibold text-neutral-900 mb-2">Destek</h4>
                      <ul class="space-y-1 text-neutral-600">
                        <li class="flex items-center"><span class="text-blue-500 mr-1">✓</span> 7/24 Destek</li>
                        <li class="flex items-center"><span class="text-blue-500 mr-1">✓</span> Ücretsiz Kurulum</li>
                        <li class="flex items-center"><span class="text-blue-500 mr-1">✓</span> Eğitim</li>
                        <li class="flex items-center"><span class="text-blue-500 mr-1">✓</span> Güncellemeler</li>
                      </ul>
                    </div>
                  </div>

                  <!-- CTA -->
                  <div class="text-center">
                    <a
                      routerLink="/contact"
                      class="btn-primary px-8 py-3 text-sm font-semibold"
                      aria-label="Teklif almak için iletişim sayfasına git"
                    >
                      Detaylı Teklif Al
                    </a>
                  </div>
                </div>
              </div>

              <!-- Warning -->
              <div class="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                  <div>
                    <h4 class="font-semibold text-amber-800 text-sm mb-1">Önemli Uyarı</h4>
                    <p class="text-amber-800 text-xs">
                      {{ pricingService.getDetailedDisclaimerText() }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Back to Home -->
        <section class="section py-16 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <a
              routerLink="/"
              class="btn-secondary px-8 py-3 inline-block"
              aria-label="Ana sayfaya dön"
            >
              ← Ana Sayfaya Dön
            </a>
          </div>
        </section>
      </main>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    .section {
      content-visibility: auto;
      contain-intrinsic-size: 1px 1000px;
    }

    .slider::-webkit-slider-thumb {
      appearance: none;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: #FFD60A;
      cursor: pointer;
      border: 2px solid #0D1B2A;
      transition: transform 0.2s ease;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .slider::-webkit-slider-thumb:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }

    .slider::-moz-range-thumb {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: #FFD60A;
      cursor: pointer;
      border: 2px solid #0D1B2A;
      transition: transform 0.2s ease;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .slider::-moz-range-thumb:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }

    .animated-number {
      display: inline-block;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transform-origin: center;
    }

    .animated-number.updating {
      transform: scale(1.05);
      color: #FFD60A;
    }
  `]
})
export class PricingPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  public pricingService = inject(PricingService);
  private platformId = inject(PLATFORM_ID);

  currentStudentCount = signal(100);
  constraints = this.pricingService.getConstraints();
  
  // Animated price state
  private displayPrice = signal(750);
  private isAnimating = signal(false);
  
  // Computed property for current calculation based on student count
  calculation = computed(() => {
    return this.pricingService.getBasicCalculation(this.currentStudentCount());
  });
  
  // Computed property for formatted animated price
  animatedPrice = computed(() => this.pricingService.formatPrice(this.displayPrice()));

  // Single effect to handle price animation when student count changes
  private priceEffect = effect(() => {
    if (isPlatformBrowser(this.platformId)) {
      const studentCount = this.currentStudentCount();
      const newCalculation = this.pricingService.getBasicCalculation(studentCount);
      this.animateToPrice(newCalculation.finalTotal);
    } else {
      // SSR: Set price immediately without animation
      const studentCount = this.currentStudentCount();
      const newCalculation = this.pricingService.getBasicCalculation(studentCount);
      this.displayPrice.set(newCalculation.finalTotal);
    }
  });

  ngOnInit() {
    this.title.setTitle('Fiyatlandırma - Okul Panel | Şeffaf ve Uygun Fiyat Planları');
    this.meta.updateTag({
      name: 'description',
      content: 'Okul Panel fiyat hesaplayıcı ile okulunuza uygun planı bulun. Şeffaf fiyatlandırma, 3 gün deneme süreci.'
    });

    // Initialize display price
    const initialCalculation = this.pricingService.getBasicCalculation(100);
    this.displayPrice.set(initialCalculation.finalTotal);
  }

  updateStudentCount(count: number | string): void {
    const numericCount = typeof count === 'string' ? parseInt(count, 10) : count;
    if (!isNaN(numericCount) && numericCount >= 0) {
      // Update local signal directly instead of going through service
      this.currentStudentCount.set(numericCount);
    }
  }

  private animateToPrice(targetPrice: number): void {
    // Only animate in browser
    if (!isPlatformBrowser(this.platformId)) {
      this.displayPrice.set(targetPrice);
      return;
    }
    
    if (this.isAnimating()) return;
    
    const startPrice = this.displayPrice();
    if (startPrice === targetPrice) return;
    
    this.isAnimating.set(true);
    
    // Use Counter utility for smooth animation
    Counter.animate({
      from: startPrice,
      to: targetPrice,
      duration: 500, // Slightly longer for pricing page
      easing: Counter.easing.easeOutCubic,
      onUpdate: (value) => {
        this.displayPrice.set(value);
      },
      onComplete: () => {
        this.isAnimating.set(false);
      }
    }, this.platformId);
  }
}
