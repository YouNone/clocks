import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimeFormatPipe } from './time-format.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TimeFormatPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
