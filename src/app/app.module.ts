import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { Http } from '@angular/http';
import { ClarityModule } from "clarity-angular";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule 
  ],
  providers: [Http],
  bootstrap: [AppComponent]
})
export class AppModule { }
