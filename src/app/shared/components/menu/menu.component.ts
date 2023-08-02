import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit{

  public items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
              label: 'New',
              icon: 'pi pi-fw pi-plus',
          },
          {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash'
          }
      ];
  }

}
