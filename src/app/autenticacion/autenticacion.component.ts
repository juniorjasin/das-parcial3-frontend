import { Component, OnInit } from '@angular/core';
import { UserModel } from './models/user.model';
import { AutenticacionService } from './services/autenticacion.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.scss']
})
export class AutenticacionComponent implements OnInit {

  private _user: any = {};


  constructor(
    private _service: AutenticacionService,
    private _router: Router) { }

  ngOnInit() {
    console.log('ngOnInit AutenticacionComponent');

    this._user['usuario'] = 'napellido1';
    this._user['clave'] = '00000001';
  }

  login() {
    this._service
      .login(this._user['usuario'], this._user['clave'])
      .subscribe(user => {
        // Guardar usuario para obtenerlo en reclamos
        sessionStorage.setItem('user', JSON.stringify(user));

        // Redireccionar a reclamos
        this._router.navigate(['/reclamos']);
      },
      err => {
        // HANDLE ERROR
        console.log(err);
    });
  }

  get user(): UserModel {
    return this._user;
  }

  set user(user: UserModel) {
    this._user = user;
  }

}
