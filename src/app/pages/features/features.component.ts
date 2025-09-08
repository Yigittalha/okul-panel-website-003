import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FeaturesComponent } from '../../components/features/features.component';

@Component({
  selector: 'app-features-page',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FeaturesComponent],
  template: `
    <div class="min-h-screen">
      <app-navbar></app-navbar>
      
      <main class="pt-20">
        <app-features></app-features>
        
        <!-- Back to Home -->
        <section class="section py-16 bg-white/80 backdrop-blur-sm">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <a
              routerLink="/"
              class="btn-primary px-8 py-3 inline-block"
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
      contain-intrinsic-size: 1px 500px;
    }
  `]
})
export class FeaturesPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.title.setTitle('Özellikler - Okul Panel | Kapsamlı Eğitim Yönetim Sistemi');
    this.meta.updateTag({
      name: 'description',
      content: 'Okul Panel\'in güçlü özelliklerini keşfedin. Öğrenci yönetimi, not sistemi, veli iletişimi ve daha fazlası.'
    });
  }
}
