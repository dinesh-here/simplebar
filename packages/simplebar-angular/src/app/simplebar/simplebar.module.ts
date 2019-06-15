import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplebarComponent } from './simplebar.component';

@NgModule({
  declarations: [SimplebarComponent],
  imports: [
    CommonModule
  ], exports: [SimplebarComponent]
})
export class SimplebarModule { }
