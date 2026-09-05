import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../shared/translation.service';
import { UI_TEXT, STATS, CONTACT_INFO } from '../../shared/data';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent {
  ts = inject(TranslationService);
  readonly ui = UI_TEXT;
  readonly stats = STATS;
  readonly contact = CONTACT_INFO;
}
