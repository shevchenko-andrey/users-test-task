import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
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
  handleSubmit(form: NgForm) {
    const { fullName, email, phone, address } = form.value;
    console.log(form);
    const payload = {
      fullName,
      email,
      phone,
      address,
    };

    this.userService.add(payload);
    form.onReset();
  }

  ngOnInit(): void {}
}
