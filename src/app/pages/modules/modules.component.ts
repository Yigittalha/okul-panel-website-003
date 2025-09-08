import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ContentService } from '../../services/content.service';
import { Module } from '../../interfaces/content.interface';

@Component({
  selector: 'app-modules-page',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  template: `
    <div class="min-h-screen bg-white">
      <app-navbar></app-navbar>
      
      <main class="pt-20">
        <!-- Header -->
        <section class="section py-20 bg-gradient-to-br from-primary-950 to-primary-800 text-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl lg:text-6xl font-bold mb-6">
              Kapsamlı <span class="text-accent-500">Modüller</span>
            </h1>
            <p class="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto">
              Her kullanıcı grubuna özel tasarlanmış modüller ile tüm eğitim süreçlerinizi tek platformda yönetin.
            </p>
          </div>
        </section>

        <!-- Modules -->
        <section class="section py-20 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
              @for (module of modules(); track module.id) {
                <div class="card p-8 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div class="text-center mb-6">
                    <div class="w-16 h-16 rounded-2xl mx-auto mb-4 bg-gradient-to-r {{ module.color }} flex items-center justify-center">
                      <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                      </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-neutral-900 mb-3">{{ module.title }}</h3>
                    <p class="text-neutral-600 mb-6">{{ module.description }}</p>
                  </div>
                  
                  <ul class="space-y-3">
                    @for (feature of module.features; track feature) {
                      <li class="flex items-center text-neutral-700">
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
        <section class="section py-20 bg-neutral-50">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              Tüm Modülleri Deneyimleyin
            </h2>
            <p class="text-xl text-neutral-600 mb-8">
              30 gün ücretsiz deneme ile tüm modülleri test edin.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a routerLink="/contact" class="btn-primary px-8 py-3">Demo Talep Et</a>
              <a routerLink="/pricing" class="btn-secondary px-8 py-3">Fiyatları Görüntüle</a>
            </div>
            
            <a
              routerLink="/"
              class="btn-secondary px-8 py-3 inline-block"
              aria-label="Ana sayfaya dön"
            >
              ← Ana Sayfaya Dön
            </a>
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
