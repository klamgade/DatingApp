import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/Auth.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.authService.login(this.model).subscribe(next => {
      console.log('login successful');
    }, error => {
      console.log('login error');
    });
  }
}
