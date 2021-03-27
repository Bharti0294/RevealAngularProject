import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { Section1Component } from './section1/section1.component';
import { ServiceComponent } from './service/service.component';
import { ClientsectionComponent } from './clientsection/clientsection.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TeamsectionComponent } from './teamsection/teamsection.component';
import { ContactsectionComponent } from './contactsection/contactsection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    Section1Component,
    ServiceComponent,
    ClientsectionComponent,
    PortfolioComponent,
    TestimonialComponent,
    TeamsectionComponent,
    ContactsectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
