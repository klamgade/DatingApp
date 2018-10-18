import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/_services/Auth.service';
import { AlertifyService } from 'src/_services/Alertify.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() valuesFromHome: any;
  @Output() cancelRegistration = new EventEmitter();

  model: any = {};

  constructor(private authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit() {
    console.log('values from home', this.valuesFromHome);
  }

  register() {
    this.authService.register(this.model).subscribe(next => {
      this.alertifyService.success('register successful');
    }, error => {
      this.alertifyService.error(error);
    });
  }

  cancel() {
    this.alertifyService.message('cancelled');
    this.cancelRegistration.emit(false);
  }
}
