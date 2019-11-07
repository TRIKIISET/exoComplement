import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonneComponent } from './partie1/personne/personne.component';
import { PersonneListComponent } from './partie1/personne-list/personne-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    PersonneListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
