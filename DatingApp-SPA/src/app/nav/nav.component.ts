import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/_services/Auth.service';
import { AlertifyService } from 'src/_services/Alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  result: boolean;

  constructor(public authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertifyService.success('login successful');
    }, error => {
      this.alertifyService.error(error);
    });
  }

  loggedIn() {
    // tslint:disable-next-line:no-debugger
    debugger;
    // this.authService.loggedIn();
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.alertifyService.message('logged out');
  }
}
