#!/bin/bash

# Okul Panel - Güvenilir Geliştirme Sunucusu Başlatıcı
# Bu script sunucuyu otomatik olarak yeniden başlatır ve hataları loglar

set -e

# Renkli output için
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Konfigürasyon
MAX_RETRIES=5
RETRY_DELAY=3
LOG_FILE="logs/dev-server.log"
PID_FILE="logs/dev-server.pid"

# Log klasörü oluştur
mkdir -p logs

# Banner
echo -e "${BLUE}╔══════════════════════════════════════╗${NC}"
echo -e "${BLUE}║        🎓 Okul Panel Dev Server       ║${NC}"
echo -e "${BLUE}║           Güvenilir Başlatıcı         ║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════╝${NC}"
echo ""

# Cleanup function
cleanup() {
    echo -e "\n${YELLOW}🔄 Temizlik yapılıyor...${NC}"
    
    # Kill existing processes
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if kill -0 "$PID" 2>/dev/null; then
            echo -e "${YELLOW}⏹️  Mevcut sunucu durduruluyor (PID: $PID)${NC}"
            kill "$PID" 2>/dev/null || true
            sleep 2
        fi
        rm -f "$PID_FILE"
    fi
    
    # Kill any remaining ng serve processes
    pkill -f "ng serve" 2>/dev/null || true
    pkill -f "node.*angular" 2>/dev/null || true
    
    # Clear port 4200
    lsof -ti:4200 | xargs kill -9 2>/dev/null || true
    
    echo -e "${GREEN}✅ Temizlik tamamlandı${NC}"
}

# Trap signals
trap cleanup EXIT INT TERM

# Check dependencies
check_dependencies() {
    echo -e "${BLUE}🔍 Bağımlılıklar kontrol ediliyor...${NC}"
    
    # Check if we're in the right directory
    if [ ! -f "package.json" ]; then
        echo -e "${RED}❌ package.json bulunamadı! Doğru dizinde olduğunuzdan emin olun.${NC}"
        exit 1
    fi
    
    # Check if node_modules exists
    if [ ! -d "node_modules" ]; then
        echo -e "${YELLOW}📦 node_modules bulunamadı, npm install çalıştırılıyor...${NC}"
        npm install
    fi
    
    # Check if Angular CLI is available
    if ! command -v ng &> /dev/null; then
        echo -e "${YELLOW}🔧 Angular CLI bulunamadı, npx kullanılacak...${NC}"
        NG_CMD="npx ng"
    else
        NG_CMD="ng"
    fi
    
    echo -e "${GREEN}✅ Bağımlılıklar hazır${NC}"
}

# Health check function
health_check() {
    local max_attempts=30
    local attempt=1
    
    echo -e "${BLUE}🏥 Sunucu sağlık kontrolü yapılıyor...${NC}"
    
    while [ $attempt -le $max_attempts ]; do
        if curl -s -f http://localhost:4200 > /dev/null 2>&1; then
            echo -e "${GREEN}✅ Sunucu başarıyla çalışıyor!${NC}"
            echo -e "${GREEN}🌐 http://localhost:4200 adresinden erişebilirsiniz${NC}"
            return 0
        fi
        
        echo -e "${YELLOW}⏳ Sunucu başlatılıyor... ($attempt/$max_attempts)${NC}"
        sleep 2
        ((attempt++))
    done
    
    echo -e "${RED}❌ Sunucu başlatılamadı!${NC}"
    return 1
}

# Start server function
start_server() {
    local retry_count=0
    
    while [ $retry_count -lt $MAX_RETRIES ]; do
        echo -e "${BLUE}🚀 Sunucu başlatılıyor... (Deneme: $((retry_count + 1))/$MAX_RETRIES)${NC}"
        echo "$(date): Starting server (attempt $((retry_count + 1)))" >> "$LOG_FILE"
        
        # Start the development server
        $NG_CMD serve --host 0.0.0.0 --port 4200 --poll 2000 --live-reload true >> "$LOG_FILE" 2>&1 &
        SERVER_PID=$!
        echo $SERVER_PID > "$PID_FILE"
        
        echo -e "${BLUE}📋 Sunucu PID: $SERVER_PID${NC}"
        
        # Wait a bit for the server to start
        sleep 5
        
        # Check if process is still running
        if kill -0 $SERVER_PID 2>/dev/null; then
            # Do health check
            if health_check; then
                echo -e "${GREEN}🎉 Sunucu başarıyla başlatıldı!${NC}"
                echo -e "${BLUE}📊 Loglar: tail -f $LOG_FILE${NC}"
                echo -e "${BLUE}🛑 Durdurmak için: Ctrl+C${NC}"
                echo ""
                
                # Monitor the process
                while kill -0 $SERVER_PID 2>/dev/null; do
                    sleep 5
                done
                
                echo -e "${RED}⚠️  Sunucu beklenmedik şekilde kapandı!${NC}"
                echo "$(date): Server crashed unexpectedly" >> "$LOG_FILE"
            else
                echo -e "${RED}❌ Sağlık kontrolü başarısız!${NC}"
                kill $SERVER_PID 2>/dev/null || true
            fi
        else
            echo -e "${RED}❌ Sunucu başlatılamadı!${NC}"
        fi
        
        ((retry_count++))
        
        if [ $retry_count -lt $MAX_RETRIES ]; then
            echo -e "${YELLOW}⏳ $RETRY_DELAY saniye bekleniyor...${NC}"
            sleep $RETRY_DELAY
            cleanup
        fi
    done
    
    echo -e "${RED}💥 Maksimum deneme sayısına ulaşıldı. Sunucu başlatılamadı!${NC}"
    echo -e "${BLUE}📋 Logları kontrol edin: cat $LOG_FILE${NC}"
    exit 1
}

# Main execution
main() {
    echo -e "${BLUE}🏁 Başlatma işlemi başlıyor...${NC}"
    echo "$(date): Script started" >> "$LOG_FILE"
    
    # Initial cleanup
    cleanup
    
    # Check dependencies
    check_dependencies
    
    # Start server with retry logic
    start_server
}

# Run main function
main
