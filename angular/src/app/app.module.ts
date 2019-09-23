import { BrowserModule }				from '@angular/platform-browser';
import { NgModule }						from '@angular/core';
import { HttpClientModule }    			from '@angular/common/http';
import { FormsModule }					from '@angular/forms';

import { AppRoutingModule }				from './app-routing.module';
import { AppComponent }					from './app.component';
import { PageMainComponent }			from './page-main/page-main.component';
import { PageSpellEffectsComponent }	from './page-spelleffects/page-spelleffects.component';

@NgModule({
  declarations: [
    AppComponent,
	PageMainComponent,
	PageSpellEffectsComponent
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
