import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInAnimation, slideUpAnimation } from '../../animations/page-animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeInAnimation, slideUpAnimation],
  template: `
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-500 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <!-- Content Container -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Column - Text Content -->
          <div class="text-center lg:text-left" [@fadeIn]>
            <h1 
              class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              [@slideUp]
            >
              Eğitimin
              <span class="text-accent-500 block">Dijital Geleceği</span>
              Burada Başlıyor
            </h1>
            
            <p 
              class="text-xl lg:text-2xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0"
              [@slideUp]
            >
              Okul yönetiminizi kolaylaştıran, öğrenci başarısını artıran ve velilerle 
              iletişimi güçlendiren kapsamlı eğitim yönetim sistemi.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" [@slideUp]>
              <button 
                class="btn-primary text-lg px-8 py-4 shadow-2xl hover:shadow-accent-500/25"
                (click)="requestDemo()"
              >
                Ücretsiz Demo Talep Et
              </button>
              <button 
                class="btn-secondary text-lg px-8 py-4 border-white/30 text-white hover:bg-white hover:text-primary-950"
                (click)="downloadBrochure()"
              >
                Broşür İndir
              </button>
              <button 
                class="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-green-500/30 hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-green-300"
                (click)="startLiveDemo()"
              >
                🚀 Canlı Demo
              </button>
            </div>

            <!-- Trust Indicators -->
            <div class="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 text-white/60" [@slideUp]>
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
                <span class="text-sm font-medium">KVKK Uyumlu</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4z"/>
                </svg>
                <span class="text-sm font-medium">ISO 27001</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span class="text-sm font-medium">%99.9 Uptime</span>
              </div>
            </div>
          </div>

          <!-- Right Column - Visual Content -->
          <div class="relative" [@fadeIn]>
            <div class="relative max-w-lg mx-auto lg:max-w-none">
              <!-- Device Mockup -->
              <div class="relative">
                <!-- Desktop Mockup -->
                <div class="bg-white rounded-2xl shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div class="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 h-80">
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex space-x-2">
                        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div class="text-xs text-neutral-500">Okul Panel Dashboard</div>
                    </div>
                    
                    <!-- Dashboard Content -->
                    <div class="space-y-4">
                      <div class="bg-white rounded-lg p-4 shadow-sm">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-1.1.9-2 2-2s2 .9 2 2V18h2v-4h3v4h1v2H3v-2h1z"/>
                              </svg>
                            </div>
                            <div>
                              <div class="text-sm font-semibold text-neutral-800">1,247 Öğrenci</div>
                              <div class="text-xs text-neutral-500">Aktif Kayıt</div>
                            </div>
                          </div>
                          <div class="text-green-500 text-sm font-medium">+12%</div>
                        </div>
                      </div>
                      
                      <div class="grid grid-cols-2 gap-3">
                        <div class="bg-white rounded-lg p-3 shadow-sm">
                          <div class="text-xs text-neutral-500">Devam Oranı</div>
                          <div class="text-lg font-bold text-neutral-800">94.2%</div>
                        </div>
                        <div class="bg-white rounded-lg p-3 shadow-sm">
                          <div class="text-xs text-neutral-500">Ortalama</div>
                          <div class="text-lg font-bold text-neutral-800">87.5</div>
                        </div>
                      </div>
                      
                      <!-- Chart placeholder -->
                      <div class="bg-white rounded-lg p-4 shadow-sm">
                        <div class="h-16 bg-gradient-to-r from-accent-200 to-blue-200 rounded opacity-60"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Mobile Mockup -->
                <div class="absolute -bottom-6 -right-6 w-32 bg-white rounded-2xl shadow-xl p-2 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div class="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-3 h-48">
                    <div class="text-center">
                      <div class="w-16 h-16 bg-accent-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div class="text-xs font-semibold text-neutral-800">Mobil Erişim</div>
                      <div class="text-xs text-neutral-500 mt-1">Her yerden ulaşın</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Floating Elements -->
              <div class="absolute -top-8 -left-8 w-16 h-16 bg-accent-500/20 rounded-full blur-xl animate-bounce-subtle"></div>
              <div class="absolute -bottom-8 -right-8 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce-subtle">
        <div class="flex flex-col items-center space-y-2">
          <span class="text-sm font-medium">Keşfet</span>
          <svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('heroSection', { static: false }) heroSection!: ElementRef;

  ngOnInit() {
    // Component initialization
  }

  ngAfterViewInit() {
    // Setup GSAP animations if needed
    this.setupScrollAnimations();
  }

  requestDemo() {
    const contactElement = document.querySelector('#iletisim');
    if (contactElement) {
      const offsetTop = contactElement.getBoundingClientRect().top + window.pageYOffset;
      const navbarHeight = 80;
      window.scrollTo({
        top: offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  }

  downloadBrochure() {
    // Create a mock PDF download
    const link = document.createElement('a');
    link.href = '/assets/documents/okul-panel-brosur.pdf';
    link.download = 'okul-panel-brosur.pdf';
    link.click();
    
    // Show toast notification
    this.showToast('Broşür indiriliyor...', 'info');
  }

  startLiveDemo() {
    // Open demo in new tab/window
    window.open('https://demo.okulpanel.com', '_blank', 'noopener,noreferrer');
    
    // Show toast notification
    this.showToast('Canlı demo açılıyor...', 'success');
  }

  private setupScrollAnimations() {
    // GSAP scroll animations can be added here
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      // Setup parallax effects for desktop
    }
  }

  private showToast(message: string, type: 'success' | 'error' | 'info') {
    // Simple toast implementation
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg text-white transform transition-transform duration-300 translate-x-full`;
    
    switch (type) {
      case 'success':
        toast.classList.add('bg-green-500');
        break;
      case 'error':
        toast.classList.add('bg-red-500');
        break;
      case 'info':
        toast.classList.add('bg-blue-500');
        break;
    }
    
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.remove('translate-x-full');
    }, 100);
    
    setTimeout(() => {
      toast.classList.add('translate-x-full');
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  }
}
