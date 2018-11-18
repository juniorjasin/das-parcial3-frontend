import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ReclamosService } from '../../services/reclamos.service';
import { UserModel } from 'src/app/autenticacion/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-reclamo',
  templateUrl: './formulario-reclamo.component.html',
  styleUrls: ['./formulario-reclamo.component.css']
})
export class FormularioReclamoComponent implements OnInit {

  constructor(private _activeRoute: ActivatedRoute,
    private _router: Router,
    private _reclamosService: ReclamosService) { }

  private _nro_reclamo: number;
  private _reclamo: any = {};
  private _user: UserModel;

  ngOnInit() {
    this._activeRoute.params.subscribe(params => {
      this._nro_reclamo = params["nro_reclamo"];
    });
  }

  responder(){

    if (this._reclamo.respuesta == undefined){
      throw new Error("Debe indicar una respuesta");
    }

    this._reclamo.nro_reclamo = +this._nro_reclamo;
    this._user = JSON.parse(sessionStorage.getItem('user'));
    this._reclamo.resp_respuesta = this._user['nroPersona'];
    
    this._reclamosService.actualizarReclamo(this.reclamo)
    .subscribe(
      response => {
        console.log('response:', response);
        this._router.navigate(['reclamos/lista']);
      },
      error => {
         console.log('error:', error);
         throw new Error(JSON.stringify(error["error"]));
      }
    );
  }

  get reclamo() {
    return this._reclamo;
  }

  set reclamo(reclamo) {
    this._reclamo = reclamo;
  }

}
