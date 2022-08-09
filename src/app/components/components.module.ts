import { NgModule } from '@angular/core';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
@NgModule({
  declarations: [
    UserFormComponent,
    ListItemComponent,
    UserListComponent,
    DetailsComponent,
  ],
  imports: [FormsModule, RouterModule, CommonModule],
  exports: [
    UserFormComponent,
    ListItemComponent,
    UserListComponent,
    DetailsComponent,
  ],
})
export class ComponentsModule {}
