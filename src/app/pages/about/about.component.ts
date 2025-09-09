import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { fadeInAnimation, slideUpAnimation, staggerAnimation, scaleInAnimation } from '../../animations/page-animations';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  animations: [fadeInAnimation, slideUpAnimation, staggerAnimation, scaleInAnimation],
  template: `
    <div class="min-h-screen">
      <app-navbar></app-navbar>
      
      <main class="pt-20">
        <!-- Header -->
        <section class="section py-8 text-white relative overflow-hidden" style="background: linear-gradient(to right, #0D1B2A, #0c4a6e, #0D1B2A);">
          <!-- Decorative Elements -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-10 left-10 w-20 h-20 bg-accent-500 rounded-full blur-xl animate-pulse"></div>
            <div class="absolute top-32 right-20 w-16 h-16 bg-blue-400 rounded-full blur-lg animate-bounce"></div>
            <div class="absolute bottom-20 left-1/4 w-24 h-24 bg-accent-400 rounded-full blur-2xl animate-pulse"></div>
            <div class="absolute bottom-10 right-10 w-18 h-18 bg-blue-500 rounded-full blur-xl animate-bounce"></div>
            <div class="absolute top-1/2 left-1/3 w-12 h-12 bg-accent-300 rounded-full blur-lg animate-ping"></div>
            <div class="absolute bottom-1/3 right-1/3 w-14 h-14 bg-blue-300 rounded-full blur-xl animate-pulse"></div>
          </div>
          
          <!-- Floating Icons -->
          <div class="absolute inset-0 opacity-20">
            <div class="absolute top-20 left-1/3 animate-pulse">
              <svg class="w-8 h-8 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
              </svg>
            </div>
            <div class="absolute top-40 right-1/3 animate-bounce">
              <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div class="absolute bottom-32 left-1/4 animate-pulse">
              <svg class="w-7 h-7 text-accent-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div class="absolute top-1/2 right-1/4 animate-spin">
              <svg class="w-5 h-5 text-accent-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div class="absolute bottom-1/4 left-1/2 animate-ping">
              <svg class="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
          
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div [@fadeIn]>
              <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full mb-6 shadow-2xl hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer group">
                <svg class="w-10 h-10 text-white group-hover:text-accent-100 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <h1 class="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-accent-100 to-white bg-clip-text text-transparent hover:from-accent-400 hover:via-white hover:to-accent-400 transition-all duration-500 cursor-default">
                Hakkımızda
            </h1>
              <div class="w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-400 mx-auto mb-6 rounded-full hover:w-32 hover:from-accent-400 hover:to-accent-300 transition-all duration-500"></div>
              <p class="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Eğitim teknolojisinde <span class="text-accent-400 font-semibold">yenilikçi çözümler</span> sunarak okul yönetimini <span class="text-accent-400 font-semibold">dijitalleştirmeyi</span> amaçlıyoruz.
            </p>
            </div>
          </div>
        </section>

        <!-- Story -->
        <section class="section py-20 pb-8 relative" style="background: linear-gradient(to right, #0D1B2A, #0c4a6e, #0D1B2A);">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-5">
            <div class="absolute top-0 left-0 w-full h-full" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
          </div>
          
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="prose prose-lg max-w-none">
              <div class="text-center mb-12">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full mb-6 shadow-lg">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h2 class="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-accent-100 to-white bg-clip-text text-transparent">Hikayemiz</h2>
                <div class="w-16 h-1 bg-gradient-to-r from-accent-500 to-accent-400 mx-auto rounded-full"></div>
              </div>
              
              <div class="space-y-8">
                <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:scale-105 hover:shadow-2xl transition-all duration-500 group">
                  <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <span class="text-white font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 class="text-xl font-semibold text-white mb-3">Kuruluş Amacımız</h3>
                      <p class="text-lg text-white/80 leading-relaxed">
                        Okul Panel, eğitim dünyasının ihtiyaçlarını teknolojiyle buluşturmak amacıyla 2020 yılında kuruldu. 
                        Amacımız; okullara güvenli, hızlı ve kullanıcı dostu bir yönetim çözümü sunmak, öğretmenlerin iş yükünü azaltırken öğrencilerin akademik gelişimini daha etkin bir şekilde takip edebilmektir.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:scale-105 hover:shadow-2xl transition-all duration-500 group">
                  <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <span class="text-white font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 class="text-xl font-semibold text-white mb-3">Operasyonel Faydalar</h3>
                      <p class="text-lg text-white/80 leading-relaxed">
                        Kurulduğumuz günden bu yana, eğitim kurumlarının günlük operasyonlarını kolaylaştırmayı hedefledik. 
                        Ders programı planlama, yoklama ve devamsızlık takibi, not girişi, ödev ve sınav yönetimi gibi kritik süreçler, tek panel üzerinden erişilebilir hale getirildi. 
                        Böylece öğretmenler zaman kazanıyor, yöneticiler süreçleri şeffaf biçimde takip edebiliyor, öğrenciler başarılarını düzenli olarak görebiliyor ve veliler de anlık bildirimlerle çocuklarının gelişimini yakından izleyebiliyor.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:scale-105 hover:shadow-2xl transition-all duration-500 group">
                  <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <span class="text-white font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 class="text-xl font-semibold text-white mb-3">Stratejik Çözüm Ortağı</h3>
                      <p class="text-lg text-white/80 leading-relaxed">
                        Okul Panel sadece bir yazılım değil, aynı zamanda eğitim kurumlarının dijital dönüşümünde stratejik bir çözüm ortağıdır. 
                        Geliştirdiğimiz modüller, her okulun kendi yapısına uyum sağlayacak şekilde esnek ve ölçeklenebilir olarak tasarlandı. 
                        Bu sayede küçük ölçekli özel okullardan büyük devlet kurumlarına kadar farklı yapılar aynı güvenli altyapıdan faydalanabiliyor.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:scale-105 hover:shadow-2xl transition-all duration-500 group">
                  <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <span class="text-white font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 class="text-xl font-semibold text-white mb-3">Teknik Altyapı</h3>
                      <p class="text-lg text-white/80 leading-relaxed">
                        Türkiye'nin dört bir yanındaki okullara hizmet vermeyi amaçlayan Okul Panel, KVKK uyumlu veri işleme süreçleri, 
                        modern teknolojik altyapısı ve kullanıcı dostu arayüzü ile öne çıkmaktadır. 
                        Eğitim teknolojisindeki yenilikleri yakından takip ederek, kurumların ihtiyaçlarına sürekli olarak adapte oluyoruz.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:scale-105 hover:shadow-2xl transition-all duration-500 group">
                  <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <span class="text-white font-bold text-lg">5</span>
                    </div>
                    <div>
                      <h3 class="text-xl font-semibold text-white mb-3">Gelecek Vizyonu</h3>
                      <p class="text-lg text-white/80 leading-relaxed">
                        Bugün geldiğimiz noktada Okul Panel; güçlü altyapısı, deneyimli ekibi ve müşteri odaklı yaklaşımıyla eğitim sektöründe güvenilir bir çözüm haline gelmiştir. 
                        Önümüzdeki yıllarda da vizyonumuz, daha fazla kurumun dijitalleşmesine destek olmak, eğitimde şeffaflığı artırmak ve öğrenci başarısına doğrudan katkı sağlamaktır.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Values -->
        <section class="section py-8 pt-12 relative" style="background: linear-gradient(to right, #0D1B2A, #0c4a6e, #0D1B2A);">
          <!-- Decorative Elements -->
          <div class="absolute inset-0 opacity-5">
            <div class="absolute top-20 left-20 w-32 h-32 bg-accent-500 rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-20 w-28 h-28 bg-blue-500 rounded-full blur-2xl"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent-400 rounded-full blur-3xl"></div>
          </div>
          
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-16">
              <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full mb-8 shadow-2xl">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-accent-100 to-white bg-clip-text text-transparent" [@fadeIn]>Değerlerimiz</h2>
              <div class="w-20 h-1 bg-gradient-to-r from-accent-500 to-accent-400 mx-auto rounded-full"></div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" [@stagger]>
              <div class="text-center group" [@slideUp]>
                <div class="relative mb-8">
                  <div class="w-20 h-20 bg-gradient-to-r from-accent-500 to-accent-400 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-accent-400/50 transition-all duration-500">
                    <svg class="w-10 h-10 text-white group-hover:text-accent-100 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
                  <div class="absolute -top-2 -right-2 w-6 h-6 bg-accent-400 rounded-full flex items-center justify-center group-hover:scale-125 group-hover:animate-pulse transition-all duration-300">
                    <span class="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <h3 class="text-xl font-semibold text-white mb-4 group-hover:text-accent-300 transition-colors duration-300">Güvenilirlik</h3>
                <p class="text-white/80 leading-relaxed">
                  Veri güvenliği, sistem kararlılığı ve sürdürülebilir hizmet anlayışıyla en yüksek standartları benimsiyoruz.
                </p>
              </div>

              <div class="text-center group" [@slideUp]>
                <div class="relative mb-8">
                  <div class="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-blue-400/50 transition-all duration-500">
                    <svg class="w-10 h-10 text-white group-hover:text-blue-100 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                  <div class="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center group-hover:scale-125 group-hover:animate-pulse transition-all duration-300">
                    <span class="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <h3 class="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">Yenilikçilik</h3>
                <p class="text-white/80 leading-relaxed">
                  Sürekli gelişim, modern teknoloji ve yenilikçi yaklaşımlar ile eğitim yönetiminde fark yaratıyoruz.
                </p>
              </div>

              <div class="text-center group" [@slideUp]>
                <div class="relative mb-8">
                  <div class="w-20 h-20 bg-gradient-to-r from-green-500 to-green-400 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                  <div class="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <span class="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <h3 class="text-xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">Müşteri Odaklılık</h3>
                <p class="text-white/80 leading-relaxed">
                  Çözümlerimizi eğitim kurumlarının gerçek ihtiyaçlarına göre şekillendiriyor, her adımda kullanıcılarımızı destekliyoruz.
                </p>
              </div>

              <div class="text-center group" [@slideUp]>
                <div class="relative mb-8">
                  <div class="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-400 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div class="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                    <span class="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <h3 class="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">Şeffaflık</h3>
                <p class="text-white/80 leading-relaxed">
                  Fiyatlandırmadan süreç yönetimine kadar tüm adımlarımızda açık, anlaşılır ve şeffaf bir yaklaşım sergiliyoruz.
                </p>
              </div>

              <div class="text-center group" [@slideUp]>
                <div class="relative mb-8">
                  <div class="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99L14 10.5c-.47-.62-1.21-.99-2.01-.99H9.46c-.8 0-1.54.37-2.01.99L6 10.5c-.47-.62-1.21-.99-2.01-.99H2.46c-.8 0-1.54.37-2.01.99L0 10.5V22h2v-6h2.5l2.54 7.63A1.5 1.5 0 0 0 7.46 24H9c.8 0 1.54-.37 2.01-.99L12 21.5c.47.62 1.21.99 2.01.99h1.54c.8 0 1.54-.37 2.01-.99L18 21.5c.47.62 1.21.99 2.01.99h1.54c.8 0 1.54-.37 2.01-.99L24 21.5V22h-4z"/>
                    </svg>
                  </div>
                  <div class="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                    <span class="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <h3 class="text-xl font-semibold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">İşbirliği</h3>
                <p class="text-white/80 leading-relaxed">
                  Okullar, öğretmenler, öğrenciler ve velilerle güçlü bir iletişim ve işbirliği kültürü geliştiriyoruz.
                </p>
              </div>

              <div class="text-center group" [@slideUp]>
                <div class="relative mb-8">
                  <div class="w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-400 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  <div class="absolute -top-2 -right-2 w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                    <span class="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <h3 class="text-xl font-semibold text-white mb-4 group-hover:text-teal-300 transition-colors duration-300">Erişilebilirlik</h3>
                <p class="text-white/80 leading-relaxed">
                  Her cihazdan kolay kullanım ve herkes için erişilebilir tasarım ile eğitimin dijital dönüşümünü destekliyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Team/Contact CTA -->
        <section class="section py-8 pb-16" style="background: linear-gradient(to right, #0D1B2A, #0c4a6e, #0D1B2A);">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-white mb-6">Bizimle İletişime Geçin</h2>
            <p class="text-lg text-white/80 mb-8">
              Sorularınız veya özel ihtiyaçlarınız için uzman ekibimizle görüşün.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a routerLink="/contact" class="btn-primary px-8 py-3">İletişime Geç</a>
              <a routerLink="/pricing" class="btn-secondary px-8 py-3">Fiyatları Görüntüle</a>
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
      contain-intrinsic-size: 1px 800px;
    }
  `]
})
export class AboutPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.title.setTitle('Hakkımızda - Okul Panel | Eğitimde Teknoloji Lideri');
    this.meta.updateTag({
      name: 'description',
      content: 'Okul Panel hakkında bilgi edinin. Eğitim teknolojisinde yenilikçi çözümler sunan deneyimli ekibimizi tanıyın.'
    });
  }
}
