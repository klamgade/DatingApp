import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
     this.values = this.getValues();
  }

  toggleRegisterMode() {
    this.registerMode = !this.registerMode;
  }

  getValues() {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
     this.values = response;
   }, error => {
     console.log(error);
   });
 }
}