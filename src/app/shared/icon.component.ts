import { Component, Input, inject, computed } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS } from './icons';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <span class="inline-icon" [innerHTML]="safeSvg()"></span>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
    }
    .inline-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    :host ::ng-deep svg {
      width: inherit;
      height: inherit;
      stroke: currentColor;
    }
  `]
})
export class IconComponent {
  private sanitizer = inject(DomSanitizer);
  
  @Input({ required: true }) name!: string;

  safeSvg = computed<SafeHtml>(() => {
    const raw = (ICONS as Record<string, string>)[this.name] || '';
    return this.sanitizer.bypassSecurityTrustHtml(raw);
  });
}
