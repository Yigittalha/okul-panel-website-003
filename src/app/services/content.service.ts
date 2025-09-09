import { Injectable } from '@angular/core';
import {
  Feature,
  Module,
  Screenshot,
  Testimonial,
  FAQ,
  TrustBadge,
  NavigationItem,
} from '../interfaces/content.interface';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  getNavigationItems(): NavigationItem[] {
    return [
      { label: 'Ana Sayfa', href: '/' },
      { label: 'Özellikler', href: '/features' },
      { label: 'Modüller', href: '/modules' },
      { label: 'Fiyatlandırma', href: '/pricing' },
      { label: 'Hakkında', href: '/about' },
      { label: 'İletişim', href: '/contact' },
    ];
  }

  getTrustBadges(): TrustBadge[] {
    return [
      {
        id: 'kvkk',
        title: 'KVKK Uyumlu',
        description: 'Kişisel verilerin korunması kanununa tam uyum',
        icon: 'shield-check',
      },
      {
        id: 'tls',
        title: 'TLS Şifreleme',
        description: 'End-to-end güvenli veri iletimi',
        icon: 'lock',
      },
      {
        id: 'uptime',
        title: '%99,9 Uptime',
        description: 'Kesintisiz hizmet garantisi',
        icon: 'server',
      },
      {
        id: 'cloud',
        title: 'Bulut Tabanlı',
        description: 'Ölçeklenebilir altyapı',
        icon: 'cloud',
      },
    ];
  }

  getFeatures(): Feature[] {
    return [
      {
        id: 'student-management',
        title: 'Öğrenci Yönetimi',
        description:
          'Kapsamlı öğrenci bilgi sistemi ile tüm akademik süreçleri tek platformda yönetin.',
        icon: 'users',
        color: 'blue',
      },
      {
        id: 'grade-management',
        title: 'Not ve Değerlendirme',
        description:
          'Esnek not sistemi, sınav yönetimi ve detaylı performans analizleri.',
        icon: 'clipboard-list',
        color: 'green',
      },
      {
        id: 'attendance',
        title: 'Devam Takibi',
        description:
          'Otomatik devam sistemi, yoklama raporları ve devamsızlık uyarıları.',
        icon: 'calendar-check',
        color: 'orange',
      },
      {
        id: 'parent-portal',
        title: 'Veli Portalı',
        description:
          'Veliler çocuklarının akademik durumunu anlık olarak takip edebilir.',
        icon: 'heart',
        color: 'red',
      },
      {
        id: 'communication',
        title: 'İletişim Merkezi',
        description:
          'Öğretmen, öğrenci ve veliler arası güvenli mesajlaşma sistemi.',
        icon: 'message-circle',
        color: 'purple',
      },
      {
        id: 'reporting',
        title: 'Raporlama ve Analiz',
        description:
          'Detaylı raporlar ve görselleştirmelerle veri odaklı kararlar alın.',
        icon: 'bar-chart-3',
        color: 'indigo',
      },
      {
        id: 'mobile-app',
        title: 'Mobil Uygulama',
        description:
          'iOS ve Android uygulamaları ile her yerden erişim imkanı.',
        icon: 'smartphone',
        color: 'teal',
      },
      {
        id: 'integration',
        title: 'Entegrasyon Desteği',
        description:
          'Mevcut sistemlerinizle kolay entegrasyon ve veri aktarımı.',
        icon: 'link',
        color: 'cyan',
      },
    ];
  }

  getModules(): Module[] {
    return [
      {
        id: 'student-parent',
        title: 'Öğrenci & Veli Modülü',
        description:
          'Öğrenciler ve veliler için tasarlanmış kapsamlı portal.',
        features: [
          'Ders programı görüntüleme ve takvim entegrasyonu',
          'Detaylı not ve devam durumu takibi',
          'Kapsamlı ödev ve proje yönetimi sistemi',
          'Sınav tarihleri ve önemli duyurular',
          'Öğretmenlerle güvenli mesajlaşma',
        ],
        icon: 'graduation-cap',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        id: 'teacher',
        title: 'Öğretmen Modülü',
        description: 'Eğitimciler için özel olarak tasarlanmış araçlar.',
        features: [
          'Ders programı görüntüleme',
          'Sınıf ve ders yönetimi',
          'Günlük yoklama ve devamsızlık takibi',
          'Not girişi ve sınav puanlama',
          'Ödev atama ve fotoğraflı gönderim',
          'Sınav hazırlama ve uygulama',
          'Kazanım takibi & performans analizi',
          'Veli ile mesajlaşma',
          'Duyurular ve bildirimler',
        ],
        icon: 'book-open',
        color: 'from-green-500 to-emerald-500',
      },
      {
        id: 'management',
        title: 'Yönetim Modülü',
        description: 'Okul yöneticileri için tam kontrol paneli.',
        features: [
          'Yakında Eklenecek',
        ],
        icon: 'settings',
        color: 'from-purple-500 to-pink-500',
      },
    ];
  }

  getScreenshots(): Screenshot[] {
    return [
      {
        id: 'dashboard',
        title: 'Ana Dashboard',
        description: 'Kullanıcı dostu ana kontrol paneli',
        imageUrl: '/assets/screenshots/dashboard.webp',
        alt: 'Ana dashboard ekran görüntüsü',
      },
      {
        id: 'student-profile',
        title: 'Öğrenci Profili',
        description: 'Detaylı öğrenci bilgi sayfası',
        imageUrl: '/assets/screenshots/student-profile.webp',
        alt: 'Öğrenci profil ekran görüntüsü',
      },
      {
        id: 'grade-book',
        title: 'Not Defteri',
        description: 'Kolay not girişi ve takibi',
        imageUrl: '/assets/screenshots/grade-book.webp',
        alt: 'Not defteri ekran görüntüsü',
      },
      {
        id: 'parent-portal',
        title: 'Veli Portalı',
        description: 'Veliler için özel tasarlanmış arayüz',
        imageUrl: '/assets/screenshots/parent-portal.webp',
        alt: 'Veli portalı ekran görüntüsü',
      },
      {
        id: 'mobile-app',
        title: 'Mobil Uygulama',
        description: 'Responsive tasarım ve mobil optimizasyon',
        imageUrl: '/assets/screenshots/mobile-app.webp',
        alt: 'Mobil uygulama ekran görüntüsü',
      },
      {
        id: 'reports',
        title: 'Raporlar',
        description: 'Detaylı analitik ve raporlama ekranı',
        imageUrl: '/assets/screenshots/reports.webp',
        alt: 'Raporlar ekran görüntüsü',
      },
    ];
  }

  getTestimonials(): Testimonial[] {
    return [
      {
        id: 'testimonial-1',
        name: 'Mehmet Yılmaz',
        title: 'Okul Müdürü',
        institution: 'Atatürk İlkokulu',
        content:
          'Okul Panel sayesinde tüm süreçlerimizi dijitalleştirdik. Özellikle veli iletişimi ve not takibi çok kolaylaştı. Kesinlikle tavsiye ediyorum.',
        rating: 5,
      },
      {
        id: 'testimonial-2',
        name: 'Ayşe Demir',
        title: 'Sınıf Öğretmeni',
        institution: 'Cumhuriyet Ortaokulu',
        content:
          'Kullanımı çok kolay ve pratik. Öğrenci takibi ve not girişi artık dakikalar içinde halloluyor. Zaman tasarrufu inanılmaz.',
        rating: 5,
      },
      {
        id: 'testimonial-3',
        name: 'Fatma Kaya',
        title: 'Veli',
        institution: 'Gazi Lisesi',
        content:
          'Çocuğumun durumunu her an takip edebiliyorum. Öğretmenlerle iletişim kurması çok kolay. Gerçekten mükemmel bir sistem.',
        rating: 5,
      },
      {
        id: 'testimonial-4',
        name: 'Ali Özkan',
        title: 'Bilişim Koordinatörü',
        institution: 'Özel Gelişim Koleji',
        content:
          'Teknik destek ekibi harika. Kurulum çok hızlı oldu ve entegrasyon sorunsuz gerçekleşti. Güvenlik özellikleri de çok güçlü.',
        rating: 5,
      },
      {
        id: 'testimonial-5',
        name: 'Zehra Aksoy',
        title: 'Müdür Yardımcısı',
        institution: 'İstiklal İlkokulu',
        content:
          'Raporlama özellikleri sayesinde okul yönetimi çok daha verimli hale geldi. Analitik veriler karar almamızda büyük rol oynuyor.',
        rating: 5,
      },
    ];
  }


  getFAQs(): FAQ[] {
    return [
      {
        id: 'faq-1',
        question: 'Okul Panel nasıl kurulur?',
        answer:
          'Okul Panel bulut tabanlı bir sistemdir. Kurulum işlemi tamamen uzaktan gerçekleştirilir. Sadece internet bağlantınız olması yeterlidir. Teknik ekibimiz tüm kurulum sürecini sizin için halleder.',
        category: 'kurulum',
      },
      {
        id: 'faq-2',
        question: 'Mevcut verilerimizi nasıl aktarabiliriz?',
        answer:
          'Mevcut sisteminizdeki verileri Okul Panel\'e aktarmak için özel veri göç araçlarımız bulunmaktadır. Excel, CSV veya diğer formatlardaki verilerinizi kolayca içe aktarabilirsiniz. Veri göç işlemi ücretsizdir.',
        category: 'veri',
      },
      {
        id: 'faq-3',
        question: 'Sistem güvenliği nasıl sağlanıyor?',
        answer:
          'Okul Panel, ISO 27001 standartlarında geliştirilmiştir. Tüm veriler TLS şifreleme ile korunur, düzenli güvenlik testleri yapılır ve KVKK\'ya tam uyum sağlanır. Verileriniz Türkiye\'deki güvenli veri merkezlerinde saklanır.',
        category: 'güvenlik',
      },
      {
        id: 'faq-4',
        question: 'Mobil uygulama mevcut mu?',
        answer:
          'Evet, iOS ve Android için native mobil uygulamalarımız bulunmaktadır. Öğrenciler, veliler ve öğretmenler mobil uygulamalar üzerinden tüm işlemlerini gerçekleştirebilir.',
        category: 'mobil',
      },
      {
        id: 'faq-5',
        question: 'Destek hizmeti nasıl sağlanıyor?',
        answer:
          'Tüm paketlerimizde e-posta desteği bulunur. Okul ve Kurumsal paketlerde telefon desteği de mevcuttur. Kurumsal paket kullanıcıları 7/24 destek hizmeti alabilir. Ayrıca kapsamlı dokümantasyon ve video eğitimlerimiz bulunmaktadır.',
        category: 'destek',
      },
      {
        id: 'faq-6',
        question: 'Fiyatlandırma nasıl çalışıyor?',
        answer:
          'Fiyatlandırma öğrenci sayısına ve kullanılacak özelliklere göre belirlenir. Aylık abonelik modelimiz bulunmaktadır. Yıllık ödemede %20 indirim uygulanır. Özel ihtiyaçlarınız için kurumsal teklifler hazırlanabilir.',
        category: 'fiyat',
      },
      {
        id: 'faq-7',
        question: 'Deneme sürümü var mı?',
        answer:
          '30 günlük ücretsiz deneme sürümümüz bulunmaktadır. Deneme süresinde tüm özellikleri test edebilir, verilerinizi yükleyebilirsiniz. Deneme süresi sonunda otomatik ücretlendirme yapılmaz.',
        category: 'deneme',
      },
      {
        id: 'faq-8',
        question: 'Sistem ne kadar hızlı?',
        answer:
          'Okul Panel, modern bulut altyapısı üzerinde çalışır ve %99,9 uptime garantisi sunar. Sayfa yükleme süreleri 2 saniyenin altındadır. CDN teknolojisi sayesinde Türkiye\'nin her yerinden hızlı erişim sağlanır.',
        category: 'performans',
      },
    ];
  }
}
