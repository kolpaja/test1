import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginUser} from '../models/LoginUsers';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  public localUser: LoginUser;

  constructor() {
    this.localUser = new LoginUser();
    this.localUser.name = 'roland';
  }

  onSubmit(form: NgForm): void {
      console.log('Your form data : ', form.value );
  }

  ngOnInit(): void {
  }

  onSave(): void {
    console.log(this.localUser);
  }
}