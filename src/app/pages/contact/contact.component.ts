import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { fadeInAnimation, slideUpAnimation, staggerAnimation, scaleInAnimation } from '../../animations/page-animations';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NavbarComponent],
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
                <span class="text-accent-500">İletişime</span> Geçin
              </h1>
              <p class="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto">
                Sorularınız için bizimle iletişime geçin. Uzman ekibimiz size yardımcı olmaktan mutluluk duyar.
              </p>
            </div>
          </div>
        </section>

        <!-- Contact Form & Info -->
        <section class="section py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 relative overflow-hidden">
          <!-- Background Elements -->
          <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12" [@stagger]>
              <!-- Contact Form -->
              <div class="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-10 hover:bg-white/15 transition-all duration-300" [@slideUp]>
                <div class="text-center mb-8">
                  <div class="w-16 h-16 bg-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <h2 class="text-3xl font-bold text-white mb-2">Demo Talep Formu</h2>
                  <p class="text-white/70">Hemen başlayın, 3 gün ücretsiz deneyin</p>
                </div>
                
                <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label for="firstName" class="block text-sm font-semibold text-white mb-2">
                        Ad *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        formControlName="firstName"
                        class="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-accent-400 focus:border-accent-400 focus:bg-white/20 transition-all duration-300"
                        placeholder="Adınız"
                        [class.border-red-400]="contactForm.get('firstName')?.invalid && contactForm.get('firstName')?.touched"
                      />
                    </div>
                    
                    <div>
                      <label for="lastName" class="block text-sm font-semibold text-white mb-2">
                        Soyad *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        formControlName="lastName"
                        class="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-accent-400 focus:border-accent-400 focus:bg-white/20 transition-all duration-300"
                        placeholder="Soyadınız"
                        [class.border-red-400]="contactForm.get('lastName')?.invalid && contactForm.get('lastName')?.touched"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="email" class="block text-sm font-semibold text-white mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      formControlName="email"
                      class="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-accent-400 focus:border-accent-400 focus:bg-white/20 transition-all duration-300"
                      placeholder="ornek@email.com"
                      [class.border-red-400]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                    />
                  </div>

                  <div>
                    <label for="phone" class="block text-sm font-semibold text-white mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      formControlName="phone"
                      class="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-accent-400 focus:border-accent-400 focus:bg-white/20 transition-all duration-300"
                      placeholder="+90 5XX XXX XX XX"
                    />
                  </div>

                  <div>
                    <label for="schoolName" class="block text-sm font-semibold text-white mb-2">
                      Okul Adı *
                    </label>
                    <input
                      type="text"
                      id="schoolName"
                      formControlName="schoolName"
                      class="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-accent-400 focus:border-accent-400 focus:bg-white/20 transition-all duration-300"
                      placeholder="Okulunuzun adı"
                      [class.border-red-400]="contactForm.get('schoolName')?.invalid && contactForm.get('schoolName')?.touched"
                    />
                  </div>

                  <div>
                    <label for="studentCount" class="block text-sm font-semibold text-white mb-2">
                      Öğrenci Sayısı
                    </label>
                    <input
                      type="number"
                      id="studentCount"
                      formControlName="studentCount"
                      class="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-accent-400 focus:border-accent-400 focus:bg-white/20 transition-all duration-300"
                      placeholder="Yaklaşık öğrenci sayısı"
                    />
                  </div>

                  <div>
                    <label for="message" class="block text-sm font-semibold text-white mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      formControlName="message"
                      rows="4"
                      class="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-accent-400 focus:border-accent-400 focus:bg-white/20 transition-all duration-300 resize-none"
                      placeholder="Özel ihtiyaçlarınız, sorularınız..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    [disabled]="contactForm.invalid || isSubmitting()"
                    class="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:shadow-lg"
                  >
                    @if (isSubmitting()) {
                      <span class="flex items-center justify-center">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Gönderiliyor...
                      </span>
                    } @else {
                      <span class="flex items-center justify-center">
                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        Demo Talep Et
                      </span>
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
                <div class="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8">
                  <h3 class="text-2xl font-bold text-white mb-6">İletişim Bilgileri</h3>
                  
                  <div class="space-y-6">
                    <div class="flex items-start">
                      <div class="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <svg class="w-6 h-6 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-semibold text-white mb-1">E-posta</h4>
                        <p class="text-white/80">info@okulpanel.com</p>
                      </div>
                    </div>

                    <div class="flex items-start">
                      <div class="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <svg class="w-6 h-6 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-semibold text-white mb-1">Telefon</h4>
                        <p class="text-white/80">+90 212 555 0123</p>
                      </div>
                    </div>

                    <div class="flex items-start">
                      <div class="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <svg class="w-6 h-6 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-semibold text-white mb-1">Adres</h4>
                        <p class="text-white/80">İstanbul, Türkiye</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8">
                  <h3 class="text-2xl font-bold text-white mb-6">Neden Okul Panel?</h3>
                  
                  <div class="space-y-4">
                    <div class="flex items-start">
                      <div class="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                      <p class="text-white/80">KVKV uyumlu güvenli sistem</p>
                    </div>
                    
                    <div class="flex items-start">
                      <div class="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                      <p class="text-white/80">7/24 teknik destek</p>
                    </div>
                    
                    <div class="flex items-start">
                      <div class="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                      <p class="text-white/80">Ücretsiz kurulum ve eğitim</p>
                    </div>
                  </div>
                </div>
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