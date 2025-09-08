import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  template: `
    <div class="min-h-screen bg-white">
      <app-navbar></app-navbar>
      
      <main class="pt-20">
        <!-- Header -->
        <section class="section py-20 bg-gradient-to-br from-primary-950 to-primary-800 text-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl lg:text-6xl font-bold mb-6">
              <span class="text-accent-500">Hakkımızda</span>
            </h1>
            <p class="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto">
              Eğitim teknolojisinde yenilikçi çözümler sunarak okul yönetimini dijitalleştiriyoruz.
            </p>
          </div>
        </section>

        <!-- Story -->
        <section class="section py-20 bg-white">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="prose prose-lg max-w-none">
              <h2 class="text-3xl font-bold text-neutral-900 mb-8">Hikayemiz</h2>
              <p class="text-lg text-neutral-700 leading-relaxed mb-6">
                Okul Panel, eğitim sektöründeki deneyimli kadrosu ile 2020 yılında kuruldu. 
                Amacımız, okul yönetimini kolaylaştıran, öğrenci başarısını artıran ve 
                velilerle iletişimi güçlendiren kapsamlı bir eğitim yönetim sistemi sunmaktır.
              </p>
              <p class="text-lg text-neutral-700 leading-relaxed mb-6">
                Türkiye'deki yüzlerce okula hizmet veren platformumuz, modern teknoloji 
                ile eğitim yönetiminde devrim yaratmaktadır. KVKV uyumlu, güvenli ve 
                kullanıcı dostu çözümlerimizle eğitim kurumlarının dijital dönüşümüne 
                liderlik ediyoruz.
              </p>
            </div>
          </div>
        </section>

        <!-- Values -->
        <section class="section py-20 bg-neutral-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-neutral-900 mb-12 text-center">Değerlerimiz</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="text-center">
                <div class="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-neutral-900 mb-3">Güvenilirlik</h3>
                <p class="text-neutral-600">
                  Veri güvenliği ve sistem kararlılığında en yüksek standartları sağlıyoruz.
                </p>
              </div>

              <div class="text-center">
                <div class="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-neutral-900 mb-3">Yenilikçilik</h3>
                <p class="text-neutral-600">
                  Sürekli gelişim ve teknolojik yeniliklerle eğitimde öncü olmaya devam ediyoruz.
                </p>
              </div>

              <div class="text-center">
                <div class="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-neutral-900 mb-3">Müşteri Odaklılık</h3>
                <p class="text-neutral-600">
                  Her çözümümüzü müşterilerimizin ihtiyaçları doğrultusunda şekillendiriyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Team/Contact CTA -->
        <section class="section py-20 bg-white">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-neutral-900 mb-6">Bizimle İletişime Geçin</h2>
            <p class="text-lg text-neutral-600 mb-8">
              Sorularınız veya özel ihtiyaçlarınız için uzman ekibimizle görüşün.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a routerLink="/contact" class="btn-primary px-8 py-3">İletişime Geç</a>
              <a routerLink="/pricing" class="btn-secondary px-8 py-3">Fiyatları Görüntüle</a>
            </div>
            
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
