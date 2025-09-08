import { Component, OnInit, inject, signal, computed, effect, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

// Components
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';

// Services
import { PricingService, PricingCalculation } from '../../services/pricing.service';


// Animations
import { fadeInUp, listStagger, fadeIn } from '../../shared/animations/presets';

// Utils
import { Counter } from '../../shared/utils/counter';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NavbarComponent,
    HeroComponent,
  ],
  animations: [fadeInUp, listStagger, fadeIn],
  template: `
    <div class="min-h-screen bg-white">
      <!-- Navigation -->
      <app-navbar></app-navbar>
      
      <!-- Main Content -->
      <main id="main-content">
        <!-- Hero Section -->
        <app-hero></app-hero>


      <!-- Quick Feature Highlights -->
      <section class="section py-20 bg-gradient-to-br from-blue-50 via-white to-accent-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16" [@fadeInUp]="'visible'">
            <h2 class="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              Neden <span class="text-accent-500">Okul Panel</span>?
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8" [@listStagger]="'visible'">
            <div class="text-center feature-card hover:transform hover:scale-105 transition-all duration-300 p-4 rounded-lg">
              <div class="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-neutral-900 mb-2">Kolay Kullanım</h3>
              <p class="text-neutral-600">Sezgisel arayüz ile 5 dakikada öğrenin</p>
            </div>

            <div class="text-center feature-card hover:transform hover:scale-105 transition-all duration-300 p-4 rounded-lg">
              <div class="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-neutral-900 mb-2">Güvenli & KVKK Uyumlu</h3>
              <p class="text-neutral-600">Verileriniz güvende, yasal uyumluluk garantili</p>
            </div>

            <div class="text-center feature-card hover:transform hover:scale-105 transition-all duration-300 p-4 rounded-lg">
              <div class="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v12H7V4z"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-neutral-900 mb-2">Her Cihazda Erişim</h3>
              <p class="text-neutral-600">Mobil, tablet, bilgisayar - her yerden kullanın</p>
            </div>
          </div>

          <div class="text-center mt-12" [@fadeInUp]="'visible'">
            <a
              routerLink="/features"
              class="btn-secondary px-8 py-3 hover:scale-105 transition-all duration-300"
              aria-label="Tüm özellikleri görüntüle"
            >
              Tüm Özellikleri Keşfet
            </a>
          </div>
        </div>
      </section>

      <!-- Interactive Pricing Calculator -->
      <section class="section py-20 bg-gradient-to-br from-neutral-50 via-blue-50 to-accent-50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16" [@fadeInUp]="'visible'">
            <h2 class="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Basit ve <span class="text-accent-500">Şeffaf</span> Fiyatlandırma
            </h2>
            <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
              İhtiyacınıza uygun planı seçin. 3 gün deneme süreci ile sistemi test edin.
            </p>
          </div>

          <!-- Interactive Calculator Card -->
          <div class="bg-white rounded-3xl shadow-2xl border border-neutral-200 p-8 mb-12" [@fadeInUp]="'visible'">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <!-- Left: Interactive Controls -->
              <div class="space-y-8">
                <!-- Annual Pricing Info -->
                <div class="text-center">
                  <div class="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-2xl font-semibold">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Yıllık Fiyatlandırma - %15 İndirim
                  </div>
                </div>

                <!-- School Type Selection -->
                <div class="text-center">
                  <h4 class="font-bold text-neutral-900 text-lg mb-4">Okul Türü</h4>
                  <div class="inline-flex bg-neutral-100 rounded-2xl p-1">
                    <button
                      (click)="updateSchoolType('private')"
                      [class]="schoolType() === 'private' ? 'bg-accent-500 text-white shadow-lg' : 'text-neutral-600'"
                      class="px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                      aria-label="Özel okul fiyatlandırması seç"
                    >
                      Özel Okul
                    </button>
                    <button
                      (click)="updateSchoolType('public')"
                      [class]="schoolType() === 'public' ? 'bg-accent-500 text-white shadow-lg' : 'text-neutral-600'"
                      class="px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                      aria-label="Devlet okulu fiyatlandırması seç"
                    >
                      Devlet Okulu
                    </button>
                  </div>
                </div>

                <!-- Student Count Input -->
                <div class="space-y-4">
                  <label for="homeStudentCount" class="block text-lg font-bold text-neutral-700">
                    Öğrenci Sayısı: <span class="text-accent-600 text-2xl">{{ currentStudentCount() }}</span>
                  </label>
                  
                  <!-- Enhanced Range Slider with Tooltip -->
                  <div class="relative">
                    <div class="relative">
                      <input
                        type="range"
                        id="homeStudentCount"
                        [min]="constraints.min"
                        [max]="constraints.max"
                        [step]="constraints.step"
                        [ngModel]="currentStudentCount()"
                        (ngModelChange)="updateStudentCount($event)"
                        class="w-full h-3 bg-gradient-to-r from-neutral-200 to-neutral-300 rounded-full appearance-none cursor-pointer enhanced-slider"
                        aria-label="Öğrenci sayısı slider"
                      />
                      <!-- Tooltip -->
                      <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary-950 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 transition-opacity duration-200 pointer-events-none slider-tooltip">
                        {{ currentStudentCount() }} öğrenci
                        <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary-950"></div>
                      </div>
                    </div>
                    <div class="flex justify-between text-sm text-neutral-500 mt-2">
                      <span class="font-medium">{{ constraints.min }}</span>
                      <span class="font-medium">{{ constraints.max }}</span>
                    </div>
                  </div>

                  <!-- Number Input with Step Buttons -->
                  <div class="flex justify-center">
                    <div class="flex items-center bg-white border-2 border-neutral-300 rounded-2xl overflow-hidden">
                      <button
                        (click)="updateStudentCount(Math.max(constraints.min, currentStudentCount() - constraints.step))"
                        class="px-4 py-4 bg-neutral-100 hover:bg-neutral-200 transition-colors"
                        aria-label="Öğrenci sayısını azalt"
                      >
                        <svg class="w-5 h-5 text-neutral-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 13H5v-2h14v2z"/>
                        </svg>
                      </button>
                      <input
                        type="number"
                        [min]="constraints.min"
                        [max]="constraints.max"
                        [step]="constraints.step"
                        [ngModel]="currentStudentCount()"
                        (ngModelChange)="updateStudentCount($event)"
                        class="w-32 px-4 py-4 text-center text-xl font-bold focus:outline-none"
                        aria-label="Öğrenci sayısı input"
                      />
                      <button
                        (click)="updateStudentCount(Math.min(constraints.max, currentStudentCount() + constraints.step))"
                        class="px-4 py-4 bg-neutral-100 hover:bg-neutral-200 transition-colors"
                        aria-label="Öğrenci sayısını artır"
                      >
                        <svg class="w-5 h-5 text-neutral-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Price Breakdown with Animation -->
                <div class="bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-2xl p-6 space-y-3">
                  <div class="flex justify-between items-center text-sm">
                    <span class="text-neutral-600">Taban fiyat:</span>
                    <span class="font-semibold text-neutral-800">{{ pricingService.formatPrice(calculation().basePrice) }}</span>
                  </div>
                  <div class="flex justify-between items-center text-sm">
                    <span class="text-neutral-600">Öğrenci başı:</span>
                    <span class="font-semibold text-neutral-800">{{ pricingService.formatPrice(calculation().perStudentPrice) }}</span>
                  </div>
                  <div class="border-t border-neutral-300 pt-3">
                    <div class="flex justify-between items-center">
                      <span class="font-bold text-neutral-900">Toplam:</span>
                      <span class="text-2xl font-bold text-primary-950 animated-price">{{ animatedPrice() }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right: Price Display & Features -->
              <div class="space-y-8">
                <!-- Enhanced Price Display -->
                <div class="text-center">
                  @if (schoolType() === 'public') {
                    <!-- Devlet Okulu Özel Mesaj -->
                    <div class="relative">
                      <div class="text-4xl font-bold text-primary-950 mb-4">
                        Özel Fiyatlandırma
                      </div>
                      <div class="text-lg text-neutral-600 mb-6">
                        Devlet okulları için özel fiyatlandırma mevcuttur
                      </div>
                      <a
                        routerLink="/contact"
                        class="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-800 rounded-full text-lg font-semibold mb-6 hover:bg-blue-200 hover:scale-105 transition-all duration-300 cursor-pointer"
                        aria-label="Devlet okulu için özel fiyatlandırma almak üzere iletişim sayfasına git"
                      >
                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        İletişime Geçin
                      </a>
                    </div>
                  } @else {
                    <!-- Özel Okul Fiyatlandırması -->
                    <div class="relative">
                      <div class="text-5xl font-bold text-primary-950 mb-2 relative">
                        <span class="animated-price price-highlight">{{ animatedPrice() }}</span>
                      </div>
                      <div class="text-lg text-neutral-600 mb-4">
                        {{ calculation().studentCount }} öğrenci için ≈ {{ pricingService.formatPrice(calculation().perStudentPerYear) }}/öğrenci/yıl
                      </div>
                      <div class="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        3 gün deneme
                      </div>
                    </div>
                  }
                  
                  <!-- Trust Badges -->
                  <div class="flex justify-center gap-2 mb-6">
                    <div class="flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                      <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                      KVKK
                    </div>
                    <div class="flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                      <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      ISO 27001
                    </div>
                    <div class="flex items-center px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
                      <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Para iade (30 gün)
                    </div>
                  </div>
                </div>

                <!-- Enhanced Features Grid -->
                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-3">
                    <h4 class="font-bold text-neutral-900 text-lg flex items-center">
                      <div class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      Özellikler
                    </h4>
                    <ul class="space-y-2 text-sm text-neutral-600">
                      <li class="flex items-center hover:text-green-600 transition-colors">
                        <span class="text-green-500 mr-2">✓</span> Öğrenci Yönetimi
                      </li>
                      <li class="flex items-center hover:text-green-600 transition-colors">
                        <span class="text-green-500 mr-2">✓</span> Veli Bildirimleri
                      </li>
                      <li class="flex items-center hover:text-green-600 transition-colors">
                        <span class="text-green-500 mr-2">✓</span> Ders Programı
                      </li>
                      <li class="flex items-center hover:text-green-600 transition-colors">
                        <span class="text-green-500 mr-2">✓</span> Devamsızlık
                      </li>
                    </ul>
                  </div>
                  <div class="space-y-3">
                    <h4 class="font-bold text-neutral-900 text-lg flex items-center">
                      <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      Destek
                    </h4>
                    <ul class="space-y-2 text-sm text-neutral-600">
                      <li class="flex items-center hover:text-blue-600 transition-colors">
                        <span class="text-blue-500 mr-2">✓</span> 7/24 Destek
                      </li>
                      <li class="flex items-center hover:text-blue-600 transition-colors">
                        <span class="text-blue-500 mr-2">✓</span> Ücretsiz Kurulum
                      </li>
                      <li class="flex items-center hover:text-blue-600 transition-colors">
                        <span class="text-blue-500 mr-2">✓</span> Eğitim
                      </li>
                      <li class="flex items-center hover:text-blue-600 transition-colors">
                        <span class="text-blue-500 mr-2">✓</span> Güncellemeler
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Enhanced CTA -->
                <div class="text-center space-y-4">
                  @if (schoolType() === 'public') {
                    <!-- Devlet Okulu CTA -->
                    <a
                      routerLink="/contact"
                      class="inline-flex items-center justify-center w-full max-w-md px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-2xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                      aria-label="Devlet okulu için özel fiyatlandırma almak üzere iletişim sayfasına git"
                    >
                      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      Özel Fiyatlandırma Al
                    </a>
                  } @else {
                    <!-- Özel Okul CTA -->
                    <a
                      routerLink="/contact"
                      class="inline-flex items-center justify-center w-full max-w-md px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-2xl hover:from-accent-600 hover:to-accent-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                      aria-label="Detaylı teklif almak için iletişim sayfasına git"
                    >
                      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      Detaylı Teklif Al
                    </a>
                    <div>
                      <a
                        routerLink="/contact"
                        class="text-accent-600 hover:text-accent-700 font-semibold text-sm hover:underline transition-colors"
                        aria-label="Hemen canlı demo planlamak için iletişim sayfasına git"
                      >
                        Hemen canlı demo planla →
                      </a>
                    </div>
                  }
                </div>
              </div>
            </div>

            <!-- Enhanced Warning -->
            <div class="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-6 mt-8">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-amber-800 text-lg mb-2">Önemli Uyarı</h4>
                  <p class="text-amber-700 text-sm">
                    {{ pricingService.getDetailedDisclaimerText() }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Info with Animation -->
          <div class="text-center" [@fadeInUp]="'visible'">
            <div class="flex flex-wrap justify-center gap-6 mb-6">
              <div class="flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                3 gün deneme süreci
              </div>
              <div class="flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Kurulum ücretsiz
              </div>
            </div>
            <a 
              routerLink="/pricing" 
              class="inline-flex items-center text-accent-600 hover:text-accent-700 font-bold text-lg hover:scale-105 transition-all duration-300"
            >
              Detaylı fiyatlandırma ve karşılaştırma
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="section py-16 bg-gradient-to-r from-primary-950 to-blue-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center" [@listStagger]="'visible'">
            
            <div class="stats-card">
              <div class="text-4xl lg:text-5xl font-bold mb-2 text-accent-400">
                {{ schoolCount() }}+
              </div>
              <div class="text-lg text-blue-100">Okul</div>
              <div class="text-sm text-blue-200 mt-1">Aktif kullanım</div>
            </div>

            <div class="stats-card">
              <div class="text-4xl lg:text-5xl font-bold mb-2 text-accent-400">
                {{ studentCount().toLocaleString('tr-TR') }}+
              </div>
              <div class="text-lg text-blue-100">Öğrenci</div>
              <div class="text-sm text-blue-200 mt-1">Kayıtlı kullanıcı</div>
            </div>

            <div class="stats-card">
              <div class="text-4xl lg:text-5xl font-bold mb-2 text-accent-400">
                %{{ satisfactionRate() }}
              </div>
              <div class="text-lg text-blue-100">Memnuniyet</div>
              <div class="text-sm text-blue-200 mt-1">Kullanıcı puanı</div>
            </div>

          </div>
        </div>
      </section>
      </main>

      <!-- Footer -->
      <footer class="bg-primary-950 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- Company Info -->
            <div class="md:col-span-2">
              <div class="flex items-center space-x-3 mb-4">
                <img 
                  src="assets/brand/logo.svg" 
                  alt="Okul Panel Logo" 
                  class="w-10 h-10 rounded-full"
                  loading="lazy"
                  decoding="async"
                />
                <span class="text-2xl font-bold">Okul Panel</span>
              </div>
              <p class="text-white/80 mb-6 max-w-md">
                Eğitimin dijital geleceğini bugünden yaşayın. Okul yönetiminde güvenilir çözüm ortağınız.
              </p>
            </div>

            <!-- Quick Links -->
            <div>
              <h3 class="text-lg font-semibold mb-4">Hızlı Linkler</h3>
              <ul class="space-y-2 text-white/80">
                <li><a routerLink="/features" class="hover:text-accent-500 transition-colors">Özellikler</a></li>
                <li><a routerLink="/pricing" class="hover:text-accent-500 transition-colors">Fiyatlandırma</a></li>
                <li><a routerLink="/about" class="hover:text-accent-500 transition-colors">Hakkında</a></li>
                <li><a routerLink="/contact" class="hover:text-accent-500 transition-colors">İletişim</a></li>
              </ul>
            </div>

            <!-- Legal -->
            <div>
              <h3 class="text-lg font-semibold mb-4">Yasal</h3>
              <ul class="space-y-2 text-white/80">
                <li><a routerLink="/kvkk" class="hover:text-accent-500 transition-colors">KVKK</a></li>
                <li><a routerLink="/cerez-politikasi" class="hover:text-accent-500 transition-colors">Çerez Politikası</a></li>
                <li><a routerLink="/sartlar" class="hover:text-accent-500 transition-colors">Kullanım Şartları</a></li>
              </ul>
            </div>
          </div>

          <!-- Bottom Bar -->
          <div class="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p class="text-white/60 text-sm">
              © 2024 Okul Panel. Tüm hakları saklıdır.
            </p>
            <p class="text-white/60 text-sm mt-4 md:mt-0">
              Türkiye'de tasarlandı ve geliştirildi ❤️
            </p>
          </div>
        </div>
      </footer>
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
    }

    .slider::-moz-range-thumb {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: #FFD60A;
      cursor: pointer;
      border: 2px solid #0D1B2A;
    }

    .enhanced-slider::-webkit-slider-thumb {
      appearance: none;
      height: 24px;
      width: 24px;
      border-radius: 50%;
      background: linear-gradient(135deg, #FFD60A, #FFA500);
      cursor: pointer;
      border: 3px solid #0D1B2A;
      box-shadow: 0 4px 12px rgba(255, 214, 10, 0.4);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .enhanced-slider::-webkit-slider-thumb:hover {
      transform: scale(1.2);
      box-shadow: 0 6px 20px rgba(255, 214, 10, 0.6);
    }

    .enhanced-slider::-moz-range-thumb {
      height: 24px;
      width: 24px;
      border-radius: 50%;
      background: linear-gradient(135deg, #FFD60A, #FFA500);
      cursor: pointer;
      border: 3px solid #0D1B2A;
      box-shadow: 0 4px 12px rgba(255, 214, 10, 0.4);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .enhanced-slider::-moz-range-thumb:hover {
      transform: scale(1.2);
      box-shadow: 0 6px 20px rgba(255, 214, 10, 0.6);
    }

    /* Slider tooltip */
    .enhanced-slider:hover + .slider-tooltip,
    .enhanced-slider:focus + .slider-tooltip {
      opacity: 1;
    }

    .animated-price {
      display: inline-block;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Price update animation */
    .price-updating {
      transform: scale(0.98);
      opacity: 0.8;
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
      .animated-price,
      .price-highlight,
      .enhanced-slider::-webkit-slider-thumb,
      .enhanced-slider::-moz-range-thumb {
        transition: none;
      }
      
      .slider-tooltip {
        transition: none;
      }
    }
    
    /* Price highlight animation */
    .price-highlight {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      will-change: transform, color, text-shadow;
    }
    
    .price-updating {
      transform: scale(1.05);
      color: #059669; /* emerald-600 */
      text-shadow: 0 0 12px rgba(5, 150, 105, 0.3);
    }
    
    .price-success {
      transform: scale(1.02);
      color: #0891b2; /* sky-600 */
      text-shadow: 0 0 8px rgba(8, 145, 178, 0.2);
    }
    
    
    /* Stats card styles */
    .stats-card {
      padding: 1rem;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .stats-card:hover {
      transform: translateY(-4px);
    }
    
    /* Number animation styles */
    .stats-card .text-4xl,
    .stats-card .text-5xl {
      will-change: transform;
      font-variant-numeric: tabular-nums;
    }
  `],
})
export class HomeComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  public pricingService = inject(PricingService);
  private platformId = inject(PLATFORM_ID);

  // Math object for template usage
  Math = Math;

  // Stats for demo counter animation
  statsAnimated = signal(false);
  schoolCount = signal(0);
  studentCount = signal(0);
  satisfactionRate = signal(0);

  // Pricing calculator state
  currentStudentCount = signal(100);
  isAnnual = signal(true);
  schoolType = signal<'private' | 'public'>('private');
  constraints = this.pricingService.getConstraints();
  
  // Animated price state
  private displayPrice = signal(750);
  private isAnimating = signal(false);
  
  // Computed property for current calculation
  calculation = computed(() => {
    return this.pricingService.getBasicCalculation(
      this.currentStudentCount(),
      this.isAnnual(),
      this.schoolType()
    );
  });
  
  // Computed property for formatted animated price
  animatedPrice = computed(() => this.pricingService.formatPrice(this.displayPrice()));

  // Single effect to handle price animation when calculation changes
  private priceEffect = effect(() => {
    if (isPlatformBrowser(this.platformId)) {
      const newCalculation = this.calculation();
      this.animateToPrice(newCalculation.finalTotal);
    } else {
      // SSR: Set price immediately without animation
      const newCalculation = this.calculation();
      this.displayPrice.set(newCalculation.finalTotal);
    }
  });

  


  ngOnInit() {
    this.setupSEO();
    
    // Initialize display price
    const initialCalculation = this.pricingService.getBasicCalculation(100);
    this.displayPrice.set(initialCalculation.finalTotal);
    
    // Animate stats after component loads
    setTimeout(() => this.animateStats(), 800);
  }


  updateStudentCount(count: number | string): void {
    const numericCount = typeof count === 'string' ? parseInt(count, 10) : count;
    if (!isNaN(numericCount) && numericCount >= 0) {
      // Update local signal directly
      this.currentStudentCount.set(numericCount);
    }
  }

  updateBillingPeriod(isAnnual: boolean): void {
    this.isAnnual.set(isAnnual);
  }

  updateSchoolType(schoolType: 'private' | 'public'): void {
    this.schoolType.set(schoolType);
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
      duration: 600, // Slightly longer for home page
      easing: Counter.easing.easeOutCubic,
      onUpdate: (value) => {
        this.displayPrice.set(value);
      },
      onComplete: () => {
        this.isAnimating.set(false);
      }
    }, this.platformId);
  }

  private animateStats(): void {
    if (this.statsAnimated()) return;
    
    this.statsAnimated.set(true);

    // Animate school count
    Counter.count(0, 150, (value) => {
      this.schoolCount.set(value);
    }, 2000, this.platformId);

    // Animate student count with delay
    setTimeout(() => {
      Counter.count(0, 25000, (value) => {
        this.studentCount.set(value);
      }, 2500, this.platformId);
    }, 300);

    // Animate satisfaction rate with delay
    setTimeout(() => {
      Counter.count(0, 98, (value) => {
        this.satisfactionRate.set(value);
      }, 2000, this.platformId);
    }, 600);
  }


  private setupSEO() {
    this.title.setTitle('Okul Panel - Eğitimin Dijital Geleceği | Okul Yönetim Sistemi');

    this.meta.updateTag({
      name: 'description',
      content: 'Okul yönetiminizi kolaylaştıran, öğrenci başarısını artıran kapsamlı eğitim yönetim sistemi. KVKK uyumlu, güvenli ve kullanıcı dostu çözüm.'
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Okul Panel - Eğitimin Dijital Geleceği'
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'Okul yönetiminizi kolaylaştıran, öğrenci başarısını artıran kapsamlı eğitim yönetim sistemi.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'okul yönetim sistemi, eğitim yazılımı, öğrenci bilgi sistemi, okul paneli, eğitim teknolojisi, KVKK uyumlu, okul otomasyonu'
    });
  }
}

