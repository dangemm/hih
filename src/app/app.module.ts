import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoworkingSpacesComponent } from './coworking-spaces/coworking-spaces.component';
import { HomeComponent } from './home/home.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { StartupsComponent } from './startups/startups.component';
import { TechnologyHubComponent } from './technology-hub/technology-hub.component';
import { HumanCapacityDevelopmentComponent } from './human-capacity-development/human-capacity-development.component';
import { InternshipsJobPlacementsComponent } from './internships-job-placements/internships-job-placements.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoworkingSpacesComponent,
    HomeComponent,
    DemoPageComponent,
    StartupsComponent,
    TechnologyHubComponent,
    HumanCapacityDevelopmentComponent,
    InternshipsJobPlacementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
