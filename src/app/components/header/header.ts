import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Lang } from '../../shared/translation.service';
import { CONTACT_INFO, UI_TEXT } from '../../shared/data';
import { LogoComponent } from '../../shared/logo.component';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LogoComponent, IconComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  ts = inject(TranslationService);
  readonly contact = CONTACT_INFO;
  readonly ui = UI_TEXT;
  
  drawerOpen = signal(false);

  languages: { code: Lang; label: string }[] = [
    { code: 'uz', label: 'UZ' },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' }
  ];

  selectLang(lang: Lang): void {
    this.ts.setLang(lang);
  }

  toggleDrawer(): void {
    this.drawerOpen.update((v) => !v);
  }

  closeDrawer(): void {
    this.drawerOpen.set(false);
  }
}
