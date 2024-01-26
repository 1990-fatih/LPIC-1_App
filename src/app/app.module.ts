import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartSeiteComponent } from './start-seite/start-seite.component';
import { FragenComponent } from './fragen/fragen.component';
import { HeaderComponent } from './header/header.component';
import { CheckMComponent } from './check-m/check-m.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
