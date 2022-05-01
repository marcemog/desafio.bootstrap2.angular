import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AboutusComponent } from './componentes/aboutus/aboutus.component';
import { PricingComponent } from './componentes/pricing/pricing.component';
import { TestimonialsComponent } from './componentes/testimonials/testimonials.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    PortfolioComponent,
    AboutusComponent,
    PricingComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
