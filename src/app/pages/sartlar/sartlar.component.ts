import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-sartlar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-white">
      <!-- Header -->
      <header class="bg-primary-950 text-white py-8">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-primary-950" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <span class="text-2xl font-bold">Okul Panel</span>
            </div>
            <a routerLink="/" class="text-accent-500 hover:text-accent-400 transition-colors">
              Ana Sayfaya Dön
            </a>
          </div>
          <h1 class="text-4xl font-bold mt-8">Kullanım Şartları</h1>
          <p class="text-white/80 mt-4">Son güncelleme: 1 Ocak 2024</p>
        </div>
      </header>

      <!-- Content -->
      <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="prose prose-lg max-w-none">
          <section class="mb-12">
            <h2 class="text-2xl font-bold text-neutral-900 mb-4">Kullanım Şartları</h2>
            <p class="text-neutral-700 leading-relaxed mb-4">
              Bu kullanım şartları, Okul Panel hizmetlerini kullanımınızı düzenler. 
              Hizmetlerimizi kullanarak bu şartları kabul etmiş sayılırsınız.
            </p>
          </section>

          <section class="mb-12">
            <h2 class="text-2xl font-bold text-neutral-900 mb-4">Hizmet Kullanımı</h2>
            <p class="text-neutral-700 leading-relaxed mb-4">
              Okul Panel hizmetlerini yasal amaçlar için kullanmanız gerekmektedir. 
              Hizmetlerimizi kötüye kullanmak yasaktır.
            </p>
          </section>
        </div>

        <!-- Back to Home -->
        <div class="mt-12 pt-8 border-t border-neutral-200 text-center">
          <a 
            routerLink="/" 
            class="btn-primary inline-flex items-center space-x-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            <span>Ana Sayfaya Dön</span>
          </a>
        </div>
      </main>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
})
export class SartlarComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.setupSEO();
  }

  private setupSEO() {
    this.title.setTitle('Kullanım Şartları | Okul Panel');
    
    this.meta.updateTag({
      name: 'description',
      content: 'Okul Panel kullanım şartları. Hizmetlerimizi kullanım koşulları ve kuralları hakkında bilgi.'
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });
  }
}
