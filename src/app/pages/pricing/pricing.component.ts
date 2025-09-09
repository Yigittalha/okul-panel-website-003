import { Component, OnInit, inject, signal, computed, effect, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

import { PricingService } from '../../services/pricing.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { fadeInAnimation, slideUpAnimation, staggerAnimation, scaleInAnimation } from '../../animations/page-animations';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NavbarComponent],
  animations: [fadeInAnimation, slideUpAnimation, staggerAnimation, scaleInAnimation],
  template: `
    <div class="min-h-screen">
      <app-navbar></app-navbar>
      
      <main class="pt-20">
        <!-- Header -->
        <section class="section py-10 bg-gradient-to-r from-primary-950 via-primary-900 to-primary-950 text-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div [@fadeIn]>
              <a routerLink="/" class="inline-block text-white/60 hover:text-white text-sm mb-4 transition-colors duration-300">
                ← Ana Sayfaya Dön
              </a>
              <h1 class="text-4xl lg:text-6xl font-bold mb-6">
                <span class="text-accent-500">Şeffaf</span> Fiyatlandırma
              </h1>
              <p class="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto">
                İhtiyacınıza göre esnek fiyatlandırma. Öğrenci sayısı baz alınarak hesaplanan ücretlendirme modeli ile her okul için adil ve şeffaf çözümler sunuyoruz. Devlet okulları için özel tekliflere iletişim kanallarımız üzerinden ulaşabilirsiniz.
              </p>
            </div>
          </div>
        </section>

        <!-- Pricing Calculator -->
        <section class="section py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 relative overflow-hidden">
          <!-- Background Elements -->
          <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-10 hover:bg-white/15 transition-all duration-300" [@slideUp]>
              <div class="text-center mb-8">
                <div class="w-16 h-16 bg-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h2 class="text-3xl font-bold text-white mb-2">
                  Fiyat Hesaplayıcı
                </h2>
                <p class="text-white/70">Öğrenci sayısına göre fiyatınızı hesaplayın</p>
              </div>

              <!-- Compact Calculator -->
              <div class="grid lg:grid-cols-2 gap-8 items-center">
                <!-- Left: Controls -->
                <div class="space-y-6">
                  <!-- School Type Selection -->
                  <div class="bg-white/20 border border-white/30 rounded-lg p-4">
                    <h4 class="font-semibold text-white text-sm mb-3">Okul Türü Seçin</h4>
                    <div class="flex space-x-2">
                      <button 
                        (click)="schoolType.set('private')"
                        [class]="schoolType() === 'private' ? 'bg-accent-500 text-white shadow-lg' : 'bg-white/20 text-white/80 hover:bg-white/30'"
                        class="flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                      >
                        Özel Okul
                      </button>
                      <button 
                        (click)="schoolType.set('public')"
                        [class]="schoolType() === 'public' ? 'bg-accent-500 text-white shadow-lg' : 'bg-white/20 text-white/80 hover:bg-white/30'"
                        class="flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                      >
                        Devlet Okulu
                      </button>
                    </div>
                    <p class="text-white/70 text-xs mt-2">
                      {{ schoolType() === 'private' ? 'Tam destek paketi ile özel okul fiyatlandırması' : 'Devlet okulları için özel fiyatlandırma' }}
                    </p>
                  </div>

                  <!-- Student Count Input -->
                  <div>
                    <label for="studentCount" class="block text-sm font-semibold text-white mb-3">
                      Öğrenci Sayısı: <span class="text-accent-400">{{ currentStudentCount() }}</span>
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
                      <div class="flex justify-between text-xs text-white/60 mt-1">
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
                        class="w-32 px-3 py-2 text-center text-sm bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-accent-400 focus:border-accent-400 focus:bg-white/20 transition-all duration-300"
                        aria-label="Öğrenci sayısı input"
                      />
                    </div>
                  </div>

                  <!-- Price Breakdown -->
                  <div *ngIf="schoolType() === 'private'" class="bg-white/20 border border-white/30 rounded-xl p-4 text-xs">
                    <div class="space-y-1 text-white/80">
                      <div class="flex justify-between">
                        <span>Taban fiyat:</span>
                        <span>{{ pricingService.formatPrice(calculation().basePrice) }}</span>
                      </div>
                      <div class="flex justify-between">
                        <span>Öğrenci başına:</span>
                        <span>{{ pricingService.formatPrice(calculation().perStudentPrice) }}</span>
                      </div>
                      <div class="flex justify-between font-semibold text-accent-400">
                        <span>Toplam:</span>
                        <span>{{ pricingService.formatPrice(calculation().totalPrice) }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Right: Price Display & Features -->
                <div class="space-y-6">
                  <!-- Price Display -->
                  <div class="text-center">
                    <div *ngIf="schoolType() === 'private'; else publicSchoolDisplay" class="text-4xl font-bold text-white mb-2">
                      <span class="animated-number">{{ animatedPrice() }}</span>
                      <span class="text-lg font-normal text-white/70">/yıllık</span>
                    </div>
                    <ng-template #publicSchoolDisplay>
                      <div class="text-center">
                        <div class="text-2xl font-bold text-white mb-4">Devlet Okulları İçin</div>
                        <a routerLink="/contact" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-400 text-white font-semibold rounded-xl hover:from-accent-600 hover:to-accent-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                          </svg>
                          İletişime Geç
                        </a>
                      </div>
                    </ng-template>
                    <p *ngIf="schoolType() === 'private'" class="text-sm text-white/60">
                      {{ calculation().studentCount }} öğrenci için
                    </p>
                  </div>

                  <!-- Compact Features -->
                  <div class="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <h4 class="font-semibold text-white mb-3">Özellikler</h4>
                      <ul class="space-y-2 text-white/80">
                        <li class="flex items-center"><span class="text-accent-400 mr-2">✓</span> Öğrenci Yönetimi</li>
                        <li class="flex items-center"><span class="text-accent-400 mr-2">✓</span> Veli Bildirimleri</li>
                        <li class="flex items-center"><span class="text-accent-400 mr-2">✓</span> Ders Programı</li>
                        <li class="flex items-center"><span class="text-accent-400 mr-2">✓</span> Devamsızlık</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white mb-3">Destek</h4>
                      <ul class="space-y-2 text-white/80">
                        <li class="flex items-center"><span class="text-accent-400 mr-2">✓</span> 7/24 Destek</li>
                        <li class="flex items-center"><span class="text-accent-400 mr-2">✓</span> Ücretsiz Kurulum</li>
                        <li class="flex items-center"><span class="text-accent-400 mr-2">✓</span> Eğitim</li>
                        <li class="flex items-center"><span class="text-accent-400 mr-2">✓</span> Güncellemeler</li>
                      </ul>
                    </div>
                  </div>

                  <!-- CTA -->
                  <div class="text-center">
                    <a
                      routerLink="/contact"
                      class="inline-flex items-center bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      aria-label="Teklif almak için iletişim sayfasına git"
                    >
                      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      {{ schoolType() === 'public' ? 'İletişime Geç' : 'Detaylı Teklif Al' }}
                    </a>
                  </div>
                </div>
              </div>

              <!-- Warning -->
              <div class="bg-amber-500/20 border border-amber-400/30 rounded-xl p-4 mt-6">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-amber-400 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                  <div>
                    <h4 class="font-semibold text-white text-sm mb-1">Önemli Uyarı</h4>
                    <p class="text-white/80 text-xs">
                      {{ pricingService.getDetailedDisclaimerText() }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
    .slider {
      background: linear-gradient(to right, #f59e0b 0%, #f59e0b var(--value, 0%), #e5e7eb var(--value, 0%), #e5e7eb 100%);
    }
    .slider::-webkit-slider-thumb {
      appearance: none;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: #f59e0b;
      cursor: pointer;
      border: 2px solid #ffffff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    .slider::-moz-range-thumb {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: #f59e0b;
      cursor: pointer;
      border: 2px solid #ffffff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    .animated-number {
      display: inline-block;
      transition: all 0.3s ease;
    }
  `]
})
export class PricingPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  public pricingService = inject(PricingService);
  private platformId = inject(PLATFORM_ID);
  private route = inject(ActivatedRoute);

  // Signals
  studentCount = signal(100);
  isScrolled = signal(false);
  animatedPrice = signal('₺0');
  schoolType = signal<'private' | 'public'>('private');

  // Computed
  calculation = computed(() => this.pricingService.getBasicCalculation(this.studentCount(), true, this.schoolType()));
  currentStudentCount = computed(() => this.studentCount());

  // Constraints
  constraints = {
    min: 50,
    max: 2000,
    step: 50
  };

  constructor() {
    // Effect to update price changes
    effect(() => {
      const newPrice = this.pricingService.formatPrice(this.calculation().totalPrice);
      this.animatedPrice.set(newPrice);
    });
  }

  ngOnInit() {
    this.title.setTitle('Fiyatlandırma - Okul Panel | Şeffaf Fiyatlandırma');
    this.meta.updateTag({
      name: 'description',
      content: 'Okul Panel fiyatlandırması. Öğrenci sayısına göre fiyat hesaplayın. 3 gün ücretsiz deneme. Şeffaf fiyatlandırma politikası.'
    });

    // Read query parameters
    this.route.queryParams.subscribe(params => {
      if (params['schoolType'] && (params['schoolType'] === 'private' || params['schoolType'] === 'public')) {
        this.schoolType.set(params['schoolType']);
      }
    });

    // Set initial animated price
    this.animatedPrice.set(this.pricingService.formatPrice(this.calculation().totalPrice));
  }

  updateStudentCount(value: number) {
    this.studentCount.set(value);
  }
}