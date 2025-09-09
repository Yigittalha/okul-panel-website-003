import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-kvkk',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  template: `
    <div class="min-h-screen">
      <app-navbar></app-navbar>
      
      <main class="pt-20">
        <!-- Header -->
        <header class="bg-gradient-to-br from-primary-950 to-primary-800 text-white py-20">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-4xl font-bold">Kişisel Verilerin Korunması Kanunu (KVKK)</h1>
            <p class="text-white/80 mt-4">Son güncelleme: 1 Ocak 2024</p>
          </div>
        </header>

        <!-- Content -->
        <section class="section py-20 bg-white">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="prose prose-lg max-w-none">
              <h2>1. Genel Hükümler</h2>
              <p>
                Bu Kişisel Verilerin Korunması Kanunu (KVKK) politikası, Okul Panel platformu 
                üzerinden toplanan kişisel verilerin işlenmesi, korunması ve saklanması ile 
                ilgili hükümleri içerir.
              </p>

              <h2>2. Veri Sorumlusu</h2>
              <p>
                Okul Panel olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında 
                veri sorumlusu sıfatıyla kişisel verilerinizi işlemekteyiz.
              </p>

              <h2>3. Toplanan Kişisel Veriler</h2>
              <p>Platformumuzda aşağıdaki kişisel veriler toplanmaktadır:</p>
              <ul>
                <li>Ad, soyad, e-posta adresi</li>
                <li>Telefon numarası</li>
                <li>Okul bilgileri</li>
                <li>Kullanıcı aktivite verileri</li>
                <li>IP adresi ve çerez bilgileri</li>
              </ul>

              <h2>4. Veri İşleme Amaçları</h2>
              <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
              <ul>
                <li>Hizmet sunumu ve geliştirme</li>
                <li>Müşteri desteği sağlama</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                <li>Güvenlik ve kalite kontrolü</li>
              </ul>

              <h2>5. Veri Güvenliği</h2>
              <p>
                Kişisel verilerinizin güvenliği için gerekli teknik ve idari tedbirleri 
                almaktayız. Verileriniz SSL şifreleme ile korunmakta ve güvenli sunucularda 
                saklanmaktadır.
              </p>

              <h2>6. Veri Saklama Süresi</h2>
              <p>
                Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve yasal 
                saklama sürelerine uygun olarak saklanmaktadır.
              </p>

              <h2>7. Veri Sahibinin Hakları</h2>
              <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
              <ul>
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenen kişisel verileriniz hakkında bilgi talep etme</li>
                <li>İşleme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                <li>Eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
                <li>Belirli şartlar altında verilerin silinmesini veya yok edilmesini isteme</li>
              </ul>

              <h2>8. İletişim</h2>
              <p>
                KVKK kapsamındaki taleplerinizi ve sorularınızı 
                <a href="mailto:kvkk@okulpanel.com" class="text-accent-600 hover:text-accent-700">
                  kvkk@okulpanel.com
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
export class KvkkComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.setupSEO();
  }

  private setupSEO() {
    this.title.setTitle('KVKK | Okul Panel');
    
    this.meta.updateTag({
      name: 'description',
      content: 'Okul Panel KVKK politikası. Kişisel verilerin korunması kanunu kapsamında veri işleme politikamız.'
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });
  }
}