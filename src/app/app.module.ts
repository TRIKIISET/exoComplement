import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonneComponent } from './partie1/personne/personne.component';
import { PersonneListComponent } from './partie1/personne-list/personne-list.component';
import { Personne2Component } from './partie2/personne2/personne2.component';
import { Personne2ListComponent } from './partie2/personne2-list/personne2-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    PersonneListComponent,
    Personne2Component,
    Personne2ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
