import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamos',
  templateUrl: './reclamos.component.html',
  styleUrls: ['./reclamos.component.css']
})
export class ReclamosComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
    console.log('ngOnInit ReclamosComponent');

    // Volver al login en caso de entrar a la ruta directamente
    // y no existir un usuario logueado
    if (sessionStorage.getItem('user') === null) {
      this._router.navigate(['autenticacion']);
    }
  }

}
