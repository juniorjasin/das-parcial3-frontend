import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ReclamosService } from '../../services/reclamos.service';

@Component({
  selector: 'app-formulario-reclamo',
  templateUrl: './formulario-reclamo.component.html',
  styleUrls: ['./formulario-reclamo.component.css']
})
export class FormularioReclamoComponent implements OnInit {

  constructor(private _activeRoute: ActivatedRoute,
    private _reclamosService: ReclamosService) { }

  private _nro_reclamo: number;
  private _reclamo: any = {};

  ngOnInit() {
    this._activeRoute.params.subscribe(params => {
      this._nro_reclamo = params["nro_reclamo"];
    });
  }

  responder(){
    this._reclamo.nro_reclamo = +this._nro_reclamo;
    console.log(this._reclamo);
    this._reclamosService.actualizarReclamo(this.reclamo)
    .subscribe(
      response => console.log('response:', response),
      err => console.log('error:',err)
    );
  }

  get reclamo() {
    return this._reclamo;
  }

  set reclamo(reclamo) {
    this._reclamo = reclamo;
  }

}
