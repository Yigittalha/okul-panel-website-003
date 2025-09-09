import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-cerez-politikasi',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  template: `
    <div class="min-h-screen">
      <app-navbar></app-navbar>
      
      <main class="pt-20">
        <!-- Header -->
        <header class="bg-white text-black py-20">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-4xl font-bold text-black">Çerez Politikası</h1>
            <p class="text-gray-600 mt-4">Son güncelleme: 1 Ocak 2024</p>
          </div>
        </header>

        <!-- Content -->
        <section class="section py-20 bg-white">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="prose prose-lg max-w-none">
              <h2>1. Çerez Nedir?</h2>
              <p>
                Çerezler, web sitelerini ziyaret ettiğinizde tarayıcınız tarafından bilgisayarınıza 
                veya mobil cihazınıza kaydedilen küçük metin dosyalarıdır.
              </p>

              <h2>2. Çerez Türleri</h2>
              <p>Web sitemizde aşağıdaki çerez türlerini kullanmaktayız:</p>
              
              <h3>Zorunlu Çerezler</h3>
              <p>
                Web sitesinin temel işlevlerini yerine getirmesi için gerekli olan çerezlerdir. 
                Bu çerezler olmadan web sitesi düzgün çalışmaz.
              </p>

              <h3>Analitik Çerezler</h3>
              <p>
                Web sitesinin nasıl kullanıldığını anlamamıza yardımcı olan çerezlerdir. 
                Bu çerezler sayesinde site performansını iyileştirebiliriz.
              </p>

              <h3>Fonksiyonel Çerezler</h3>
              <p>
                Kullanıcı tercihlerini hatırlayarak daha kişiselleştirilmiş bir deneyim 
                sunmamızı sağlayan çerezlerdir.
              </p>

              <h2>3. Çerez Kullanım Amaçları</h2>
              <p>Çerezleri aşağıdaki amaçlarla kullanmaktayız:</p>
              <ul>
                <li>Web sitesinin işlevselliğini sağlama</li>
                <li>Kullanıcı deneyimini iyileştirme</li>
                <li>Site trafiğini analiz etme</li>
                <li>Güvenlik önlemlerini uygulama</li>
                <li>Kişiselleştirilmiş içerik sunma</li>
              </ul>

              <h2>4. Çerez Yönetimi</h2>
              <p>
                Tarayıcınızın ayarlarından çerezleri yönetebilir, silebilir veya 
                engelleyebilirsiniz. Ancak bazı çerezleri devre dışı bırakmanız 
                web sitesinin işlevselliğini etkileyebilir.
              </p>

              <h2>5. Üçüncü Taraf Çerezler</h2>
              <p>
                Web sitemizde Google Analytics gibi üçüncü taraf hizmetlerin 
                çerezleri de kullanılabilir. Bu çerezlerin kullanımı ilgili 
                şirketlerin gizlilik politikalarına tabidir.
              </p>

              <h2>6. Çerez Politikası Güncellemeleri</h2>
              <p>
                Bu çerez politikası gerektiğinde güncellenebilir. Önemli 
                değişiklikler web sitesinde duyurulacaktır.
              </p>

              <h2>7. İletişim</h2>
              <p>
                Çerez politikamız hakkında sorularınızı 
                <a href="mailto:info@okulpanel.com" class="text-accent-600 hover:text-accent-700">
                  info@okulpanel.com
                </a> 
                adresine iletebilirsiniz.
              </p>

              <div class="mt-12 pt-8 border-t border-neutral-200 text-center">
                <a 
                  routerLink="/" 
                  class="btn-primary inline-flex items-center space-x-2"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                  </svg>
                  <span>Ana Sayfaya Dön</span>
                </a>
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
    
    .prose h2 {
      border-bottom: 2px solid #FFD60A;
      padding-bottom: 0.5rem;
    }
  `],
})
export class CerezPolitikasiComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.setupSEO();
  }

  private setupSEO() {
    this.title.setTitle('Çerez Politikası | Okul Panel');
    
    this.meta.updateTag({
      name: 'description',
      content: 'Okul Panel çerez politikası. Web sitemizde kullanılan çerezler hakkında detaylı bilgi.'
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });
  }
}