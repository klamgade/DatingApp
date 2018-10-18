import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/_services/Auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() valuesFromHome: any;
  @Output() cancelRegistration = new EventEmitter();

  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log('values from home', this.valuesFromHome);
  }

  register() {
    // tslint:disable-next-line:no-debugger
    debugger;
    console.log(this.model);
    this.authService.register(this.model).subscribe(next => {
      console.log('register successful');
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    // tslint:disable-next-line:no-debugger
    debugger;
    console.log('cancelled');
    this.cancelRegistration.emit(false);
  }
}
