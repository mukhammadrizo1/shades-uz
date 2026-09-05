import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../shared/translation.service';
import { PROCESS_STEPS, UI_TEXT } from '../../shared/data';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './process.html',
  styleUrl: './process.css',
})
export class ProcessComponent {
  ts = inject(TranslationService);
  readonly steps = PROCESS_STEPS;
  readonly ui = UI_TEXT;
}
