import { Component } from '@angular/core';
import { Color, Hero } from '../interfaces/hero.interface';

@Component({
  selector: 'producs-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false
  public orderBy?: keyof Hero
  public order: boolean = true

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    }
  ]

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
    console.log(this.heroes[0].color)
  }

  changeOrder(value: keyof Hero): void {
    this.orderBy === value
      ? this.order = !this.order
      : (this.orderBy = value, this.order = true)
  }

}
