import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { ServicesComponent } from './components/services/services';
import { PortfolioComponent } from './components/portfolio/portfolio';
import { ProcessComponent } from './components/process/process';
import { AdvantagesComponent } from './components/advantages/advantages';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { useRevealAnimation } from './shared/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    PortfolioComponent,
    ProcessComponent,
    AdvantagesComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor() {
    useRevealAnimation();
  }
}
