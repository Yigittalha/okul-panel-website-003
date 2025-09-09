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

        <!-- OKUL PANEL NEDİR SECTION -->
        <section id="hero-2" class="section depth-section py-20 gradient-bg" data-depth="1">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
              <!-- LEFT: Copy -->
              <div class="space-y-8">
                <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up hero-title-glow" style="animation-delay: 0.1s">
                  <span class="text-accent-500">Okul Panel</span> Nedir?
                </h2>
                
                <!-- Açıklama Paragrafı -->
                <p class="text-xl text-blue-100 leading-relaxed animate-fade-in-up hero-text-glow" style="animation-delay: 0.2s">
                  Okul Panel, okul yönetim süreçlerini dijitalleştiren kapsamlı bir okul yönetim platformudur. 
                  Hem web hem de mobil uygulama üzerinden erişilebilen sistem; öğretmenler, öğrenciler ve 
                  veliler arasındaki iletişimi güçlendirir, akademik süreçleri kolayca takip etmenizi sağlar.
                </p>

                <!-- Badges -->
                <div class="flex flex-wrap gap-3 animate-fade-in-up" aria-hidden="true" style="animation-delay: 0.3s">
                  <span class="px-4 py-2 bg-white/20 text-white border border-white/30 rounded-full text-sm font-medium hero-badge" style="animation-delay: 0.4s">
                    Öğrenci • Öğretmen • Veli
                  </span>
                  <span class="px-4 py-2 bg-white/20 text-white border border-white/30 rounded-full text-sm font-medium hero-badge" style="animation-delay: 0.5s">
                    Mobil
                  </span>
                  <span class="px-4 py-2 bg-white/20 text-white border border-white/30 rounded-full text-sm font-medium hero-badge" style="animation-delay: 0.6s">
                    Dark Mode Desteği
                  </span>
                </div>

                <!-- Features List -->
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-100 animate-fade-in-up" style="animation-delay: 0.7s">
                  <li class="flex items-start space-x-3 hero-feature-item" style="animation-delay: 0.8s">
                    <svg class="w-6 h-6 text-accent-400 mt-1 flex-shrink-0 hero-feature-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12l4 4L19 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Öğrenci – Öğretmen – Veli Modülleri</span>
                  </li>
                  <li class="flex items-start space-x-3 hero-feature-item" style="animation-delay: 0.9s">
                    <svg class="w-6 h-6 text-accent-400 mt-1 flex-shrink-0 hero-feature-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12l4 4L19 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Mobil Kullanım</span>
                  </li>
                  <li class="flex items-start space-x-3 hero-feature-item" style="animation-delay: 1.0s">
                    <svg class="w-6 h-6 text-accent-400 mt-1 flex-shrink-0 hero-feature-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12l4 4L19 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Dark Mode Desteği</span>
                  </li>
                  <li class="flex items-start space-x-3 hero-feature-item" style="animation-delay: 1.1s">
                    <svg class="w-6 h-6 text-accent-400 mt-1 flex-shrink-0 hero-feature-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12l4 4L19 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Akıllı Ders Programı &amp; Yoklama</span>
                  </li>
                  <li class="flex items-start space-x-3 hero-feature-item" style="animation-delay: 1.2s">
                    <svg class="w-6 h-6 text-accent-400 mt-1 flex-shrink-0 hero-feature-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12l4 4L19 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Not &amp; Sınav Yönetimi, Ödevler</span>
                  </li>
                  <li class="flex items-start space-x-3 hero-feature-item" style="animation-delay: 1.3s">
                    <svg class="w-6 h-6 text-accent-400 mt-1 flex-shrink-0 hero-feature-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12l4 4L19 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Anlık Senkronizasyon &amp; Bildirimler</span>
                  </li>
                </ul>

                <!-- Kapanış Paragrafı -->
                <p class="text-lg text-blue-100 leading-relaxed animate-fade-in-up" style="animation-delay: 1.2s">
                  Tüm bu özellikler, modern bir okul yönetim sistemi olan <span class="text-accent-400 font-semibold">Okul Panel</span> 
                  ile okulunuzun dijital dönüşümünü kolaylaştırır.
                </p>

                <!-- CTAs -->
                <div class="flex flex-wrap gap-4 animate-fade-in-up" style="animation-delay: 1.3s">
                  <a routerLink="/about" class="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-2xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 hero-cta-primary" style="animation-delay: 1.4s">
                    Detaylı Bilgi
                  </a>
                  <a routerLink="/contact" class="px-8 py-4 bg-accent-500 text-white rounded-2xl font-semibold hover:bg-accent-600 hover:scale-105 transition-all duration-300 shadow-lg hero-cta-secondary" style="animation-delay: 1.5s">
                    Canlı Demo
                  </a>
                </div>
              </div>

              <!-- RIGHT: Device Mocks -->
              <div class="relative max-w-2xl mx-auto lg:max-w-none">
                <div class="relative flex gap-4 justify-center items-start phone-mocks-container">
                  <!-- Phone Mock 1: Ders Programı -->
                  <div class="relative">
                    <svg class="w-full max-w-xs mx-auto phone-float" viewBox="0 0 320 640" role="img" aria-hidden="true">
                    <defs>
                      <linearGradient id="phoneGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#1e293b"/>
                        <stop offset="100%" stop-color="#0f172a"/>
                      </linearGradient>
                      <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="2" flood-color="#000" flood-opacity="0.1" stdDeviation="4"/>
                      </filter>
                    </defs>
                    
                    <!-- Phone Frame -->
                    <rect x="10" y="10" rx="32" ry="32" width="300" height="620" fill="#1a1a1a" stroke="#333" stroke-width="2"/>
                    
                    <!-- Screen -->
                    <rect x="25" y="60" rx="20" ry="20" width="270" height="520" fill="url(#phoneGrad)"/>
                    
                    <!-- Status Bar -->
                    <rect x="40" y="75" rx="8" ry="8" width="60" height="16" fill="rgba(255,255,255,0.2)"/>
                    <rect x="220" y="75" rx="8" ry="8" width="60" height="16" fill="rgba(255,255,255,0.2)"/>
                    
                    <!-- Header -->
                    <rect x="40" y="110" rx="12" ry="12" width="240" height="50" fill="rgba(255,255,255,0.1)" filter="url(#cardShadow)" class="card-slide-in"/>
                    <text x="60" y="135" fill="white" font-family="system-ui" font-size="14" font-weight="600">Ders Programı</text>
                    <circle cx="250" cy="135" r="8" fill="#10b981" class="pulse"/>
                    
                    <!-- Class Schedule Cards -->
                    <g class="card-slide-in" style="animation-delay: 0.1s">
                      <rect x="40" y="180" rx="10" ry="10" width="240" height="45" fill="rgba(255,255,255,0.08)" filter="url(#cardShadow)"/>
                      <rect x="50" y="190" rx="4" ry="4" width="30" height="25" fill="#3b82f6"/>
                      <text x="90" y="202" fill="white" font-family="system-ui" font-size="11" font-weight="500">Matematik</text>
                      <text x="90" y="215" fill="#94a3b8" font-family="system-ui" font-size="9">09:00 - 09:45 | A Sınıfı</text>
                      <text x="220" y="208" fill="#10b981" font-family="system-ui" font-size="10" font-weight="500">Aktif</text>
                    </g>
                    
                    <g class="card-slide-in" style="animation-delay: 0.2s">
                      <rect x="40" y="235" rx="10" ry="10" width="240" height="45" fill="rgba(255,255,255,0.08)" filter="url(#cardShadow)"/>
                      <rect x="50" y="245" rx="4" ry="4" width="30" height="25" fill="#10b981"/>
                      <text x="90" y="257" fill="white" font-family="system-ui" font-size="11" font-weight="500">Türkçe</text>
                      <text x="90" y="270" fill="#94a3b8" font-family="system-ui" font-size="9">09:50 - 10:35 | B Sınıfı</text>
                      <text x="210" y="263" fill="#64748b" font-family="system-ui" font-size="10">Bekliyor</text>
                    </g>
                    
                    <g class="card-slide-in" style="animation-delay: 0.3s">
                      <rect x="40" y="290" rx="10" ry="10" width="240" height="45" fill="rgba(255,255,255,0.08)" filter="url(#cardShadow)"/>
                      <rect x="50" y="300" rx="4" ry="4" width="30" height="25" fill="#f59e0b"/>
                      <text x="90" y="312" fill="white" font-family="system-ui" font-size="11" font-weight="500">Fen Bilgisi</text>
                      <text x="90" y="325" fill="#94a3b8" font-family="system-ui" font-size="9">10:45 - 11:30 | C Sınıfı</text>
                      <text x="210" y="318" fill="#64748b" font-family="system-ui" font-size="10">Bekliyor</text>
                    </g>
                    
                    <g class="card-slide-in" style="animation-delay: 0.4s">
                      <rect x="40" y="345" rx="10" ry="10" width="240" height="45" fill="rgba(255,255,255,0.08)" filter="url(#cardShadow)"/>
                      <rect x="50" y="355" rx="4" ry="4" width="30" height="25" fill="#8b5cf6"/>
                      <text x="90" y="367" fill="white" font-family="system-ui" font-size="11" font-weight="500">Sosyal Bilgiler</text>
                      <text x="90" y="380" fill="#94a3b8" font-family="system-ui" font-size="9">11:35 - 12:20 | A Sınıfı</text>
                      <text x="210" y="373" fill="#64748b" font-family="system-ui" font-size="10">Bekliyor</text>
                    </g>
                    
                    <g class="card-slide-in" style="animation-delay: 0.5s">
                      <rect x="40" y="400" rx="10" ry="10" width="240" height="45" fill="rgba(255,255,255,0.08)" filter="url(#cardShadow)"/>
                      <rect x="50" y="410" rx="4" ry="4" width="30" height="25" fill="#ef4444"/>
                      <text x="90" y="422" fill="white" font-family="system-ui" font-size="11" font-weight="500">Beden Eğitimi</text>
                      <text x="90" y="435" fill="#94a3b8" font-family="system-ui" font-size="9">13:30 - 14:15 | Spor Salonu</text>
                      <text x="210" y="428" fill="#64748b" font-family="system-ui" font-size="10">Bekliyor</text>
                    </g>
                    
                    <g class="card-slide-in" style="animation-delay: 0.6s">
                      <rect x="40" y="455" rx="10" ry="10" width="240" height="45" fill="rgba(255,255,255,0.08)" filter="url(#cardShadow)"/>
                      <rect x="50" y="465" rx="4" ry="4" width="30" height="25" fill="#06b6d4"/>
                      <text x="90" y="477" fill="white" font-family="system-ui" font-size="11" font-weight="500">İngilizce</text>
                      <text x="90" y="490" fill="#94a3b8" font-family="system-ui" font-size="9">14:20 - 15:05 | B Sınıfı</text>
                      <text x="210" y="483" fill="#64748b" font-family="system-ui" font-size="10">Bekliyor</text>
                    </g>
                    
                    <!-- Bottom Stats -->
                    <rect x="40" y="520" rx="12" ry="12" width="240" height="40" fill="rgba(255,255,255,0.05)" class="shimmer"/>
                    <text x="60" y="540" fill="#94a3b8" font-family="system-ui" font-size="10">Bugün: 6 ders</text>
                    <text x="60" y="552" fill="#94a3b8" font-family="system-ui" font-size="10">Tamamlanan: 1/6</text>
                    <circle cx="250" cy="540" r="12" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="60 15" class="pulse"/>
                    <text x="245" y="545" fill="#10b981" font-family="system-ui" font-size="8" font-weight="600">17%</text>
                    </svg>
                  </div>

                  <!-- Phone Mock 2: Öğretmen Profili -->
                  <div class="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <svg class="w-full max-w-[280px] mx-auto phone-float" viewBox="0 0 320 640" role="img" aria-hidden="true" style="animation-delay: 0.3s; transform: scale(0.85);">
                      <defs>
                        <linearGradient id="teacherGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stop-color="#f8fafc"/>
                          <stop offset="100%" stop-color="#e2e8f0"/>
                        </linearGradient>
                        <filter id="teacherShadow" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="2" flood-color="#000" flood-opacity="0.1" stdDeviation="4"/>
                        </filter>
                      </defs>
                      
                      <!-- Phone Frame -->
                      <rect x="10" y="10" rx="32" ry="32" width="300" height="620" fill="#1a1a1a" stroke="#333" stroke-width="2"/>
                      
                      <!-- Screen -->
                      <rect x="25" y="60" rx="20" ry="20" width="270" height="520" fill="url(#teacherGrad)"/>
                      
                      <!-- Status Bar -->
                      <rect x="40" y="75" rx="8" ry="8" width="60" height="16" fill="rgba(0,0,0,0.1)"/>
                      <rect x="220" y="75" rx="8" ry="8" width="60" height="16" fill="rgba(0,0,0,0.1)"/>
                      
                      <!-- Header with Hamburger -->
                      <rect x="40" y="100" rx="12" ry="12" width="240" height="50" fill="white" filter="url(#teacherShadow)" class="card-slide-in"/>
                      <rect x="50" y="115" rx="2" ry="2" width="20" height="3" fill="#64748b"/>
                      <rect x="50" y="120" rx="2" ry="2" width="20" height="3" fill="#64748b"/>
                      <rect x="50" y="125" rx="2" ry="2" width="20" height="3" fill="#64748b"/>
                      <text x="160" y="135" fill="#1e293b" font-family="system-ui" font-size="14" font-weight="600" text-anchor="middle">Öğretmen Profili</text>
                      <circle cx="250" cy="125" r="8" fill="#FFD60A"/>
                      <circle cx="250" cy="125" r="4" fill="white"/>
                      
                      <!-- Teacher Profile Card -->
                      <rect x="40" y="170" rx="16" ry="16" width="240" height="180" fill="white" stroke="#FFD60A" stroke-width="3" filter="url(#teacherShadow)" class="card-slide-in" style="animation-delay: 0.1s"/>
                      
                      <!-- Avatar -->
                      <circle cx="160" cy="200" r="25" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2"/>
                      <circle cx="160" cy="195" r="8" fill="#94a3b8"/>
                      <rect x="150" y="205" rx="8" ry="8" width="20" height="15" fill="#94a3b8"/>
                      
                      <!-- Name -->
                      <text x="160" y="240" fill="#1e293b" font-family="system-ui" font-size="14" font-weight="700" text-anchor="middle">Ahmet Yılmaz</text>
                      <text x="160" y="255" fill="#64748b" font-family="system-ui" font-size="11" text-anchor="middle">Matematik Öğretmeni</text>
                      <text x="160" y="270" fill="#94a3b8" font-family="system-ui" font-size="10" text-anchor="middle">ID: 39</text>
                      
                      <!-- Action Button -->
                      <rect x="120" y="280" rx="12" ry="12" width="80" height="24" fill="#FFD60A"/>
                      <rect x="125" y="285" rx="2" ry="2" width="8" height="8" fill="white"/>
                      <text x="140" y="295" fill="white" font-family="system-ui" font-size="9" font-weight="600">Anasayfa</text>
                      
                      <!-- Personal Info Card -->
                      <rect x="40" y="370" rx="12" ry="12" width="240" height="120" fill="#f8fafc" filter="url(#teacherShadow)" class="card-slide-in" style="animation-delay: 0.2s"/>
                      <text x="60" y="390" fill="#1e293b" font-family="system-ui" font-size="12" font-weight="600">Kişisel Bilgiler</text>
                      
                      <!-- Info Items -->
                      <rect x="50" y="400" rx="4" ry="4" width="12" height="12" fill="#3b82f6"/>
                      <text x="70" y="410" fill="#64748b" font-family="system-ui" font-size="8">ahmet@example.com</text>
                      
                      <rect x="50" y="415" rx="4" ry="4" width="12" height="12" fill="#10b981"/>
                      <text x="70" y="425" fill="#64748b" font-family="system-ui" font-size="8">0500 111 22 33</text>
                      
                      <rect x="50" y="430" rx="4" ry="4" width="12" height="12" fill="#f59e0b"/>
                      <text x="70" y="440" fill="#64748b" font-family="system-ui" font-size="8">TC: 10000000001</text>
                      
                      <rect x="50" y="445" rx="4" ry="4" width="12" height="12" fill="#8b5cf6"/>
                      <text x="70" y="455" fill="#64748b" font-family="system-ui" font-size="8">Erkek • 1980</text>
                      
                      <!-- Action Cards -->
                      <g class="card-slide-in" style="animation-delay: 0.3s">
                        <rect x="40" y="510" rx="12" ry="12" width="110" height="60" fill="white" filter="url(#teacherShadow)"/>
                        <rect x="50" y="520" rx="4" ry="4" width="20" height="15" fill="#ef4444"/>
                        <rect x="52" y="522" rx="1" ry="1" width="4" height="3" fill="white"/>
                        <rect x="58" y="522" rx="1" ry="1" width="4" height="3" fill="white"/>
                        <rect x="64" y="522" rx="1" ry="1" width="4" height="3" fill="white"/>
                        <text x="80" y="530" fill="#1e293b" font-family="system-ui" font-size="9" font-weight="600">Dersler</text>
                        <text x="80" y="542" fill="#64748b" font-family="system-ui" font-size="7">Bugün: 3 ders</text>
                        <text x="80" y="552" fill="#64748b" font-family="system-ui" font-size="7">Aktif: 1</text>
                      </g>
                      
                      <g class="card-slide-in" style="animation-delay: 0.4s">
                        <rect x="170" y="510" rx="12" ry="12" width="110" height="60" fill="white" filter="url(#teacherShadow)"/>
                        <rect x="180" y="520" rx="4" ry="4" width="20" height="15" fill="#06b6d4"/>
                        <text x="190" y="530" fill="white" font-family="system-ui" font-size="7" font-weight="600" text-anchor="middle">17</text>
                        <text x="200" y="530" fill="#1e293b" font-family="system-ui" font-size="9" font-weight="600">Program</text>
                        <text x="200" y="542" fill="#64748b" font-family="system-ui" font-size="7">Haftalık</text>
                        <text x="200" y="552" fill="#64748b" font-family="system-ui" font-size="7">5 gün</text>
                      </g>
                    </svg>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

      <!-- İstatistik Sayaç Bölümü -->
      <section class="section py-6 bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 relative overflow-hidden">
        <!-- Arka Plan Watermark -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 class="text-[12rem] lg:text-[16rem] font-black text-white/10 select-none tracking-wider watermark-animation">
            OKUL PANEL
          </h1>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center mb-4" [@fadeInUp]="'visible'">
            <h2 class="text-2xl lg:text-3xl font-bold text-white mb-2">
              <span class="text-yellow-300">İstatistikler</span>
            </h2>
            <p class="text-sm text-white/90 max-w-xl mx-auto">
              Binlerce okulun güvendiği, milyonlarca kullanıcının tercih ettiği eğitim yönetim sistemi
            </p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3" [@listStagger]="'visible'">
            <!-- Günlük Giriş -->
            <div class="text-center stats-card group">
              <div class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 15 15" aria-hidden="true">
                  <path d="M6.554,9.639a.5.5,0,0,0,.707.707L9.928,7.669a.25.25,0,0,0,0-.354h0L7.261,4.639a.5.5,0,0,0-.707.707L8.2,7H1.5a.5.5,0,0,0,0,1H8.2ZM12,1H5.5a.5.5,0,0,0,0,1h6a.5.5,0,0,1,.5.5v10a.5.5,0,0,1-.5.5H5.25a.5.5,0,0,0,0,1H12a1,1,0,0,0,1-1V2A1,1,0,0,0,12,1Z"/>
                </svg>
              </div>
              <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-1 counter-number" data-target="222993">
                0
              </div>
              <p class="text-white/90 text-xs font-medium">Günlük Giriş</p>
              <div class="flex items-center justify-center mt-1">
                <div class="w-1.5 h-1.5 bg-red-500 rounded-full mr-1"></div>
                <span class="text-white/70 text-xs">Canlı Veri</span>
              </div>
            </div>

            <!-- Aktif Kullanıcı -->
            <div class="text-center stats-card group">
              <div class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"/>
                </svg>
              </div>
              <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-1 counter-number" data-target="531123">
                0
              </div>
              <p class="text-white/90 text-xs font-medium">Aktif Kullanıcı</p>
              <div class="flex items-center justify-center mt-1">
                <div class="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></div>
                <span class="text-white/70 text-xs">Aktif</span>
              </div>
            </div>

            <!-- Aktif Müdürlük -->
            <div class="text-center stats-card group">
              <div class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 392.727 392.727" aria-hidden="true">
                  <rect x="171.055" y="307.2" fill="currentColor" width="50.683" height="63.612"/>
                  <g>
                    <rect x="21.915" y="189.737" fill="currentColor" width="60.057" height="181.075"/>
                    <rect x="310.756" y="189.737" fill="currentColor" width="60.057" height="181.075"/>
                  </g>
                  <path fill="currentColor" d="M103.822,370.877h45.446v-74.473c0-6.012,4.848-10.925,10.925-10.925h72.533 c6.012,0,10.925,4.848,10.925,10.925v74.473h45.382v-269.77H103.822V370.877z"/>
                  <circle fill="currentColor" cx="196.396" cy="191.677" r="50.36"/>
                  <g>
                    <path fill="currentColor" d="M196.396,118.885c-40.21,0-72.792,32.582-72.792,72.792s32.582,72.792,72.792,72.792 s72.792-32.582,72.792-72.792S236.606,118.885,196.396,118.885z M196.396,242.036c-27.798,0-50.36-22.562-50.36-50.36 s22.562-50.36,50.36-50.36s50.36,22.562,50.36,50.36S224.194,242.036,196.396,242.036z"/>
                    <path fill="currentColor" d="M51.976,239.451c6.012,0,10.925-4.848,10.925-10.925v-12.671c0-6.012-4.848-10.925-10.925-10.925 s-10.925,4.848-10.925,10.925v12.671C41.05,234.537,45.964,239.451,51.976,239.451z"/>
                    <path fill="currentColor" d="M51.976,297.568c6.012,0,10.925-4.849,10.925-10.925v-12.671c0-6.012-4.848-10.925-10.925-10.925 s-10.925,4.848-10.925,10.925v12.671C41.05,292.655,45.964,297.568,51.976,297.568z"/>
                    <path fill="currentColor" d="M51.976,355.685c6.012,0,10.925-4.849,10.925-10.925v-12.671c0-6.012-4.848-10.925-10.925-10.925 s-10.925,4.848-10.925,10.925v12.671C41.05,350.772,45.964,355.685,51.976,355.685z"/>
                    <path fill="currentColor" d="M340.816,239.451c6.012,0,10.925-4.848,10.925-10.925v-12.671c0-6.012-4.848-10.925-10.925-10.925 c-6.012,0-10.925,4.848-10.925,10.925v12.671C329.891,234.537,334.804,239.451,340.816,239.451z"/>
                    <path fill="currentColor" d="M340.816,297.568c6.012,0,10.925-4.849,10.925-10.925v-12.671c0-6.012-4.848-10.925-10.925-10.925 c-6.012,0-10.925,4.848-10.925,10.925v12.671C329.891,292.655,334.804,297.568,340.816,297.568z"/>
                    <path fill="currentColor" d="M340.816,355.685c6.012,0,10.925-4.849,10.925-10.925v-12.671c0-6.012-4.848-10.925-10.925-10.925 c-6.012,0-10.925,4.848-10.925,10.925v12.671C329.891,350.772,334.804,355.685,340.816,355.685z"/>
                  </g>
                  <polygon fill="currentColor" points="295.37,21.915 97.422,21.915 54.626,79.257 338.166,79.257"/>
                  <g>
                    <path fill="currentColor" d="M381.802,167.952h-71.046v-66.909h49.131c9.374-0.388,13.834-9.956,8.727-17.455L311.661,7.24 c-3.814-4.655-9.244-6.853-16.097-7.24H97.099c-6.271,0.323-11.895,2.263-16.097,7.24L24.178,83.588 c-5.689,8.857,1.099,17.519,8.727,17.455h49.131v66.909H10.99c-6.012,0-10.925,4.848-10.925,10.925v202.925 c0,6.012,4.848,10.925,10.925,10.925h370.747c6.012,0,10.925-4.848,10.925-10.925V178.877 C392.663,172.8,387.814,167.952,381.802,167.952z M370.877,370.877h-60.121V189.737h60.057v181.139H370.877z M221.737,307.2v63.612 h-50.683V307.2H221.737L221.737,307.2z M288.97,370.877h-45.446v-74.473c0-6.012-4.848-10.925-10.925-10.925h-72.533 c-6.012,0-10.925,4.848-10.925,10.925v74.473h-45.382v-269.77h185.147v269.77H288.97z M54.626,79.257l42.796-57.341H295.37 l42.796,57.341H54.626z M82.036,370.877H21.915V189.737h60.121V370.877z"/>
                    <path fill="currentColor" d="M177.907,202.602h18.489c6.012,0,10.925-4.848,10.925-10.925v-26.44 c0-6.012-4.848-10.925-10.925-10.925s-10.925,4.848-10.925,10.925v15.515h-7.564c-6.012,0-10.925,4.848-10.925,10.925 C167.046,197.689,171.895,202.602,177.907,202.602z"/>
                  </g>
                </svg>
              </div>
              <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-1 counter-number" data-target="1299">
                0
              </div>
              <p class="text-white/90 text-xs font-medium">Aktif Müdürlük</p>
              <div class="flex items-center justify-center mt-1">
                <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1"></div>
                <span class="text-white/70 text-xs">Kurum</span>
              </div>
            </div>

            <!-- Online Kalma Süresi -->
            <div class="text-center stats-card group">
              <div class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-1 counter-number" data-target="99.95">
                0
              </div>
              <p class="text-white/90 text-xs font-medium">Online Kalma Yüzdesi</p>
              <div class="flex items-center justify-center mt-1">
                <div class="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-1"></div>
                <span class="text-white/70 text-xs">%99.95</span>
              </div>
            </div>
          </div>

          <div class="text-center mt-6 sm:mt-8" [@fadeInUp]="'visible'">
            <div class="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
              <button (click)="openSubMenu('about')" class="group px-4 py-2 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 rounded-lg sm:rounded-xl transition-all duration-500 backdrop-blur-lg border border-white/20 hover:border-white/40 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/30">
                <span class="text-white text-xs sm:text-sm font-semibold group-hover:text-yellow-300 transition-colors">Okul Panel Nedir?</span>
              </button>
              
              <button (click)="openSubMenu('features')" class="group px-4 py-2 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 rounded-lg sm:rounded-xl transition-all duration-500 backdrop-blur-lg border border-white/20 hover:border-white/40 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/30">
                <span class="text-white text-xs sm:text-sm font-semibold group-hover:text-yellow-300 transition-colors">Neden Okul Panel?</span>
              </button>
              
              <button (click)="openSubMenu('faq')" class="group px-4 py-2 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 rounded-lg sm:rounded-xl transition-all duration-500 backdrop-blur-lg border border-white/20 hover:border-white/40 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/30">
                <span class="text-white text-xs sm:text-sm font-semibold group-hover:text-yellow-300 transition-colors">Sık Sorulan Sorular</span>
              </button>
              
              <button (click)="openSubMenu('testimonials')" class="group px-4 py-2 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 rounded-lg sm:rounded-xl transition-all duration-500 backdrop-blur-lg border border-white/20 hover:border-white/40 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/30">
                <span class="text-white text-xs sm:text-sm font-semibold group-hover:text-yellow-300 transition-colors">Kullanıcı Yorumları</span>
              </button>
            </div>
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
      transform: scale(1.3) rotate(5deg);
      box-shadow: 0 8px 25px rgba(255, 214, 10, 0.8), 0 0 30px rgba(255, 214, 10, 0.4);
      animation: thumbGlow 1s ease-in-out infinite;
    }

    @keyframes thumbGlow {
      0%, 100% {
        box-shadow: 0 8px 25px rgba(255, 214, 10, 0.8), 0 0 30px rgba(255, 214, 10, 0.4);
      }
      50% {
        box-shadow: 0 12px 35px rgba(255, 214, 10, 1), 0 0 50px rgba(255, 214, 10, 0.6);
      }
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
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
    }

    .animated-price::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 214, 10, 0.2), transparent);
      transition: left 0.6s ease;
    }

    .animated-price:hover::before {
      left: 100%;
    }

    /* Price update animation */
    .price-updating {
      transform: scale(0.95);
      opacity: 0.7;
      animation: pricePulse 0.6s ease-in-out;
    }

    @keyframes pricePulse {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(0.9);
        opacity: 0.8;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
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
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }

    .stats-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
      transition: left 0.6s ease;
    }
    
    .stats-card:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .stats-card:hover::before {
      left: 100%;
    }

    .stats-card:hover .text-4xl,
    .stats-card:hover .text-5xl {
      animation: numberGlow 1s ease-in-out infinite;
    }
    
    /* Number animation styles */
    .stats-card .text-4xl,
    .stats-card .text-5xl {
      will-change: transform;
      font-variant-numeric: tabular-nums;
    }

    @keyframes numberGlow {
      0%, 100% {
        text-shadow: 0 0 10px rgba(255, 214, 10, 0.3);
        transform: scale(1);
      }
      50% {
        text-shadow: 0 0 20px rgba(255, 214, 10, 0.6), 0 0 30px rgba(255, 214, 10, 0.4);
        transform: scale(1.05);
      }
    }

    /* Feature Card Animations - Simplified */
    .feature-card {
      transition: all 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    .feature-card:hover .w-16 {
      transform: scale(1.1);
    }

    /* Phone Mock Animations - Simplified */
    @keyframes phoneFloat {
      0%, 100% { 
        transform: translateY(0px); 
      }
      50% { 
        transform: translateY(-10px); 
      }
    }
    
    @keyframes cardSlideIn {
      0% { 
        transform: translateX(-20px); 
        opacity: 0; 
      }
      100% { 
        transform: translateX(0); 
        opacity: 1; 
      }
    }
    
    @keyframes pulse {
      0%, 100% { 
        opacity: 1; 
        transform: scale(1); 
      }
      50% { 
        opacity: 0.7; 
        transform: scale(1.05); 
      }
    }
    
    .phone-float {
      animation: phoneFloat 6s ease-in-out infinite;
      transition: all 0.3s ease;
    }

    .phone-float:hover {
      transform: translateY(-5px) !important;
      animation-play-state: paused;
    }

    
    .card-slide-in {
      animation: cardSlideIn 0.6s ease-out forwards;
      opacity: 0;
    }
    
    .pulse {
      animation: pulse 2s ease-in-out infinite;
    }
    
    .shimmer {
      background: linear-gradient(90deg, 
        rgba(255,255,255,0.05) 0%, 
        rgba(255,255,255,0.1) 50%, 
        rgba(255,255,255,0.05) 100%
      );
      background-size: 200px 100%;
      animation: shimmer 2s infinite;
    }

    /* Device mock container responsive */
    @media (max-width: 768px) {
      .phone-mocks-container {
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
      }
      
      .laptop-float {
        max-width: 180px;
      }
    }

    @media (max-width: 1024px) {
      .phone-mocks-container {
        gap: 2rem;
      }
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
      .phone-float,
      .card-slide-in,
      .pulse,
      .shimmer {
        animation: none;
      }
      
      .card-slide-in {
        opacity: 1;
        transform: translateX(0);
      }
    }

    /* Hero 2 Enhanced Text Animations */
    #hero-2 .animate-fade-in-up {
      opacity: 1;
      transform: translateY(0) scale(1);
      animation: hero2FadeInUp 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }

    #hero-2 .hero-title-glow {
      color: #ffffff;
      text-shadow: 0 0 20px rgba(255, 214, 10, 0.3);
      animation: hero2TitleGlow 4s ease-in-out infinite;
    }

    #hero-2 .hero-text-glow {
      text-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
    }

    #hero-2 .hero-badge {
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.3);
      transition: all 0.3s ease;
    }

    #hero-2 .hero-badge:hover {
      transform: translateY(-2px);
      background: rgba(255, 255, 255, 0.3);
    }

    #hero-2 .hero-feature-item {
      transition: all 0.3s ease;
    }

    #hero-2 .hero-feature-item:hover {
      transform: translateX(5px);
      color: #ffffff;
    }

    #hero-2 .hero-feature-icon {
      transition: all 0.3s ease;
    }

    #hero-2 .hero-feature-item:hover .hero-feature-icon {
      transform: scale(1.1);
      color: #FFD60A;
    }

    #hero-2 .hero-cta-primary {
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.3);
      transition: all 0.3s ease;
    }

    #hero-2 .hero-cta-primary:hover {
      background: rgba(255, 255, 255, 0.25);
      transform: translateY(-2px);
    }

    #hero-2 .hero-cta-secondary {
      background: #FFD60A;
      box-shadow: 0 4px 15px rgba(255, 214, 10, 0.3);
      transition: all 0.3s ease;
    }

    #hero-2 .hero-cta-secondary:hover {
      background: #FFC107;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(255, 214, 10, 0.4);
    }

    /* Enhanced Keyframe Animations */
    @keyframes hero2FadeInUp {
      0% {
        opacity: 0;
        transform: translateY(60px) scale(0.9);
      }
      50% {
        opacity: 0.8;
        transform: translateY(20px) scale(0.95);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes hero2TitleGlow {
      0%, 100% {
        text-shadow: 0 0 20px rgba(255, 214, 10, 0.3);
      }
      50% {
        text-shadow: 0 0 30px rgba(255, 214, 10, 0.5);
      }
    }

    @keyframes hero2TextGlow {
      0%, 100% {
        text-shadow: 0 0 25px rgba(255, 255, 255, 0.2), 0 0 50px rgba(255, 214, 10, 0.1);
      }
      50% {
        text-shadow: 0 0 40px rgba(255, 255, 255, 0.3), 0 0 80px rgba(255, 214, 10, 0.2);
      }
    }

    @keyframes hero2TextShimmer {
      0% {
        left: -100%;
      }
      50% {
        left: 100%;
      }
      100% {
        left: 100%;
      }
    }

    @keyframes hero2BadgeFloat {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      25% {
        transform: translateY(-3px) rotate(0.5deg);
      }
      50% {
        transform: translateY(-1px) rotate(0deg);
      }
      75% {
        transform: translateY(-2px) rotate(-0.5deg);
      }
    }

    @keyframes hero2BadgeGlow {
      0%, 100% {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
      }
      50% {
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 214, 10, 0.1);
      }
    }

    @keyframes hero2BadgeRotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes hero2FeatureSlide {
      0% {
        opacity: 0;
        transform: translateX(-30px) scale(0.95);
      }
      100% {
        opacity: 1;
        transform: translateX(0) scale(1);
      }
    }

    @keyframes hero2IconPulse {
      0%, 100% {
        transform: scale(1);
        filter: drop-shadow(0 0 8px rgba(255, 214, 10, 0.3));
      }
      50% {
        transform: scale(1.1);
        filter: drop-shadow(0 0 12px rgba(255, 214, 10, 0.5));
      }
    }

    @keyframes hero2IconFloat {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-2px);
      }
    }

    @keyframes hero2CtaFloat {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-2px);
      }
    }

    @keyframes hero2CtaGlow {
      0%, 100% {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
      }
      50% {
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 214, 10, 0.1);
      }
    }

    @keyframes hero2CtaSecondaryGlow {
      0%, 100% {
        background-position: 0% 50%;
        box-shadow: 0 8px 25px rgba(255, 214, 10, 0.4), 0 0 20px rgba(255, 214, 10, 0.2);
      }
      50% {
        background-position: 100% 50%;
        box-shadow: 0 12px 35px rgba(255, 214, 10, 0.6), 0 0 30px rgba(255, 214, 10, 0.4);
      }
    }

    @keyframes hero2CtaSecondaryFloat {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-1px);
      }
    }

    /* Hero Section - Static Background */
    #hero-2 {
      position: relative;
    }

    /* Stats Counter Styles */
    .stats-card {
      transition: all 0.3s ease;
    }

    .stats-card:hover {
      transform: translateY(-5px);
    }

    .counter-number {
      font-variant-numeric: tabular-nums;
      transition: all 0.3s ease;
    }

    .counter-number:hover {
      transform: scale(1.05);
    }

    /* Watermark Animation */
    @keyframes watermarkFloat {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-10px) rotate(1deg);
      }
    }

    .watermark-animation {
      animation: watermarkFloat 20s ease-in-out infinite;
    }

    /* Reduced Motion Support */
    @media (prefers-reduced-motion: reduce) {
      #hero-2 .animate-fade-in-up,
      #hero-2 .hero-title-glow,
      #hero-2 .hero-text-glow,
      #hero-2 .hero-badge,
      #hero-2 .hero-feature-item,
      #hero-2 .hero-feature-icon,
      #hero-2 .hero-cta-primary,
      #hero-2 .hero-cta-secondary,
      #hero-2::before,
      .stats-card,
      .counter-number,
      .watermark-animation {
        animation: none !important;
        opacity: 1 !important;
        transform: none !important;
      }
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

  // Current time for live data display
  currentTime = new Date();

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
    
    // Initialize counter animation
    setTimeout(() => this.animateCounters(), 1000);
    
    // Update current time every minute
    setInterval(() => {
      this.currentTime = new Date();
    }, 60000);
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

  private animateCounters(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Animate Günlük Giriş counter
    const dailyLoginElement = document.querySelector('[data-target="222993"]');
    if (dailyLoginElement) {
      Counter.count(0, 222993, (value) => {
        dailyLoginElement.textContent = value.toLocaleString();
      }, 3000, this.platformId);
    }

    // Animate Aktif Kullanıcı counter with delay
    setTimeout(() => {
      const activeUserElement = document.querySelector('[data-target="531123"]');
      if (activeUserElement) {
        Counter.count(0, 531123, (value) => {
          activeUserElement.textContent = value.toLocaleString();
        }, 3500, this.platformId);
      }
    }, 500);

    // Animate Aktif Müdürlük counter with delay
    setTimeout(() => {
      const activeDeptElement = document.querySelector('[data-target="1299"]');
      if (activeDeptElement) {
        Counter.count(0, 1299, (value) => {
          activeDeptElement.textContent = value.toLocaleString();
        }, 2500, this.platformId);
      }
    }, 1000);

    // Animate Online Kalma Yüzdesi counter with delay
    setTimeout(() => {
      const uptimeElement = document.querySelector('[data-target="99.95"]');
      if (uptimeElement) {
        Counter.count(0, 99.95, (value) => {
          uptimeElement.textContent = value.toFixed(2);
        }, 2000, this.platformId);
      }
    }, 1500);
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

  openSubMenu(menuType: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    // Scroll to top to show navbar
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Wait for scroll to complete, then open menu with delay
    setTimeout(() => {
      const event = new CustomEvent('openSubMenu', { 
        detail: { menuType: menuType } 
      });
      window.dispatchEvent(event);
    }, 800); // Increased delay for smooth scroll completion
  }
}

