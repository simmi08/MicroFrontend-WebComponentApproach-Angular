import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ContainerApplication';
  name: string = "";
  flag = false;
  elementUrl = 'http://localhost:5001/main.js';
  onSubmit()
  {
    this.flag =true;
  }
}
