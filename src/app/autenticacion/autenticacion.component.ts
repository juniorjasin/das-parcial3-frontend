import { Component, OnInit } from '@angular/core';
import { UserModel } from './models/user.model'
import { AutenticacionService } from './services/autenticacion.service'

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.css']
})
export class AutenticacionComponent implements OnInit {

  private _user: any = {};


  constructor(private _service: AutenticacionService) { }

  ngOnInit() {
    console.log("ngOnInit AutenticacionComponent");
  }

  login(){
    console.log(JSON.stringify(this.user));
    this._service.login(this._user['usuario'],  this._user['clave']).subscribe(user => {
      console.log(user);
    },
    err => console.log(err));

  }

  get user(): UserModel {
    return this._user;
  }

  set user(user: UserModel) {
    this._user = user;
  }

}
