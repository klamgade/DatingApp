import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/_services/user.service';
import { User } from 'src/app/_models/User';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      // tslint:disable-next-line:no-debugger
    debugger;
      this.users = users;
      console.log('users', this.users);
    }, error => {
      console.log('error loadUsers', error);
    });
  }
}
