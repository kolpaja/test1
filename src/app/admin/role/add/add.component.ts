import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../../../../models/LoginUsers';

@Component({
  selector: 'app-admin-role-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public localUser: LoginUser;

  constructor() { 
    this.localUser = new LoginUser();
  }

  ngOnInit(): void {
    this.localUser.name = 'kolpaja'
  }

  onSave(){

  }
}
