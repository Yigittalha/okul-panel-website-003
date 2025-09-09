import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ContentService } from '../../services/content.service';
import { Module } from '../../interfaces/content.interface';
import { fadeInAnimation, slideUpAnimation, staggerAnimation, scaleInAnimation } from '../../animations/page-animations';

@Component({
  selector: 'app-modules-page',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  animations: [fadeInAnimation, slideUpAnimation, staggerAnimation, scaleInAnimation],
  template: `
    <div class="min-h-screen">
      <app-navbar></app-navbar>
      
      <main class="pt-20">
        <!-- Header -->
        <section class="section py-10 bg-gradient-to-r from-primary-950 via-primary-900 to-primary-950 text-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div [@fadeIn]>
              <a routerLink="/" class="inline-block text-white/60 hover:text-white text-sm mb-4 transition-colors duration-300">
                ← Ana Sayfaya Dön
              </a>
              <h1 class="text-4xl lg:text-6xl font-bold mb-6">
                Kapsamlı <span class="text-accent-500">Modüller</span>
              </h1>
              <p class="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto">
                Her kullanıcı grubuna özel hazırlanmış modüller sayesinde yoklama, not, ödev, sınav ve iletişim süreçlerini tek platformda sorunsuz yönetin.
              </p>
            </div>
          </div>
        </section>

        <!-- Modules -->
        <section class="section py-20 bg-gradient-to-r from-primary-950 via-primary-900 to-primary-950">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8" [@stagger]>
              @for (module of modules(); track module.id) {
                <div class="card p-8 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl" [@slideUp]>
                  <div class="text-center mb-6">
                    <div class="w-16 h-16 rounded-2xl mx-auto mb-4 bg-gradient-to-r {{ module.color }} flex items-center justify-center">
                      <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                      </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-3">{{ module.title }}</h3>
                    <p class="text-white/80 mb-6">{{ module.description }}</p>
                  </div>
                  
                  <ul class="space-y-3">
                    @for (feature of module.features; track feature) {
                      <li class="flex items-center text-white/80">
                        <svg class="w-5 h-5 text-accent-500 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        {{ feature }}
                      </li>
                    }
                  </ul>
                </div>
              }
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="section py-20 bg-gradient-to-r from-primary-950 via-primary-900 to-primary-950">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div [@fadeIn]>
              <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
                Tüm Modülleri Deneyimleyin
              </h2>
              <p class="text-xl text-white/80 mb-8">
                Okul Panel'in öğrenci, öğretmen ve veliye özel modüllerini tanıyın. Eğitim süreçlerinizi tek panelden nasıl yöneteceğinizi görün.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12" [@stagger]>
                <a routerLink="/contact" class="btn-primary px-8 py-3" [@scaleIn]>Demo Talep Et</a>
                <a routerLink="/pricing" class="btn-secondary px-8 py-3" [@scaleIn]>Fiyatları Görüntüle</a>
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
    .section {
      content-visibility: auto;
      contain-intrinsic-size: 1px 800px;
    }
  `]
})
export class ModulesPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  private contentService = inject(ContentService);

  modules = signal<Module[]>([]);

  ngOnInit() {
    this.title.setTitle('Modüller - Okul Panel | Öğretmen, Öğrenci ve Yönetim Modülleri');
    this.meta.updateTag({
      name: 'description',
      content: 'Okul Panel modülleri: Öğrenci & Veli, Öğretmen ve Yönetim modülleri ile kapsamlı eğitim yönetimi.'
    });
    
    this.modules.set(this.contentService.getModules());
  }
}
