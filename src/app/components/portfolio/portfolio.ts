import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../shared/translation.service';
import { PORTFOLIO_ITEMS, UI_TEXT, CONTACT_INFO, PortfolioItem } from '../../shared/data';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class PortfolioComponent {
  ts = inject(TranslationService);
  readonly items: PortfolioItem[] = PORTFOLIO_ITEMS;
  readonly ui = UI_TEXT;
  readonly catalogUrl = CONTACT_INFO.catalogUrl;
}
