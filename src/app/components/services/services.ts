import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../shared/translation.service';
import { SERVICES, UI_TEXT, CONTACT_INFO, ServiceItem } from '../../shared/data';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class ServicesComponent {
  ts = inject(TranslationService);
  readonly services = SERVICES;
  readonly ui = UI_TEXT;
  readonly contact = CONTACT_INFO;

  activeService = signal<ServiceItem | null>(null);

  openDetail(service: ServiceItem): void {
    this.activeService.set(service);
  }

  closeDetail(): void {
    this.activeService.set(null);
  }

  getOrderLink(service: ServiceItem): string {
    const title = service.title[this.ts.currentLang()];
    return `${this.contact.telegramUrl}?text=${encodeURIComponent(`Assalomu alaykum! Men "${title}" xizmati bo'yicha buyurtma bermoqchi edim.`)}`;
  }
}
