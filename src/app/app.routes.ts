import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    data: { animation: 'home' }
  },
  {
    path: 'features',
    loadComponent: () =>
      import('./pages/features/features.component').then((m) => m.FeaturesPageComponent),
    data: { animation: 'features' }
  },
  {
    path: 'modules',
    loadComponent: () =>
      import('./pages/modules/modules.component').then((m) => m.ModulesPageComponent),
    data: { animation: 'modules' }
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pages/pricing/pricing.component').then((m) => m.PricingPageComponent),
    data: { animation: 'pricing' }
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutPageComponent),
    data: { animation: 'about' }
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactPageComponent),
    data: { animation: 'contact' }
  },
  // Legal pages
  {
    path: 'kvkk',
    loadComponent: () =>
      import('./pages/kvkv/kvkk.component').then((m) => m.KvkkComponent),
  },
  {
    path: 'cerez-politikasi',
    loadComponent: () =>
      import('./pages/cerez-politikasi/cerez-politikasi.component').then(
        (m) => m.CerezPolitikasiComponent
      ),
  },
  {
    path: 'sartlar',
    loadComponent: () =>
      import('./pages/sartlar/sartlar.component').then(
        (m) => m.SartlarComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
