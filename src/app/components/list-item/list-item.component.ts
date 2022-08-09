import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import {Router} from "@angular/router"
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() public user!: User;
  
  constructor(private router : Router) {}

  ngOnInit(): void { }
  public navigateTo() {
    this.router.navigateByUrl(`user/${this.user.id}`)
    
  }
}
