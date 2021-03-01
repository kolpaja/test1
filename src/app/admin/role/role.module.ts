import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'admin/role/list', component: ListComponent},
  {path: 'admin/role/add', component: AddComponent}
]

@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RoleModule { }
