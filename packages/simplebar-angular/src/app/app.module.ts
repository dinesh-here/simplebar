import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimplebarComponent } from './simplebar/simplebar.component';
import { SimplebarModule } from './simplebar/simplebar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SimplebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
