import { NgModule } from '@angular/core';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [UserFormComponent, ListItemComponent, UserListComponent],
  imports: [FormsModule, RouterModule, CommonModule],
  exports: [UserFormComponent, ListItemComponent, UserListComponent],
})
export class ComponentsModule {}
