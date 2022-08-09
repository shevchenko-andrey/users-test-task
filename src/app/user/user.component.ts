import { Component, Input, OnInit } from '@angular/core';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user-service.service';
import { User } from '../models/user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [NgbNavConfig],
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user: User | null = null;
  public activeId = 'details';
  public isError: boolean = false;
  constructor(
    public config: NgbNavConfig,
    public router: Router,
    private activetedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    config.roles = false;
  }

  ngOnInit(): void {
    if (this.user) {
      return;
    }
    this.userService.getUserById(this.userId).subscribe((user) => {
      this.user = user;
    }, this.errorHendler.bind(this));
  }
  public async errorHendler() {
    this.isError = true;
    await this.router.navigateByUrl('');
  }
  public onSelectNo() {
    this.activeId = 'details';
  }
  public async onSelectYes() {
    await this.userService.delete(`${this.user?.id}`);
    this.router.navigateByUrl('');
  }
  public change(payload: User) {
    if (!this.user) {
      return;
    }

    this.userService.change(payload, `${this.user.id}`).subscribe((user) => {
      this.user = user;
      this.activeId = 'details';
    });
  }
  public get userId() {
    return this.activetedRoute.snapshot.params['id'];
  }
}
