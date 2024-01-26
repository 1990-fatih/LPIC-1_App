import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartSeiteComponent } from './start-seite/start-seite.component';
import { FragenComponent } from './fragen/fragen.component';

@NgModule({
  declarations: [
    AppComponent,
    StartSeiteComponent,
    FragenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
