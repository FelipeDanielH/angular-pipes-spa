import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'felipe'
  public nameUpper: string = 'FELIPE'
  public fullName: string = 'FeLiPe HeNrIqUeZ'

  public customDate: Date = new Date();
}
