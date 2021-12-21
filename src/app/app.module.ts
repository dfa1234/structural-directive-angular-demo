import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VarDirective } from './var.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, VarDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
