import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../shared/translation.service';
import { ADVANTAGES, STATS, UI_TEXT } from '../../shared/data';
import { LogoComponent } from '../../shared/logo.component';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-advantages',
  standalone: true,
  imports: [CommonModule, LogoComponent, IconComponent],
  templateUrl: './advantages.html',
  styleUrl: './advantages.css',
})
export class AdvantagesComponent {
  ts = inject(TranslationService);
  readonly advantages = ADVANTAGES;
  readonly stats = STATS;
  readonly ui = UI_TEXT;
}
