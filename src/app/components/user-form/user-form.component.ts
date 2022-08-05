import { Component, OnInit, Input } from '@angular/core';
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
  @Input() readonly: boolean;
  constructor() {
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.address = '';
    this.readonly = false;
  }
  handleSubmit() {
    console.log();
  }

  ngOnInit(): void {}
}
