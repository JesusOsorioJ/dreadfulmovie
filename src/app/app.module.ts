import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { FilterComponent } from './pages/filter/filter.component';

import { TargetComponent } from './components/target/target.component';
import { InputComponent } from './components/input/input.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconsComponent } from './components/icons/icons.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterComponent,
    TargetComponent,
    InputComponent,
    HeaderComponent,
    FooterComponent,
    IconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
