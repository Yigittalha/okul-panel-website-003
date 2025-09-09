import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-sartlar',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  template: `
    <div class="min-h-screen">
      <app-navbar></app-navbar>
      
      <main class="pt-20">
        <!-- Header -->
        <header class="bg-gradient-to-br from-primary-950 to-primary-800 text-white py-20">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-4xl font-bold">Kullanım Şartları</h1>
            <p class="text-white/80 mt-4">Son güncelleme: 1 Ocak 2024</p>
          </div>
        </header>

        <!-- Content -->
        <section class="section py-20 bg-white">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="prose prose-lg max-w-none">
              <h2>1. Genel Hükümler</h2>
              <p>
                Bu kullanım şartları, Okul Panel platformunu kullanırken uymanız gereken 
                kuralları ve koşulları belirler. Platformu kullanarak bu şartları 
                kabul etmiş sayılırsınız.
              </p>

              <h2>2. Hizmet Tanımı</h2>
              <p>
                Okul Panel, eğitim kurumları için geliştirilmiş kapsamlı bir okul 
                yönetim sistemidir. Platform üzerinden öğrenci, öğretmen ve veli 
                yönetimi yapabilirsiniz.
              </p>

              <h2>3. Kullanıcı Yükümlülükleri</h2>
              <p>Platformu kullanırken aşağıdaki kurallara uymanız gerekmektedir:</p>
              <ul>
                <li>Doğru ve güncel bilgiler sağlamak</li>
                <li>Güvenlik önlemlerini almak</li>
                <li>Yasalara uygun davranmak</li>
                <li>Diğer kullanıcıların haklarına saygı göstermek</li>
                <li>Platformu kötüye kullanmamak</li>
              </ul>

              <h2>4. Yasak Kullanımlar</h2>
              <p>Aşağıdaki faaliyetler kesinlikle yasaktır:</p>
              <ul>
                <li>Yasadışı içerik paylaşımı</li>
                <li>Başkalarının hesaplarını ele geçirme</li>
                <li>Zararlı yazılım yayma</li>
                <li>Spam ve istenmeyen içerik gönderme</li>
                <li>Telif hakkı ihlali</li>
              </ul>

              <h2>5. Hesap Güvenliği</h2>
              <p>
                Hesap bilgilerinizi güvende tutmak sizin sorumluluğunuzdadır. 
                Şüpheli aktiviteleri derhal bildirmeniz gerekmektedir.
              </p>

              <h2>6. Hizmet Değişiklikleri</h2>
              <p>
                Okul Panel, hizmetlerini önceden bildirimde bulunarak değiştirme, 
                güncelleme veya sonlandırma hakkını saklı tutar.
              </p>

              <h2>7. Sorumluluk Sınırları</h2>
              <p>
                Okul Panel, platform kullanımından doğabilecek dolaylı zararlardan 
                sorumlu değildir. Hizmet "olduğu gibi" sunulmaktadır.
              </p>

              <h2>8. Fikri Mülkiyet</h2>
              <p>
                Platform üzerindeki tüm içerik, yazılım ve tasarımlar Okul Panel'e 
                aittir ve telif hakkı koruması altındadır.
              </p>

              <h2>9. Uyuşmazlık Çözümü</h2>
              <p>
                Bu şartlardan doğan uyuşmazlıklar Türk hukuku çerçevesinde 
                çözülecektir.
              </p>

              <h2>10. İletişim</h2>
              <p>
                Kullanım şartları hakkında sorularınızı 
                <a href="mailto:destek@okulpanel.com" class="text-accent-600 hover:text-accent-700">
                  destek@okulpanel.com
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
export class SartlarComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.setupSEO();
  }

  private setupSEO() {
    this.title.setTitle('Kullanım Şartları | Okul Panel');
    
    this.meta.updateTag({
      name: 'description',
      content: 'Okul Panel kullanım şartları. Hizmetlerimizi kullanım koşulları ve kuralları hakkında bilgi.'
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });
  }
}