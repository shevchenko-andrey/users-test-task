import { Component, Input, OnInit } from '@angular/core';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [NgbNavConfig],
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user = '';
  constructor(config: NgbNavConfig) {
    config.destroyOnHide = false;
    config.roles = false;
  }

  ngOnInit(): void {}
}
