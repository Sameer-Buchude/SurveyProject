import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowallComponent } from './showall/showall.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import Swal from 'sweetalert2';
import { AddsurveyComponent } from './addsurvey/addsurvey.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowallComponent,
    AboutusComponent,
    AddsurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
