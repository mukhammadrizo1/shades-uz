import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Lang = 'uz' | 'ru' | 'en';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private platformId = inject(PLATFORM_ID);
  
  // Default is UZ (Latin O'zbekcha)
  currentLang = signal<Lang>('uz');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('shades_lang') as Lang;
      if (saved && (saved === 'uz' || saved === 'ru' || saved === 'en')) {
        this.currentLang.set(saved);
      }
    }
  }

  setLang(lang: Lang) {
    this.currentLang.set(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('shades_lang', lang);
    }
  }
}
