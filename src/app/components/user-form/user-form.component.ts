import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user-service.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Input() type: 'add' | 'change' = 'add';
  @Output() submitEmiter = new EventEmitter<User>();
  fullName: string;
  email: string;
  phone: string;
  address: string;

  constructor(private userService: UserService) {
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.address = '';
  }
  async handleSubmit(form: NgForm) {
    const { fullName, email, phone, address } = form.value;
    const payload = {
      fullName,
      email,
      phone,
      address,
    };
    switch (this.type) {
      case 'add':
        this.userService.add(payload);
        break;

      case 'change':
        this.submitEmiter.emit(payload);
        break;
    }
    form.onReset();
  }

  ngOnInit(): void {}
}
