#!/bin/bash

# Okul Panel - Hızlı Başlatma Script'i
# Basit ve hızlı sunucu başlatma

set -e

# Renkli output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🚀 Okul Panel Hızlı Başlatma${NC}"
echo -e "${BLUE}================================${NC}"

# Port kontrolü
if lsof -Pi :4200 -sTCP:LISTEN -t >/dev/null ; then
    echo -e "${YELLOW}⚠️  Port 4200 kullanımda, temizleniyor...${NC}"
    lsof -ti:4200 | xargs kill -9 2>/dev/null || true
    sleep 2
fi

# Bağımlılık kontrolü
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Dependencies yükleniyor...${NC}"
    npm install
fi

echo -e "${GREEN}✅ Sunucu başlatılıyor...${NC}"
echo -e "${BLUE}🌐 http://localhost:4200${NC}"
echo -e "${YELLOW}⏹️  Durdurmak için Ctrl+C${NC}"
echo ""

# Sunucu başlat
ng serve --open --host 0.0.0.0 --port 4200
