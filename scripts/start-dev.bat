@echo off
setlocal enabledelayedexpansion

REM Okul Panel - Windows Geliştirme Sunucusu Başlatıcı
REM Bu script sunucuyu otomatik olarak yeniden başlatır ve hataları loglar

title Okul Panel Dev Server

REM Konfigürasyon
set MAX_RETRIES=5
set RETRY_DELAY=3
set LOG_FILE=logs\dev-server.log
set PID_FILE=logs\dev-server.pid

REM Log klasörü oluştur
if not exist logs mkdir logs

REM Banner
echo.
echo ╔══════════════════════════════════════╗
echo ║        🎓 Okul Panel Dev Server       ║
echo ║           Güvenilir Başlatıcı         ║
echo ╚══════════════════════════════════════╝
echo.

REM Cleanup function
:cleanup
echo 🔄 Temizlik yapılıyor...

REM Kill existing processes
taskkill /F /IM node.exe 2>nul
taskkill /F /IM ng.exe 2>nul

REM Clear port 4200
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :4200') do taskkill /F /PID %%a 2>nul

echo ✅ Temizlik tamamlandı
goto :eof

REM Check dependencies
:check_dependencies
echo 🔍 Bağımlılıklar kontrol ediliyor...

if not exist package.json (
    echo ❌ package.json bulunamadı! Doğru dizinde olduğunuzdan emin olun.
    pause
    exit /b 1
)

if not exist node_modules (
    echo 📦 node_modules bulunamadı, npm install çalıştırılıyor...
    npm install
    if errorlevel 1 (
        echo ❌ npm install başarısız!
        pause
        exit /b 1
    )
)

echo ✅ Bağımlılıklar hazır
goto :eof

REM Health check function
:health_check
echo 🏥 Sunucu sağlık kontrolü yapılıyor...

set /a attempt=1
set /a max_attempts=30

:health_loop
curl -s -f http://localhost:4200 >nul 2>&1
if !errorlevel! equ 0 (
    echo ✅ Sunucu başarıyla çalışıyor!
    echo 🌐 http://localhost:4200 adresinden erişebilirsiniz
    goto :eof
)

echo ⏳ Sunucu başlatılıyor... (!attempt!/!max_attempts!)
timeout /t 2 /nobreak >nul
set /a attempt+=1

if !attempt! leq !max_attempts! goto health_loop

echo ❌ Sunucu başlatılamadı!
exit /b 1

REM Start server function
:start_server
set /a retry_count=0

:retry_loop
if !retry_count! geq !MAX_RETRIES! (
    echo 💥 Maksimum deneme sayısına ulaşıldı. Sunucu başlatılamadı!
    echo 📋 Logları kontrol edin: type !LOG_FILE!
    pause
    exit /b 1
)

set /a attempt_num=!retry_count!+1
echo 🚀 Sunucu başlatılıyor... (Deneme: !attempt_num!/!MAX_RETRIES!)
echo %date% %time%: Starting server (attempt !attempt_num!) >> !LOG_FILE!

REM Start the development server
start /B cmd /c "ng serve --host 0.0.0.0 --port 4200 --poll 2000 --live-reload true >> !LOG_FILE! 2>&1"

REM Wait for server to start
timeout /t 5 /nobreak >nul

REM Do health check
call :health_check
if !errorlevel! equ 0 (
    echo 🎉 Sunucu başarıyla başlatıldı!
    echo 📊 Loglar: type !LOG_FILE!
    echo 🛑 Durdurmak için: Ctrl+C
    echo.
    
    REM Keep script running
    echo Sunucu çalışıyor... Durdurmak için herhangi bir tuşa basın.
    pause >nul
    
    call :cleanup
    exit /b 0
) else (
    echo ❌ Sağlık kontrolü başarısız!
    call :cleanup
)

set /a retry_count+=1
echo ⏳ !RETRY_DELAY! saniye bekleniyor...
timeout /t !RETRY_DELAY! /nobreak >nul

goto retry_loop

REM Main execution
:main
echo 🏁 Başlatma işlemi başlıyor...
echo %date% %time%: Script started >> !LOG_FILE!

call :cleanup
call :check_dependencies
call :start_server

REM Run main
call :main
