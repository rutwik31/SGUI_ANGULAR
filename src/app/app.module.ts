import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { CommonModule } from '@angular/common';

import { ItemService } from './item.service';
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Add HttpClientModule here
    CommonModule
  ],
  providers: [ItemService],
})
export class AppModule { }
