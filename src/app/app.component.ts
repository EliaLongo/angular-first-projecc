import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'culo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  conteggio: number = 99;
  inc() {
    this.conteggio++;
  }
}
