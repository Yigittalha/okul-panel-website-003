import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-kvkk',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-white">
      <!-- Header -->
      <header class="bg-primary-950 text-white py-8">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-primary-950" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <span class="text-2xl font-bold">Okul Panel</span>
            </div>
            <a routerLink="/" class="text-accent-500 hover:text-accent-400 transition-colors">
              Ana Sayfaya Dön
            </a>
          </div>
          <h1 class="text-4xl font-bold mt-8">Kişisel Verilerin Korunması Kanunu (KVKK)</h1>
          <p class="text-white/80 mt-4">Son güncelleme: 1 Ocak 2024</p>
        </div>
      </header>

      <!-- Content -->
      <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="prose prose-lg max-w-none">
          <section class="mb-12">
            <h2 class="text-2xl font-bold text-neutral-900 mb-4">1. Giriş</h2>
            <p class="text-neutral-700 leading-relaxed mb-4">
              Okul Panel olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında 
              kişisel verilerinizin güvenliğini ve gizliliğini korumak en öncelikli sorumluluğumuzudur. 
              Bu aydınlatma metni, kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu 
              hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
            </p>
          </section>

          <section class="mb-12">
            <h2 class="text-2xl font-bold text-neutral-900 mb-4">2. Veri Sorumlusu</h2>
            <div class="bg-neutral-50 p-6 rounded-lg">
              <h3 class="font-semibold text-neutral-900 mb-2">Veri Sorumlusu:</h3>
              <p class="text-neutral-700">Okul Panel Teknoloji A.Ş.</p>
              <p class="text-neutral-700">Adres: [Şirket Adresi]</p>
              <p class="text-neutral-700">E-posta: kvkk@okulpanel.com</p>
              <p class="text-neutral-700">Telefon: +90 212 XXX XX XX</p>
            </div>
          </section>

          <section class="mb-12">
            <h2 class="text-2xl font-bold text-neutral-900 mb-4">3. Toplanan Kişisel Veriler</h2>
            <p class="text-neutral-700 leading-relaxed mb-4">
              Hizmetlerimizi sunabilmek için aşağıdaki kişisel verilerinizi toplayabiliriz:
            </p>
            <ul class="list-disc list-inside text-neutral-700 space-y-2">
              <li>Kimlik Bilgileri: Ad, soyad, T.C. kimlik numarası</li>
              <li>İletişim Bilgileri: E-posta adresi, telefon numarası, adres</li>
              <li>Mesleki Bilgiler: Çalıştığınız kurum, pozisyon</li>
              <li>Eğitim Bilgileri: Öğrenci/öğretmen bilgileri (eğitim kurumları için)</li>
              <li>Teknik Veriler: IP adresi, tarayıcı bilgileri, kullanım verileri</li>
            </ul>
          </section>

          <section class="mb-12">
            <h2 class="text-2xl font-bold text-neutral-900 mb-4">4. Kişisel Verilerin İşlenme Amaçları</h2>
            <p class="text-neutral-700 leading-relaxed mb-4">
              Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
            </p>
            <ul class="list-disc list-inside text-neutral-700 space-y-2">
              <li>Hizmet sunumu ve müşteri ilişkileri yönetimi</li>
              <li>Sözleşme yükümlülüklerinin yerine getirilmesi</li>
              <li>Müşteri memnuniyeti araştırmaları</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>Güvenlik ve denetim faaliyetleri</li>
              <li>İstatistiksel analiz ve raporlama</li>
            </ul>
          </section>

          <section class="mb-12">
            <h2 class="text-2xl font-bold text-neutral-900 mb-4">5. Kişisel Verilerin Aktarılması</h2>
            <p class="text-neutral-700 leading-relaxed mb-4">
              Kişisel verileriniz, KVKK'nın öngördüğü şartlarda ve güvenli yöntemlerle 
              aşağıdaki taraflara aktarılabilir:
            </p>
            <ul class="list-disc list-inside text-neutral-700 space-y-2">
              <li>Hukuki yükümlülüklerimiz gereği kamu kurum ve kuruluşları</li>
              <li>Hizmet aldığımız üçüncü taraf tedarikçiler</li>
              <li>İş ortaklarımız (gerekli durumlarda)</li>
              <li>Teknik destek sağlayıcıları</li>
            </ul>
          </section>

          <section class="mb-12">
            <h2 class="text-2xl font-bold text-neutral-900 mb-4">6. Kişisel Verilerin Saklanması</h2>
            <p class="text-neutral-700 leading-relaxed mb-4">
              Kişisel verileriniz, işleme amaçlarının gerektirdiği süre boyunca ve yasal 
              saklama sürelerine uygun olarak saklanmaktadır. Bu süreler sona erdiğinde, 
              kişisel verileriniz güvenli yöntemlerle silinir, yok edilir veya anonim hale getirilir.
            </p>
          </section>

          <section class="mb-12">
            <h2 class="text-2xl font-bold text-neutral-900 mb-4">7. Veri Güvenliği</h2>
            <p class="text-neutral-700 leading-relaxed mb-4">
              Kişisel verilerinizin güvenliği için aşağıdaki teknik ve idari tedbirleri almaktayız:
            </p>
            <ul class="list-disc list-inside text-neutral-700 space-y-2">
              <li>SSL/TLS şifreleme teknolojileri</li>
              <li>Güvenli veri merkezleri</li>
              <li>Erişim kontrolü ve yetkilendirme sistemleri</li>
              <li>Düzenli güvenlik testleri ve denetimleri</li>
              <li>Personel eğitimi ve gizlilik sözleşmeleri</li>
            </ul>
          </section>

          <section class="mb-12">
            <h2 class="text-2xl font-bold text-neutral-900 mb-4">8. KVKK Kapsamındaki Haklarınız</h2>
            <p class="text-neutral-700 leading-relaxed mb-4">
              KVKK'nın 11. maddesi uyarınca sahip olduğunuz haklar:
            </p>
            <ul class="list-disc list-inside text-neutral-700 space-y-2">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenen kişisel verileriniz hakkında bilgi talep etme</li>
              <li>İşleme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Kişisel verilerinizin düzeltilmesini veya silinmesini talep etme</li>
              <li>İşleme faaliyetlerine itiraz etme</li>
              <li>Zararınızın giderilmesini talep etme</li>
            </ul>
          </section>

          <section class="mb-12">
            <h2 class="text-2xl font-bold text-neutral-900 mb-4">9. Başvuru Yöntemleri</h2>
            <p class="text-neutral-700 leading-relaxed mb-4">
              KVKK kapsamındaki haklarınızı kullanmak için aşağıdaki yöntemlerle başvurabilirsiniz:
            </p>
            <div class="bg-accent-50 border border-accent-200 p-6 rounded-lg">
              <h3 class="font-semibold text-neutral-900 mb-2">İletişim Bilgileri:</h3>
              <p class="text-neutral-700">E-posta: kvkk@okulpanel.com</p>
              <p class="text-neutral-700">Posta: [Şirket Adresi] - KVKK Başvuru Birimi</p>
              <p class="text-neutral-700 mt-2 text-sm">
                * Başvurularınız en geç 30 gün içinde değerlendirilecektir.
              </p>
            </div>
          </section>

          <section class="mb-12">
            <h2 class="text-2xl font-bold text-neutral-900 mb-4">10. Değişiklikler</h2>
            <p class="text-neutral-700 leading-relaxed">
              Bu aydınlatma metni, yasal düzenlemelerdeki değişiklikler veya şirket politikalarındaki 
              güncellemeler doğrultusunda revize edilebilir. Değişiklikler web sitemizde yayınlanacak 
              ve gerekli durumlarda size bildirilecektir.
            </p>
          </section>
        </div>

        <!-- Back to Home -->
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
    this.title.setTitle('KVKK - Kişisel Verilerin Korunması | Okul Panel');
    
    this.meta.updateTag({
      name: 'description',
      content: 'Okul Panel KVKK aydınlatma metni. Kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında detaylı bilgi.'
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });
  }
}
