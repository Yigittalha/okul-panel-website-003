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
