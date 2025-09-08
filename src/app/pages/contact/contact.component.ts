import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NavbarComponent],
  template: `
    <div class="min-h-screen bg-white">
      <app-navbar></app-navbar>
      
      <main class="pt-20">
        <!-- Header -->
        <section class="section py-20 bg-gradient-to-br from-primary-950 to-primary-800 text-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl lg:text-6xl font-bold mb-6">
              <span class="text-accent-500">İletişime</span> Geçin
            </h1>
            <p class="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto">
              Sorularınız için bizimle iletişime geçin. Uzman ekibimiz size yardımcı olmaktan mutluluk duyar.
            </p>
          </div>
        </section>

        <!-- Contact Form & Info -->
        <section class="section py-20 bg-neutral-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <!-- Contact Form -->
              <div class="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8">
                <h2 class="text-2xl font-bold text-neutral-900 mb-6">Demo Talep Formu</h2>
                
                <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label for="firstName" class="block text-sm font-semibold text-neutral-700 mb-2">
                        Ad *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        formControlName="firstName"
                        class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                        [class.border-red-500]="contactForm.get('firstName')?.invalid && contactForm.get('firstName')?.touched"
                      />
                    </div>
                    
                    <div>
                      <label for="lastName" class="block text-sm font-semibold text-neutral-700 mb-2">
                        Soyad *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        formControlName="lastName"
                        class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                        [class.border-red-500]="contactForm.get('lastName')?.invalid && contactForm.get('lastName')?.touched"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="email" class="block text-sm font-semibold text-neutral-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      formControlName="email"
                      class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                      [class.border-red-500]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                    />
                  </div>

                  <div>
                    <label for="phone" class="block text-sm font-semibold text-neutral-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      formControlName="phone"
                      class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>

                  <div>
                    <label for="schoolName" class="block text-sm font-semibold text-neutral-700 mb-2">
                      Okul/Kurum Adı *
                    </label>
                    <input
                      type="text"
                      id="schoolName"
                      formControlName="schoolName"
                      class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                      [class.border-red-500]="contactForm.get('schoolName')?.invalid && contactForm.get('schoolName')?.touched"
                    />
                  </div>

                  <div>
                    <label for="studentCount" class="block text-sm font-semibold text-neutral-700 mb-2">
                      Yaklaşık Öğrenci Sayısı
                    </label>
                    <select
                      id="studentCount"
                      formControlName="studentCount"
                      class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    >
                      <option value="">Seçiniz</option>
                      <option value="50-100">50-100</option>
                      <option value="100-300">100-300</option>
                      <option value="300-500">300-500</option>
                      <option value="500-1000">500-1000</option>
                      <option value="1000+">1000+</option>
                    </select>
                  </div>

                  <div>
                    <label for="message" class="block text-sm font-semibold text-neutral-700 mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      formControlName="message"
                      rows="4"
                      class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                      placeholder="Özel ihtiyaçlarınız, sorularınız..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    [disabled]="contactForm.invalid || isSubmitting()"
                    class="w-full btn-primary py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    @if (isSubmitting()) {
                      <span>Gönderiliyor...</span>
                    } @else {
                      <span>Demo Talep Et</span>
                    }
                  </button>
                </form>

                @if (submitMessage()) {
                  <div class="mt-4 p-4 rounded-lg" [class]="submitMessage()?.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'">
                    {{ submitMessage()?.text }}
                  </div>
                }
              </div>

              <!-- Contact Info -->
              <div class="space-y-8">
                <div class="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8">
                  <h3 class="text-xl font-bold text-neutral-900 mb-6">İletişim Bilgileri</h3>
                  
                  <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                      <svg class="w-6 h-6 text-accent-500 mt-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <div>
                        <h4 class="font-semibold text-neutral-900">Adres</h4>
                        <p class="text-neutral-600">İstanbul, Türkiye</p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-3">
                      <svg class="w-6 h-6 text-accent-500 mt-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      <div>
                        <h4 class="font-semibold text-neutral-900">Telefon</h4>
                        <p class="text-neutral-600">+90 (212) 000 0000</p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-3">
                      <svg class="w-6 h-6 text-accent-500 mt-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      <div>
                        <h4 class="font-semibold text-neutral-900">E-posta</h4>
                        <p class="text-neutral-600">info@okulapp.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8">
                  <h3 class="text-xl font-bold text-neutral-900 mb-4">Çalışma Saatlerimiz</h3>
                  <div class="space-y-2 text-neutral-600">
                    <p><strong>Pazartesi - Cuma:</strong> 09:00 - 18:00</p>
                    <p><strong>Cumartesi:</strong> 10:00 - 16:00</p>
                    <p><strong>Pazar:</strong> Kapalı</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Back to Home -->
        <section class="section py-16 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
      contain-intrinsic-size: 1px 1000px;
    }
  `]
})
export class ContactPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  private fb = inject(FormBuilder);

  contactForm: FormGroup;
  isSubmitting = signal(false);
  submitMessage = signal<{type: 'success' | 'error', text: string} | null>(null);

  constructor() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      schoolName: ['', Validators.required],
      studentCount: [''],
      message: ['']
    });
  }

  ngOnInit() {
    this.title.setTitle('İletişim - Okul Panel | Demo Talep Et');
    this.meta.updateTag({
      name: 'description',
      content: 'Okul Panel ile iletişime geçin. Demo talep edin, sorularınızı sorun. Uzman ekibimiz size yardımcı olmaktan mutluluk duyar.'
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting.set(false);
        this.submitMessage.set({
          type: 'success',
          text: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.'
        });
        this.contactForm.reset();
      }, 2000);
    }
  }
}
