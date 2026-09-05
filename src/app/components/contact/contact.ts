import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../shared/translation.service';
import { CONTACT_INFO, UI_TEXT, SERVICES } from '../../shared/data';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  ts = inject(TranslationService);
  readonly contact = CONTACT_INFO;
  readonly ui = UI_TEXT;
  readonly services = SERVICES;

  name = signal('');
  phone = signal('');
  selectedService = signal('polygraphy');
  comment = signal('');

  submitted = signal(false);

  sendToTelegram(): void {
    const serviceObj = this.services.find(s => s.id === this.selectedService());
    const serviceName = serviceObj ? serviceObj.title[this.ts.currentLang()] : this.selectedService();
    
    const text = `Assalomu alaykum SHADES! Yangi buyurtma:\n` +
      `👤 Ism: ${this.name() || 'Mijoz'}\n` +
      `📞 Tel: ${this.phone() || 'Kiritilmadi'}\n` +
      `🖨 Xizmat: ${serviceName}\n` +
      (this.comment() ? `📝 Izoh: ${this.comment()}` : '');

    const url = `${this.contact.telegramUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
    this.submitted.set(true);
  }
}
