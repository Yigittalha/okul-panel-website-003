# 🚀 Okul Panel - Sunucu Başlatma Script'leri

Bu klasör, Okul Panel geliştirme sunucusunu güvenilir bir şekilde başlatmak için çeşitli script'ler içerir.

## 📁 Script'ler

### 1. `start-dev.sh` - Güvenilir Başlatıcı (Linux/Mac)
Sunucuyu otomatik yeniden başlatma ve hata yakalama özelliği ile başlatır.

**Özellikler:**
- ✅ Otomatik port temizleme
- ✅ Hata yakalama ve yeniden başlatma
- ✅ Sağlık kontrolü
- ✅ Detaylı loglama
- ✅ Maksimum 5 deneme
- ✅ Renkli output

**Kullanım:**
```bash
npm run dev:stable
# veya
./scripts/start-dev.sh
```

### 2. `start-dev.bat` - Windows Başlatıcı
Windows sistemler için güvenilir başlatıcı.

**Kullanım:**
```cmd
npm run dev:stable:win
# veya
./scripts/start-dev.bat
```

### 3. `quick-start.sh` - Hızlı Başlatma
Basit ve hızlı sunucu başlatma.

**Kullanım:**
```bash
npm run dev:quick
# veya
./scripts/quick-start.sh
```

### 4. `pm2.config.js` - PM2 Konfigürasyonu
Production-ready process manager konfigürasyonu.

**Kurulum:**
```bash
npm install -g pm2
```

**Kullanım:**
```bash
# Başlat
npm run dev:pm2

# Durdur
npm run dev:pm2:stop

# Yeniden başlat
npm run dev:pm2:restart

# Logları görüntüle
npm run dev:pm2:logs
```

## 🎯 Hangi Script'i Kullanmalı?

### Geliştirme Aşamasında:
- **Hızlı test için:** `npm run dev:quick`
- **Kararlı geliştirme için:** `npm run dev:stable`
- **Windows'ta:** `npm run dev:stable:win`

### Production/Staging:
- **En iyi seçenek:** `npm run dev:pm2`

## 📊 Log Dosyaları

Tüm script'ler `logs/` klasörüne log dosyaları oluşturur:

```
logs/
├── dev-server.log      # Ana script logları
├── pm2-error.log       # PM2 hata logları
├── pm2-out.log         # PM2 çıktı logları
└── pm2-combined.log    # PM2 birleşik loglar
```

## 🔧 Sorun Giderme

### Port 4200 kullanımda hatası:
```bash
# Manuel port temizleme
lsof -ti:4200 | xargs kill -9
```

### Node modules eksik:
```bash
npm install
```

### Sunucu başlamıyor:
```bash
# Logları kontrol et
cat logs/dev-server.log

# PM2 durumunu kontrol et
pm2 status
```

### Script çalışmıyor (Linux/Mac):
```bash
# İzinleri kontrol et
chmod +x scripts/*.sh
```

## 🚨 Acil Durumlar

### Tüm Node process'lerini durdur:
```bash
pkill -f node
```

### PM2'yi tamamen temizle:
```bash
pm2 kill
```

### Port'ları temizle:
```bash
sudo lsof -ti:4200,4000 | xargs kill -9
```

## 📱 Script Özellikleri Karşılaştırması

| Özellik | quick-start | start-dev | PM2 |
|---------|-------------|-----------|-----|
| Hızlı başlatma | ✅ | ❌ | ❌ |
| Otomatik yeniden başlatma | ❌ | ✅ | ✅ |
| Hata yakalama | ❌ | ✅ | ✅ |
| Detaylı loglama | ❌ | ✅ | ✅ |
| Process monitoring | ❌ | ❌ | ✅ |
| Memory limit | ❌ | ❌ | ✅ |
| Cluster mode | ❌ | ❌ | ✅ |
| Production ready | ❌ | ❌ | ✅ |

## 💡 İpuçları

1. **İlk kurulumda:** `npm run dev:quick` kullanın
2. **Günlük geliştirmede:** `npm run dev:stable` kullanın  
3. **Production'da:** `npm run dev:pm2` kullanın
4. **Windows'ta:** `npm run dev:stable:win` kullanın
5. **Logları takip edin:** `tail -f logs/dev-server.log`

## 🆘 Destek

Sorun yaşıyorsanız:
1. Logları kontrol edin
2. Port'ların boş olduğundan emin olun
3. Node.js ve npm versiyonlarını kontrol edin
4. Script izinlerini kontrol edin (Linux/Mac)

---
💚 **Okul Panel Development Team**
