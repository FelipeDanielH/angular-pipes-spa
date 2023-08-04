import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Felipe'
  public gender: 'male' | 'female' = 'male'
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Fernanda'
    this.gender = 'female'
  }

  // i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Felipe',
    age: 36,
    addres: 'Santiago, Chile'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    // tap( value => console.log('tap', value) )
  )

  // Async Pipe con una promesa: cuando es una promesa el async pipe no se cancela (unsubscribe en caso de los observables)
  public promiseValue: Promise<string> = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      resolve('Tenemos data en la promesa.')
      console.log('Tenemos data en la promesa')
      this.person.name = 'Otro nombre'
    }, 3500);
  })

}
