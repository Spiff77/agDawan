import { Component } from '@angular/core';
import {Client} from './model/Client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  client1 = new Client('Jeanclaude' , 'Dus', false, 20);
  client2 = new Client('Jeanclaude' , 'Dus', true, 200);
  aColor = 'black';
  age = 10;

  constructor() {
  }

}
