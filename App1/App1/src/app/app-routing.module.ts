import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddsurveyComponent } from './addsurvey/addsurvey.component';
import { HomeComponent } from './home/home.component';
import { ShowallComponent } from './showall/showall.component';

const routes: Routes = [
  {
    path:"home",
  component:HomeComponent
  },
  {
    path:"showall",
  component:ShowallComponent
  },
  {
    path:"addsurvey",
  component:AddsurveyComponent
  },
  {
    path:"aboutus",
  component:AboutusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
