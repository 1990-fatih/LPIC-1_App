import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartSeiteComponent } from './start-seite/start-seite.component';
import { FragenComponent } from './fragen/fragen.component';
import { HeaderComponent } from './header/header.component';
import { CheckMComponent } from './check-m/check-m.component';

@NgModule({
  declarations: [
    AppComponent,
    StartSeiteComponent,
    FragenComponent,
    HeaderComponent,
    CheckMComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
