import { Component, OnInit, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

// Components
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { TrustStripComponent } from '../../components/trust-strip/trust-strip.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { ScreenshotsComponent } from '../../components/screenshots/screenshots.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    TrustStripComponent,
    FeaturesComponent,
    ScreenshotsComponent,
  ],
  template: `
    <div class="min-h-screen bg-white">
      <!-- Navigation -->
      <app-navbar></app-navbar>

      <!-- Hero Section -->
      <app-hero></app-hero>

      <!-- Trust Strip -->
      <app-trust-strip></app-trust-strip>

      <!-- Features Section -->
      <app-features></app-features>

      <!-- Modules Section -->
      <section id="moduller" class="section py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Kapsamlı <span class="text-accent-500">Modüller</span>
            </h2>
            <p class="text-xl text-neutral-600 max-w-4xl mx-auto">
              Her kullanıcı grubuna özel tasarlanmış modüller ile tüm eğitim süreçlerinizi tek platformda yönetin.
            </p>
          </div>
          <!-- Modules content will be added -->
          <div class="text-center py-20 text-neutral-500">
            <p>Modüller bileşeni geliştirilecek...</p>
          </div>
        </div>
      </section>

      <!-- Screenshots Section -->
      <app-screenshots></app-screenshots>

      <!-- Testimonials Section -->
      <section id="referanslar" class="section py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Müşteri <span class="text-accent-500">Yorumları</span>
            </h2>
            <p class="text-xl text-neutral-600 max-w-4xl mx-auto">
              Binlerce okul ve eğitim kurumunun güvendiği çözüm.
            </p>
          </div>
          <!-- Testimonials content will be added -->
          <div class="text-center py-20 text-neutral-500">
            <p>Müşteri yorumları bileşeni geliştirilecek...</p>
          </div>
        </div>
      </section>

      <!-- Pricing Section -->
      <section id="fiyat" class="section py-20 bg-neutral-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Şeffaf <span class="text-accent-500">Fiyatlandırma</span>
            </h2>
            <p class="text-xl text-neutral-600 max-w-4xl mx-auto">
              İhtiyacınıza uygun paketi seçin. Tüm planlar 30 gün ücretsiz deneme ile birlikte gelir.
            </p>
          </div>
          <!-- Pricing content will be added -->
          <div class="text-center py-20 text-neutral-500">
            <p>Fiyatlandırma bileşeni geliştirilecek...</p>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section id="sss" class="section py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Sık Sorulan <span class="text-accent-500">Sorular</span>
            </h2>
            <p class="text-xl text-neutral-600 max-w-4xl mx-auto">
              Merak ettiğiniz sorulara hızlı yanıtlar bulun.
            </p>
          </div>
          <!-- FAQ content will be added -->
          <div class="text-center py-20 text-neutral-500">
            <p>S.S.S. bileşeni geliştirilecek...</p>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="iletisim" class="section py-20 bg-neutral-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              <span class="text-accent-500">İletişime</span> Geçin
            </h2>
            <p class="text-xl text-neutral-600 max-w-4xl mx-auto">
              Sorularınız için bizimle iletişime geçin. Uzman ekibimiz size yardımcı olmaktan mutluluk duyar.
            </p>
          </div>
          <!-- Contact content will be added -->
          <div class="text-center py-20 text-neutral-500">
            <p>İletişim bileşeni geliştirilecek...</p>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-primary-950 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- Company Info -->
            <div class="md:col-span-2">
              <div class="flex items-center space-x-0 mb-4">
                <img 
                  src="/okul-panel-logo.png" 
                  alt="Okul Panel Logo" 
                  class="w-24 h-24 rounded-full"
                  loading="lazy"
                  decoding="async"
                />
                <span class="text-2xl font-bold">Okul Panel</span>
              </div>
              <p class="text-white/80 mb-6 max-w-md">
                Eğitimin dijital geleceğini bugünden yaşayın. Okul yönetiminde güvenilir çözüm ortağınız.
              </p>
              <div class="flex space-x-4">
                <a href="#" class="text-white/60 hover:text-accent-500 transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" class="text-white/60 hover:text-accent-500 transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" class="text-white/60 hover:text-accent-500 transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Quick Links -->
            <div>
              <h3 class="text-lg font-semibold mb-4">Hızlı Linkler</h3>
              <ul class="space-y-2 text-white/80">
                <li><a href="#ozellikler" class="hover:text-accent-500 transition-colors">Özellikler</a></li>
                <li><a href="#fiyat" class="hover:text-accent-500 transition-colors">Fiyatlandırma</a></li>
                <li><a href="#sss" class="hover:text-accent-500 transition-colors">S.S.S.</a></li>
                <li><a href="#iletisim" class="hover:text-accent-500 transition-colors">İletişim</a></li>
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
  `],
})
export class LandingComponent implements OnInit, AfterViewInit {
  private title = inject(Title);
  private meta = inject(Meta);
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    this.setupSEO();
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollAnimations();
    }
  }

  private setupSEO() {
    // Set page title
    this.title.setTitle('Okul Panel - Eğitimin Dijital Geleceği | Okul Yönetim Sistemi');

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content: 'Okul yönetiminizi kolaylaştıran, öğrenci başarısını artıran kapsamlı eğitim yönetim sistemi. KVKK uyumlu, güvenli ve kullanıcı dostu çözüm.'
    });

    // Set Open Graph tags
    this.meta.updateTag({
      property: 'og:title',
      content: 'Okul Panel - Eğitimin Dijital Geleceği'
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'Okul yönetiminizi kolaylaştıran, öğrenci başarısını artıran kapsamlı eğitim yönetim sistemi.'
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://okulpanel.com'
    });

    this.meta.updateTag({
      property: 'og:image',
      content: 'https://okulpanel.com/assets/images/og-image.jpg'
    });

    // Set Twitter Card tags
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Okul Panel - Eğitimin Dijital Geleceği'
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: 'Okul yönetiminizi kolaylaştıran, öğrenci başarısını artıran kapsamlı eğitim yönetim sistemi.'
    });

    // Set additional meta tags
    this.meta.updateTag({
      name: 'keywords',
      content: 'okul yönetim sistemi, eğitim yazılımı, öğrenci bilgi sistemi, okul paneli, eğitim teknolojisi, KVKK uyumlu, okul otomasyonu'
    });

    this.meta.updateTag({
      name: 'author',
      content: 'Okul Panel'
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });

    // Set canonical URL
    this.meta.updateTag({
      rel: 'canonical',
      href: 'https://okulpanel.com'
    });
  }

  private setupScrollAnimations() {
    // GSAP ScrollTrigger animations can be added here
    // This will be implemented when GSAP is properly configured
  }
}
