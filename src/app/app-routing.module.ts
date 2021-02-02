import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoworkingSpacesComponent } from './coworking-spaces/coworking-spaces.component'
import { HomeComponent } from './home/home.component'
import { DemoPageComponent } from './demo-page/demo-page.component'
import { StartupsComponent } from './startups/startups.component'
import { TechnologyHubComponent } from './technology-hub/technology-hub.component';
import { InternshipsJobPlacementsComponent } from './internships-job-placements/internships-job-placements.component';
import { HumanCapacityDevelopmentComponent } from './human-capacity-development/human-capacity-development.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'coworking-spaces', component: CoworkingSpacesComponent},
  {path: 'demo-page', component: DemoPageComponent},
  {path: 'startups', component: StartupsComponent},
  {path: 'technology-hub', component: TechnologyHubComponent},
  {path: 'internships-job-placements', component: InternshipsJobPlacementsComponent},
  {path: 'human-capacity-development', component: HumanCapacityDevelopmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
