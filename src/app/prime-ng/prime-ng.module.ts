import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  exports: [
    MenubarModule,
    ButtonModule,
    BrowserAnimationsModule
  ]

})
export class PrimeNgModule { }
