import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  exports: [
    MenuModule,
    ButtonModule,
    BrowserAnimationsModule
  ]

})
export class PrimeNgModule { }
