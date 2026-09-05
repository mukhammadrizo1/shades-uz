import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslationService } from '../../shared/translation.service';
import { CONTACT_INFO, UI_TEXT } from '../../shared/data';
import { LogoComponent } from '../../shared/logo.component';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LogoComponent, IconComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  ts = inject(TranslationService);
  private sanitizer = inject(DomSanitizer);
  readonly contact = CONTACT_INFO;
  readonly ui = UI_TEXT;
  readonly year = new Date().getFullYear();

  readonly mapEmbedSafeUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    CONTACT_INFO.mapEmbedUrl
  );
}
