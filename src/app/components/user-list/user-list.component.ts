import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user-service.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public userList$: BehaviorSubject<User[]>;
  constructor(private userService: UserService) {
    this.userList$ = this.userService.entities$;
  }

  ngOnInit(): void {
    this.userService.getAll();
  }
}
