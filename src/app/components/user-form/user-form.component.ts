import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  constructor() {
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.address = '';
  }
  handleSubmit() {
    console.log();
  }

  ngOnInit(): void {}
}
