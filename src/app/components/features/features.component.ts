import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { Feature } from '../../interfaces/content.interface';
import { fadeInAnimation, slideUpAnimation, staggerAnimation, scaleInAnimation } from '../../animations/page-animations';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, RouterModule],
  animations: [fadeInAnimation, slideUpAnimation, staggerAnimation, scaleInAnimation],
  template: `
    <section id="ozellikler" class="min-h-screen pt-0 pb-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 relative overflow-hidden">
      <!-- Decorative Background Elements -->
      <div class="absolute inset-0">
        <!-- Animated Gradient Orbs -->
        <div class="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        <!-- Grid Pattern -->
        <div class="absolute inset-0 opacity-5">
          <div class="w-full h-full" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0); background-size: 40px 40px;"></div>
        </div>
        
        <!-- Floating Particles -->
        <div class="absolute top-32 left-1/4 w-2 h-2 bg-accent-400 rounded-full animate-bounce delay-500"></div>
        <div class="absolute top-64 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-1000"></div>
        <div class="absolute bottom-32 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-1500"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16" [@fadeIn]>
          <!-- Back Button - Centered above title -->
          <div class="mb-6">
            <a routerLink="/" class="inline-block text-white/60 hover:text-white text-sm transition-colors duration-300 group">
              <span class="flex items-center justify-center">
                <svg class="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                Ana Sayfaya Dön
              </span>
            </a>
          </div>
          
          <!-- Enhanced Title with Glow Effect -->
          <div class="relative inline-block mb-6">
            <div class="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
            <h2 class="relative text-4xl lg:text-5xl font-bold text-white mb-4">
              Güçlü <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-blue-500 animate-pulse">Özellikler</span>
            </h2>
          </div>
          
          <!-- Decorative Elements around title -->
          <div class="relative flex items-center justify-center mb-8">
            <!-- Left decorative line -->
            <div class="flex-1 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent"></div>
            
            <!-- Center decorative element -->
            <div class="mx-6 flex items-center space-x-2">
              <div class="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
              <div class="w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-500"></div>
              <div class="w-2 h-2 bg-accent-500 rounded-full animate-pulse delay-1000"></div>
            </div>
            
            <!-- Right decorative line -->
            <div class="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
          </div>
          
          <!-- Platform Tabs - Clean Style -->
          <div class="flex justify-center mb-12">
            <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10 shadow-lg">
              <div class="flex space-x-2">
                <button 
                  (click)="setActivePlatform('mobile')"
                  [class]="activePlatform() === 'mobile' ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-xl transform scale-105' : 'text-white/70 hover:text-white hover:bg-white/10'"
                  class="px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center w-20 h-20 group"
                  title="Mobil - Öğretmen & Veli"
                >
                  <svg class="w-10 h-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
                    <path d="M11 4h2" />
                    <path d="M12 17v.01" />
                  </svg>
                </button>
                
                <button 
                  (click)="setActivePlatform('web')"
                  [class]="activePlatform() === 'web' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl transform scale-105' : 'text-white/70 hover:text-white hover:bg-white/10'"
                  class="px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center w-20 h-20 group"
                  title="Web - Müdür & Admin"
                >
                  <svg class="w-10 h-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" />
                    <path d="M7 20h10" />
                    <path d="M9 16v4" />
                    <path d="M15 16v4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Platform Features -->
        @if (activePlatform() === 'mobile') {
          <div [@slideUp]>
            <!-- Mobile Platform Description -->
            <div class="text-center mb-12">
              <div class="inline-flex items-center px-6 py-3 bg-accent-500/20 text-accent-300 rounded-full text-lg font-semibold mb-6">
                <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v12H7V4z"/>
                </svg>
                Mobil Platform
              </div>
              <h3 class="text-2xl lg:text-3xl font-bold text-white mb-4">
                Öğretmenler ve Veliler İçin
              </h3>
              <p class="text-lg text-white/80 max-w-3xl mx-auto mb-8">
                Günlük işlerinizi kolayca yönetin, çocuğunuzun durumunu anlık takip edin
              </p>

              <!-- Mobile Sub-Platform Info Cards -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
                <!-- Teacher Info Card -->
                <div>
                  <div class="bg-gradient-to-br from-green-500/10 to-green-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30 mb-6">
                    <div class="flex items-center mb-4">
                      <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                        <svg class="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-xl font-bold text-white">Öğretmen Paneli</h4>
                        <p class="text-green-300 text-sm">Günlük işlerinizi yönetin</p>
                      </div>
                    </div>
                    <p class="text-white/80 text-sm">
                      Yoklama alma, not verme, veli iletişimi ve ders takibi
                    </p>
                  </div>
                  
                  <!-- Teacher Features -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    @for (feature of teacherMobileFeatures(); track feature.id) {
                      <div class="group">
                        <div class="bg-gradient-to-br from-green-500/10 via-green-600/5 to-green-500/10 backdrop-blur-sm rounded-2xl p-6 h-full hover:from-green-500/20 hover:via-green-600/10 hover:to-green-500/20 transition-all duration-500 border border-green-500/20 hover:border-green-400/40 text-left relative overflow-hidden hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-1 group">
                          <!-- Animated Background Pattern -->
                          <div class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                            <div class="w-full h-full" style="background-image: radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.3) 1px, transparent 0); background-size: 20px 20px;"></div>
                          </div>
                          
                          <!-- Floating Glow Effect -->
                          <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div class="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-green-300/20 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <!-- Decorative Background -->
                          <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/10 to-transparent rounded-full blur-xl"></div>
                          <div class="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-green-300/10 to-transparent rounded-full blur-lg"></div>
                          
                          <!-- Icon -->
                          <div class="mb-4 flex items-start">
                            <div class="w-12 h-12 bg-gradient-to-br from-green-500/30 to-green-600/40 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              @switch (feature.icon) {
                                @case ('clipboard-check') {
                                  <svg class="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M13 15h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" />
                                    <path d="M7 9v2a1 1 0 0 0 1 1h1" />
                                    <path d="M10 9v6" />
                                    <path d="M7.5 4.2v.01" />
                                    <path d="M4.2 7.5v.01" />
                                    <path d="M3 12a9 9 0 1 0 9 -9" />
                                  </svg>
                                }
                                @case ('calendar-days') {
                                  <svg class="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                                    <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                                    <path d="M3 6l0 13" />
                                    <path d="M12 6l0 13" />
                                    <path d="M21 6l0 13" />
                                  </svg>
                                }
                                @case ('message-square') {
                                  <svg class="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                  </svg>
                                }
                                @case ('file-text') {
                                  <svg class="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M4 8h1v8" />
                                    <path d="M9 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0" />
                                    <path d="M16 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0" />
                                  </svg>
                                }
                                @case ('settings-pin') {
                                  <svg class="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12.578 20.905c-.88 .299 -1.983 -.109 -2.253 -1.222a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c.574 .14 .96 .5 1.16 .937" />
                                    <path d="M14.99 12.256a3 3 0 1 0 -2.33 2.671" />
                                    <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
                                    <path d="M19 18v.01" />
                                  </svg>
                                }
                                @case ('star') {
                                  <svg class="w-6 h-6 text-green-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                  </svg>
                                }
                                @case ('target') {
                                  <svg class="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                  </svg>
                                }
                                @case ('inbox') {
                                  <svg class="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                                  </svg>
                                }
                              }
                            </div>
                            <div class="flex-1">
                              <h5 class="text-white font-bold text-lg mb-2 group-hover:text-green-300 transition-colors duration-300">
                                {{ feature.title }}
                              </h5>
                              <p class="text-white/80 text-sm leading-relaxed">
                                {{ feature.description }}
                              </p>
                            </div>
                          </div>

                          <!-- Hover Glow Effect -->
                          <div class="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-400/0 to-green-500/0 group-hover:from-green-500/5 group-hover:via-green-400/10 group-hover:to-green-500/5 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                        </div>
                      </div>
                    }
                  </div>
                </div>

                <!-- Parent Info Card -->
                <div>
                  <div class="bg-gradient-to-br from-pink-500/10 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/30 mb-6">
                    <div class="flex items-center mb-4">
                      <div class="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mr-4">
                        <svg class="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-xl font-bold text-white">Veli Paneli</h4>
                        <p class="text-pink-300 text-sm">Çocuğunuzu takip edin</p>
                      </div>
                    </div>
                    <p class="text-white/80 text-sm">
                      Notları görme, devamsızlık takibi ve öğretmen iletişimi
                    </p>
                  </div>
                  
                  <!-- Parent Features -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    @for (feature of parentMobileFeatures(); track feature.id) {
                      <div class="group">
                        <div class="bg-gradient-to-br from-pink-500/20 via-pink-600/15 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 h-full hover:from-pink-500/30 hover:via-pink-600/20 hover:to-pink-500/30 transition-all duration-500 border border-pink-500/30 hover:border-pink-400/50 text-left relative overflow-hidden hover:shadow-2xl hover:shadow-pink-500/25 hover:-translate-y-1 group">
                          <!-- Animated Background Pattern -->
                          <div class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                            <div class="w-full h-full" style="background-image: radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.3) 1px, transparent 0); background-size: 20px 20px;"></div>
                          </div>
                          
                          <!-- Floating Glow Effect -->
                          <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div class="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-300/20 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <!-- Decorative Background -->
                          <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-transparent rounded-full blur-xl"></div>
                          <div class="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-300/20 to-transparent rounded-full blur-lg"></div>
                          
                          <!-- Icon -->
                          <div class="mb-4 flex items-start">
                            <div class="w-12 h-12 bg-gradient-to-br from-pink-500/30 to-pink-600/40 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              @switch (feature.icon) {
                                @case ('book-open') {
                                  <svg class="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
                                    <path d="M13 8l2 0" />
                                    <path d="M13 12l2 0" />
                                  </svg>
                                }
                                @case ('calendar-x') {
                                  <svg class="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                  </svg>
                                }
                                @case ('message-circle') {
                                  <svg class="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                  </svg>
                                }
                                @case ('file-text') {
                                  <svg class="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                  </svg>
                                }
                                @case ('star') {
                                  <svg class="w-6 h-6 text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                  </svg>
                                }
                                @case ('bell') {
                                  <svg class="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M15 17h-11a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v1.5" />
                                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                    <path d="M19 16v3" />
                                    <path d="M19 22v.01" />
                                  </svg>
                                }
                                @case ('clock') {
                                  <svg class="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                  </svg>
                                }
                                @case ('users') {
                                  <svg class="w-6 h-6 text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-1.1.9-2 2-2s2 .9 2 2V18h2v-4h3v4h1v2H3v-2h1z"/>
                                  </svg>
                                }
                              }
                            </div>
                            <div class="flex-1">
                              <h5 class="text-white font-bold text-lg mb-2 group-hover:text-pink-300 transition-colors duration-300">
                                {{ feature.title }}
                              </h5>
                              <p class="text-white/80 text-sm leading-relaxed">
                                {{ feature.description }}
                              </p>
                            </div>
                          </div>

                          <!-- Hover Glow Effect -->
                          <div class="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-400/0 to-pink-500/0 group-hover:from-pink-500/5 group-hover:via-pink-400/10 group-hover:to-pink-500/5 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>

          </div>
        }

        <!-- Web Platform Features -->
        @if (activePlatform() === 'web') {
          <div [@slideUp]>
            <!-- Web Platform Description -->
            <div class="text-center mb-12">
              <div class="inline-flex items-center px-6 py-3 bg-blue-500/20 text-blue-300 rounded-full text-lg font-semibold mb-6">
                <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                Web Platform
              </div>
              <h3 class="text-2xl lg:text-3xl font-bold text-white mb-4">
                Müdürler ve Yöneticiler İçin
              </h3>
              <p class="text-lg text-white/80 max-w-3xl mx-auto mb-8">
                Kapsamlı yönetim araçları ile okulunuzu dijitalleştirin
              </p>

              <!-- Web Platform Stats -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
                <div class="bg-gradient-to-br from-blue-500/10 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 text-center border border-blue-500/30">
                  <div class="text-2xl font-bold text-blue-400 mb-1">50+</div>
                  <div class="text-sm text-blue-300">Modül</div>
                </div>
                <div class="bg-gradient-to-br from-green-500/10 to-green-600/20 backdrop-blur-sm rounded-xl p-4 text-center border border-green-500/30">
                  <div class="text-2xl font-bold text-green-400 mb-1">100+</div>
                  <div class="text-sm text-green-300">Rapor</div>
                </div>
                <div class="bg-gradient-to-br from-purple-500/10 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 text-center border border-purple-500/30">
                  <div class="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                  <div class="text-sm text-purple-300">Destek</div>
                </div>
                <div class="bg-gradient-to-br from-orange-500/10 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 text-center border border-orange-500/30">
                  <div class="text-2xl font-bold text-orange-400 mb-1">∞</div>
                  <div class="text-sm text-orange-300">Ölçek</div>
                </div>
              </div>
            </div>

            <!-- Web Features Grid - Enhanced -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" [@stagger]>
              @for (feature of webFeatures(); track feature.id) {
            <div class="group">
                  <div class="card p-6 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/20 bg-white/10 backdrop-blur-sm relative overflow-hidden text-center group">
                    <!-- Animated Background Pattern -->
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                      <div class="w-full h-full" style="background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0); background-size: 15px 15px;"></div>
                    </div>
                    
                    <!-- Floating Glow Effect -->
                    <div class="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <!-- Premium Badge for Advanced Features -->
                    @if (feature.isAdvanced) {
                      <div class="absolute top-3 right-3">
                        <div class="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                          PRO
                        </div>
                      </div>
                    }

                <!-- Icon -->
                    <div class="mb-4 flex justify-center">
                  <div 
                        class="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    [class]="getIconClasses(feature.color)"
                  >
                    @switch (feature.icon) {
                      @case ('users') {
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-1.1.9-2 2-2s2 .9 2 2V18h2v-4h3v4h1v2H3v-2h1z"/>
                        </svg>
                      }
                      @case ('clipboard-list') {
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                        </svg>
                      }
                      @case ('calendar-check') {
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-4-4 1.41-1.41L12 14.17l6.59-6.59L20 9l-8 8z"/>
                        </svg>
                      }
                      @case ('heart') {
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                      }
                      @case ('message-circle') {
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                        </svg>
                      }
                      @case ('bar-chart-3') {
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                        </svg>
                      }
                          @case ('settings') {
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      }
                      @case ('link') {
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                        </svg>
                      }
                          @case ('shield') {
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                            </svg>
                          }
                          @case ('database') {
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
                            </svg>
                          }
                          @case ('cloud') {
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
                            </svg>
                          }
                          @case ('trending-up') {
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                            </svg>
                          }
                          @case ('lock') {
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                            </svg>
                          }
                          @case ('zap') {
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                          }
                    }
                  </div>
                </div>

                <!-- Content -->
                <div>
                      <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-accent-400 transition-colors duration-300">
                    {{ feature.title }}
                  </h3>
                      <p class="text-white/80 leading-relaxed text-sm mb-3">
                    {{ feature.description }}
                  </p>
                      
                      <!-- Feature Tags -->
                      @if (feature.tags && feature.tags.length > 0) {
                        <div class="flex flex-wrap gap-1">
                          @for (tag of feature.tags; track tag) {
                            <span class="text-xs bg-white/10 text-white/70 px-2 py-1 rounded-full">
                              {{ tag }}
                            </span>
                          }
                        </div>
                      }
                </div>

                <!-- Hover Effect -->
                <div class="absolute inset-0 border-2 border-transparent group-hover:border-accent-200 rounded-xl transition-all duration-300 pointer-events-none"></div>
              </div>
            </div>
          }
        </div>

            <!-- Web Platform CTA -->
            <div class="text-center mt-12">
              <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
                <h4 class="text-2xl font-bold text-white mb-4">
                  Kurumsal Düzeyde Okul Yönetimi
                </h4>
                <p class="text-white/80 mb-6">
                  Web platformu ile okulunuzun tüm süreçlerini dijitalleştirin. 
                  Gelişmiş raporlama, kapsamlı analizler ve kurumsal çözümler.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <button class="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                    Web Demo İzle
                  </button>
                  <button class="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                    Detaylı Bilgi Al
                  </button>
                </div>
              </div>
            </div>
          </div>
        }

        <!-- Call to Action -->
        <div class="text-center mt-16" [@fadeIn]>
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 max-w-3xl mx-auto">
            <h3 class="text-2xl font-bold text-white mb-4">
              Tüm Özellikleri Deneyimleyin
            </h3>
            <p class="text-white/80 mb-6">
              30 gün ücretsiz deneme sürümü ile tüm özelliklerimizi test edin. 
              Kredi kartı bilgisi gerekmez.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                class="btn-primary px-8 py-3"
                (click)="startTrial()"
              >
                Ücretsiz Denemeyi Başlat
              </button>
              <button 
                class="btn-secondary px-8 py-3"
                (click)="viewDemo()"
              >
                Canlı Demo İzle
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    .card {
      position: relative;
      overflow: hidden;
    }
    
    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 214, 10, 0.1), transparent);
      transition: left 0.5s;
    }
    
    .card:hover::before {
      left: 100%;
    }
  `],
})
export class FeaturesComponent implements OnInit {
  private contentService = inject(ContentService);
  
  features = signal<Feature[]>([]);
  activePlatform = signal<'mobile' | 'web'>('mobile');

  ngOnInit() {
    this.features.set(this.contentService.getFeatures());
  }

  setActivePlatform(platform: 'mobile' | 'web') {
    this.activePlatform.set(platform);
  }


  teacherMobileFeatures(): Feature[] {
    return [
      {
        id: 'teacher-attendance',
        title: 'Yoklama Alma',
        description: 'Mobil ile kolayca yoklama alın, devamsızlık durumunu anlık takip edin.',
        icon: 'clipboard-check',
        color: 'green',
      },
      {
        id: 'daily-schedule',
        title: 'Günlük Ders Takibi',
        description: 'Ders programınızı takip edin, ders durumlarını güncelleyin.',
        icon: 'calendar-days',
        color: 'blue',
      },
      {
        id: 'parent-messaging',
        title: 'Veli Mesajlaşması',
        description: 'Veliler ile güvenli mesajlaşma, önemli duyuruları anlık iletin.',
        icon: 'message-square',
        color: 'purple',
      },
      {
        id: 'inbox',
        title: 'Gelen Kutusu',
        description: 'Tüm bildirimler, mesajlar ve duyurular tek merkezde.',
        icon: 'inbox',
        color: 'orange',
      },
      {
        id: 'exam-management',
        title: 'Sınav Yönetimi',
        description: 'Sınav ekleme, düzenleme ve puan verme işlemleri.',
        icon: 'settings-pin',
        color: 'red',
      },
      {
        id: 'homework-grading',
        title: 'Ödev Puanlama',
        description: 'Ödevlere puan verme ve geri bildirim yazma.',
        icon: 'star',
        color: 'yellow',
      },
      {
        id: 'learning-outcomes',
        title: 'Kazanım Seçimi',
        description: 'Ders kazanımlarını seçme ve gelişim takibi.',
        icon: 'target',
        color: 'teal',
      },
      {
        id: 'grade-entry',
        title: 'Not Girişi',
        description: 'Sınav ve ödev notlarını hızlıca girin.',
        icon: 'file-text',
        color: 'indigo',
      },
    ];
  }

  parentMobileFeatures(): Feature[] {
    return [
      {
        id: 'view-grades',
        title: 'Notları Görüntüle',
        description: 'Çocuğunuzun tüm notlarını, sınav ve ödev puanlarını görün.',
        icon: 'book-open',
        color: 'blue',
      },
      {
        id: 'attendance-track',
        title: 'Devamsızlık Takibi',
        description: 'Çocuğunuzun devam durumunu günlük olarak takip edin.',
        icon: 'calendar-x',
        color: 'orange',
      },
      {
        id: 'teacher-communication',
        title: 'Öğretmen İletişimi',
        description: 'Öğretmenler ile doğrudan mesajlaşma ve iletişim.',
        icon: 'message-circle',
        color: 'purple',
      },
      {
        id: 'homework-view',
        title: 'Ödev Takibi',
        description: 'Verilen ödevleri görün, teslim durumlarını takip edin.',
        icon: 'file-text',
        color: 'green',
      },
      {
        id: 'exam-results',
        title: 'Sınav Sonuçları',
        description: 'Sınav sonuçlarını anlık olarak görüntüleyin.',
        icon: 'star',
        color: 'yellow',
      },
      {
        id: 'notifications',
        title: 'Bildirimler',
        description: 'Önemli duyurular ve bildirimleri anlık alın.',
        icon: 'bell',
        color: 'red',
      },
      {
        id: 'schedule-view',
        title: 'Ders Programı',
        description: 'Çocuğunuzun ders programını görüntüleyin.',
        icon: 'clock',
        color: 'teal',
      },
      {
        id: 'progress-tracking',
        title: 'Gelişim Takibi',
        description: 'Çocuğunuzun akademik gelişimini takip edin.',
        icon: 'users',
        color: 'indigo',
      },
    ];
  }


  webFeatures(): Feature[] {
    return [
      {
        id: 'comprehensive-management',
        title: 'Kapsamlı Okul Yönetimi',
        description: 'Tüm okul süreçlerini tek merkezden yönetin, detaylı kontrol sağlayın.',
        icon: 'users',
        color: 'blue',
        isAdvanced: false,
        tags: ['Temel', 'Yönetim']
      },
      {
        id: 'advanced-reporting',
        title: 'Gelişmiş Raporlama',
        description: '100+ rapor türü, performans analizleri ve görselleştirmeler.',
        icon: 'bar-chart-3',
        color: 'indigo',
        isAdvanced: true,
        tags: ['Pro', 'Analiz']
      },
      {
        id: 'attendance-reports',
        title: 'Devamsızlık Raporları',
        description: 'Kapsamlı devamsızlık analizleri, trend raporları ve uyarı sistemleri.',
        icon: 'calendar-check',
        color: 'orange',
        isAdvanced: false,
        tags: ['Takip', 'Rapor']
      },
      {
        id: 'parent-communication',
        title: 'Veli İletişim Merkezi',
        description: 'Toplu mesajlaşma, duyuru yönetimi ve veli etkileşim takibi.',
        icon: 'message-circle',
        color: 'purple',
        isAdvanced: false,
        tags: ['İletişim', 'Toplu']
      },
      {
        id: 'grade-management',
        title: 'Not Yönetim Sistemi',
        description: 'Kapsamlı not sistemi, sınav yönetimi ve akademik performans takibi.',
        icon: 'clipboard-list',
        color: 'green',
        isAdvanced: false,
        tags: ['Not', 'Sınav']
      },
      {
        id: 'student-welfare',
        title: 'Öğrenci Refahı',
        description: 'Öğrenci gelişim takibi, rehberlik süreçleri ve sosyal etkinlik yönetimi.',
        icon: 'heart',
        color: 'red',
        isAdvanced: false,
        tags: ['Gelişim', 'Rehberlik']
      },
      {
        id: 'system-settings',
        title: 'Sistem Yönetimi',
        description: 'Kullanıcı yetkilendirme, sistem ayarları ve güvenlik yönetimi.',
        icon: 'settings',
        color: 'gray',
        isAdvanced: true,
        tags: ['Admin', 'Güvenlik']
      },
      {
        id: 'integration-support',
        title: 'Entegrasyon Desteği',
        description: 'Mevcut sistemlerle entegrasyon, veri aktarımı ve API yönetimi.',
        icon: 'link',
        color: 'cyan',
        isAdvanced: true,
        tags: ['API', 'Entegrasyon']
      },
      {
        id: 'data-analytics',
        title: 'Veri Analitiği',
        description: 'Big data analizi, makine öğrenmesi ve tahmin modelleri.',
        icon: 'trending-up',
        color: 'purple',
        isAdvanced: true,
        tags: ['AI', 'Analiz']
      },
      {
        id: 'cloud-backup',
        title: 'Bulut Yedekleme',
        description: 'Otomatik veri yedekleme, felaket kurtarma ve veri güvenliği.',
        icon: 'cloud',
        color: 'blue',
        isAdvanced: true,
        tags: ['Bulut', 'Güvenlik']
      },
      {
        id: 'database-management',
        title: 'Veritabanı Yönetimi',
        description: 'Gelişmiş veritabanı yönetimi, performans optimizasyonu.',
        icon: 'database',
        color: 'green',
        isAdvanced: true,
        tags: ['Veritabanı', 'Optimizasyon']
      },
      {
        id: 'security-center',
        title: 'Güvenlik Merkezi',
        description: 'KVKK uyumluluğu, veri şifreleme ve güvenlik protokolleri.',
        icon: 'shield',
        color: 'red',
        isAdvanced: true,
        tags: ['KVKK', 'Güvenlik']
      },
      {
        id: 'performance-monitoring',
        title: 'Performans İzleme',
        description: 'Sistem performansı, kullanıcı aktiviteleri ve optimizasyon.',
        icon: 'zap',
        color: 'yellow',
        isAdvanced: true,
        tags: ['Performans', 'İzleme']
      },
      {
        id: 'multi-school-management',
        title: 'Çoklu Okul Yönetimi',
        description: 'Birden fazla okulu tek panelden yönetin, merkezi kontrol.',
        icon: 'users',
        color: 'indigo',
        isAdvanced: true,
        tags: ['Çoklu', 'Merkezi']
      },
      {
        id: 'financial-management',
        title: 'Mali Yönetim',
        description: 'Okul bütçesi, ödeme takibi ve mali raporlama sistemi.',
        icon: 'bar-chart-3',
        color: 'green',
        isAdvanced: true,
        tags: ['Mali', 'Bütçe']
      },
      {
        id: 'hr-management',
        title: 'İnsan Kaynakları',
        description: 'Personel yönetimi, maaş hesaplama ve performans değerlendirme.',
        icon: 'users',
        color: 'purple',
        isAdvanced: true,
        tags: ['İK', 'Personel']
      },
      {
        id: 'inventory-management',
        title: 'Envanter Yönetimi',
        description: 'Okul malzemeleri, demirbaş takibi ve stok yönetimi.',
        icon: 'clipboard-list',
        color: 'orange',
        isAdvanced: false,
        tags: ['Envanter', 'Stok']
      },
      {
        id: 'event-management',
        title: 'Etkinlik Yönetimi',
        description: 'Okul etkinlikleri, toplantı planlama ve organizasyon.',
        icon: 'calendar-check',
        color: 'pink',
        isAdvanced: false,
        tags: ['Etkinlik', 'Planlama']
      },
      {
        id: 'document-management',
        title: 'Doküman Yönetimi',
        description: 'Dijital arşiv, belge yönetimi ve e-imza entegrasyonu.',
        icon: 'file-text',
        color: 'gray',
        isAdvanced: false,
        tags: ['Doküman', 'Arşiv']
      },
      {
        id: 'api-management',
        title: 'API Yönetimi',
        description: 'RESTful API, webhook entegrasyonu ve üçüncü parti bağlantılar.',
        icon: 'link',
        color: 'cyan',
        isAdvanced: true,
        tags: ['API', 'Entegrasyon']
      }
    ];
  }

  getIconClasses(color?: string): string {
    const baseClasses = 'bg-gradient-to-br shadow-lg';
    
    switch (color) {
      case 'blue':
        return `${baseClasses} from-blue-500 to-blue-600`;
      case 'green':
        return `${baseClasses} from-green-500 to-green-600`;
      case 'orange':
        return `${baseClasses} from-orange-500 to-orange-600`;
      case 'red':
        return `${baseClasses} from-red-500 to-red-600`;
      case 'purple':
        return `${baseClasses} from-purple-500 to-purple-600`;
      case 'indigo':
        return `${baseClasses} from-indigo-500 to-indigo-600`;
      case 'teal':
        return `${baseClasses} from-teal-500 to-teal-600`;
      case 'cyan':
        return `${baseClasses} from-cyan-500 to-cyan-600`;
      default:
        return `${baseClasses} from-primary-500 to-primary-600`;
    }
  }

  startTrial() {
    // Navigate to contact form
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

  viewDemo() {
    // Open demo video or navigate to demo section
    window.open('https://www.youtube.com/watch?v=demo', '_blank');
  }
}
