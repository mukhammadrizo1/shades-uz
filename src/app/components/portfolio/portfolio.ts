import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../shared/translation.service';
import { PORTFOLIO_ITEMS, UI_TEXT, CONTACT_INFO, PortfolioItem, LocalizedString } from '../../shared/data';
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

  private activeSlides = signal<Record<string, number>>({});
  private touchStartX = 0;

  // Lightbox Modal State
  lightboxOpen = signal(false);
  lightboxImages = signal<string[]>([]);
  lightboxIndex = signal(0);
  lightboxTitle = signal<LocalizedString | null>(null);

  isVideo(path: string): boolean {
    if (!path) return false;
    const p = path.toLowerCase();
    return p.endsWith('.mp4') || p.endsWith('.mov') || p.endsWith('.webm');
  }

  openLightbox(item: PortfolioItem, index: number, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.lightboxImages.set(item.images);
    this.lightboxIndex.set(index);
    this.lightboxTitle.set(item.title);
    this.lightboxOpen.set(true);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  lightboxNext(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    const imgs = this.lightboxImages();
    if (imgs.length <= 1) return;
    this.lightboxIndex.update(idx => (idx + 1) % imgs.length);
  }

  lightboxPrev(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    const imgs = this.lightboxImages();
    if (imgs.length <= 1) return;
    this.lightboxIndex.update(idx => (idx - 1 + imgs.length) % imgs.length);
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent): void {
    if (!this.lightboxOpen()) return;
    if (e.key === 'Escape') {
      this.closeLightbox();
    } else if (e.key === 'ArrowRight') {
      this.lightboxNext();
    } else if (e.key === 'ArrowLeft') {
      this.lightboxPrev();
    }
  }

  getIndex(id: string): number {
    return this.activeSlides()[id] || 0;
  }

  nextSlide(id: string, max: number, event?: Event): void {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    const curr = this.getIndex(id);
    const next = (curr + 1) % max;
    this.activeSlides.update(state => ({ ...state, [id]: next }));
  }

  prevSlide(id: string, max: number, event?: Event): void {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    const curr = this.getIndex(id);
    const prev = (curr - 1 + max) % max;
    this.activeSlides.update(state => ({ ...state, [id]: prev }));
  }

  setSlide(id: string, index: number, event?: Event): void {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.activeSlides.update(state => ({ ...state, [id]: index }));
  }

  onTouchStart(e: TouchEvent): void {
    this.touchStartX = e.changedTouches[0].screenX;
  }

  onTouchEnd(e: TouchEvent, id: string, max: number): void {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = this.touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        this.nextSlide(id, max);
      } else {
        this.prevSlide(id, max);
      }
    }
  }
}
