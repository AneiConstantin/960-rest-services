import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ip:string = "";

  constructor(private http: HttpClient){}

  click() {
    this.http.get("https://api.ipify.org/?format=json").subscribe(
      res => {
        this.ip = res["ip"];
      },
      err => {
        console.log(err);
      }
    );
  }
}
