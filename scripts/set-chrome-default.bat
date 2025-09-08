@echo off
REM Chrome'u varsayılan browser yapmak için helper script

echo 🌐 Chrome varsayılan browser yapılıyor...
echo.

REM Chrome'un yüklü olup olmadığını kontrol et
where chrome >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Chrome bulunamadı! Chrome'u yükleyin: https://www.google.com/chrome/
    pause
    exit /b 1
)

REM Windows 10/11 için varsayılan browser ayarı
echo 📋 Windows ayarlarını açıyorum...
start ms-settings:defaultapps

echo.
echo ✅ İşlem tamamlandı!
echo 📝 Açılan ayarlar penceresinde:
echo    1. "Web tarayıcısı" bölümünde Chrome'u seçin
echo    2. Bu pencereyi kapatın
echo.
pause
