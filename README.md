# 🎓 Okul Panel - Eğitim Yönetim Sistemi

Modern, güvenli ve kullanıcı dostu okul yönetim sistemi. Angular 17+ ile geliştirilmiş, kurumsal seviye tanıtım sitesi.

## ✨ Özellikler

- 🚀 **Angular 17+** (Standalone Components)
- 🎨 **TailwindCSS** ile modern tasarım
- 📱 **Responsive** ve mobil uyumlu
- ♿ **Erişilebilirlik** (WCAG AA uyumlu)
- 🔍 **SEO Optimized** (Meta tags, JSON-LD, Sitemap)
- 📦 **PWA Ready** (Manifest, Service Worker)
- 🛡️ **KVKK Uyumlu** tasarım
- 🇹🇷 **Türkçe** içerik

## 🏗️ Teknoloji Stack

- **Frontend**: Angular 17+, TypeScript, TailwindCSS
- **Animasyonlar**: Angular Animations, GSAP ScrollTrigger
- **Test**: Jest, Playwright
- **CI/CD**: GitHub Actions
- **Deployment**: Docker, PM2
- **Code Quality**: ESLint, Prettier, Husky

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Node.js 18+
- npm 9+

### Kurulum
```bash
# Repository'yi klonlayın
git clone https://github.com/KULLANICI_ADI/okul-panel-website.git
cd okul-panel-website

# Bağımlılıkları yükleyin
npm install

# Development server'ı başlatın
npm run dev
```

### Geliştirme Komutları

```bash
# Development server (güvenilir başlatıcı)
npm run dev:stable

# Hızlı başlatma
npm run dev:quick

# Production build
npm run build:ssr

# Test
npm run test
npm run e2e

# Code quality
npm run lint
npm run format
```

## 📁 Proje Yapısı

```
src/
├── app/
│   ├── components/          # Yeniden kullanılabilir bileşenler
│   │   ├── navbar/         # Navigasyon
│   │   ├── hero/           # Ana banner
│   │   ├── trust-strip/    # Güven rozetleri
│   │   ├── features/       # Özellikler
│   │   └── screenshots/    # Ekran görüntüleri
│   ├── pages/              # Sayfa bileşenleri
│   │   ├── landing/        # Ana sayfa
│   │   ├── ozellikler/     # Özellikler sayfası
│   │   ├── moduller/       # Modüller sayfası
│   │   ├── fiyatlandirma/  # Fiyatlandırma
│   │   └── ekran-goruntuleri/ # Ekran görüntüleri
│   ├── services/           # Servisler
│   ├── interfaces/         # TypeScript arayüzleri
│   └── animations/         # Animasyon tanımları
├── styles.scss             # Global stiller
└── index.html              # Ana HTML
```

## 🎨 Tasarım Sistemi

### Renkler
- **Primary**: #0D1B2A (Koyu mavi)
- **Accent**: #FFD60A (Altın sarısı)
- **Neutral**: Gri tonları

### Tipografi
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700

### Bileşenler
- **Kartlar**: rounded-2xl, soft shadow, hover scale 1.02
- **Butonlar**: Primary, Secondary, Accent varyantları
- **Animasyonlar**: 300-500ms, ease-out

## 📱 Sayfalar

### Ana Sayfa (`/`)
- Hero section
- Okul Panel nedir? (Hakkında)
- Müşteri referansları
- Paket önizlemesi
- İletişim formu

### Ayrı Sayfalar
- `/ozellikler` - Tüm özellikler
- `/moduller` - Modül detayları
- `/ekran-goruntuleri` - UI galerisi
- `/fiyatlandirma` - Dinamik fiyat hesaplayıcısı

### Yasal Sayfalar
- `/kvkk` - KVKK Aydınlatma Metni
- `/cerez-politikasi` - Çerez Politikası
- `/sartlar` - Kullanım Şartları

## 🔧 Geliştirme

### Scripts
- `npm run dev:stable` - Güvenilir development server
- `npm run dev:pm2` - PM2 ile production-like server
- `npm run build:ssr` - SSR production build
- `npm run serve:ssr` - SSR server başlatma

### Code Quality
- **ESLint**: TypeScript/Angular kuralları
- **Prettier**: Kod formatı
- **Husky**: Git hooks
- **Commitlint**: Conventional commits

## 🚀 Deployment

### Docker
```bash
# Docker image oluştur
docker build -t okul-panel .

# Container çalıştır
docker run -p 4200:4200 okul-panel
```

### PM2
```bash
# PM2 ile başlat
npm run dev:pm2

# Logları görüntüle
npm run dev:pm2:logs
```

## 📊 Performans

- **Lighthouse Score**: ≥90 (Perf/SEO/A11y/Best Practices)
- **Core Web Vitals**: Optimized
- **Bundle Size**: Minimized
- **Loading**: Lazy loading, code splitting

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'feat: add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- **Website**: [okulpanel.com](https://okulpanel.com)
- **Email**: info@okulpanel.com
- **Support**: destek@okulpanel.com

---

**Okul Panel** - Eğitimin dijital geleceğini bugünden yaşayın! 🎓✨