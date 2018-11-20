import { Component, OnInit } from '@angular/core';
import { ReclamosService } from '../../services/reclamos.service';
import { ReclamoModel } from '../../models/reclamo.model';
import { Router } from '@angular/router';
import { UserModel } from '../../../common/models/user.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  private _reclamos: ReclamoModel[] = [];
  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'km',
    'nro_chasis',
    'dominio',
    'localidad',
    'telefono',
    'reclamo',
    'fecha_hora',
    'email',
    'contactar',
    'responder'];

  get reclamos(): ReclamoModel[] {
    return this._reclamos;
  }

  constructor(private _reclamosService: ReclamosService,
              private _router: Router) { }

  ngOnInit() {
    this._reclamosService.obtenerReclamos().subscribe(
      reclamos => this._reclamos = reclamos,
      error => { 
        console.log(error);
        throw new Error(JSON.stringify(error["error"]));
      }
    );
  }

  responder(nroReclamo: number): void {
    this._router.navigate(['/reclamos',nroReclamo,'formulario']);
  }

  respuesta_rapida(nroReclamo: number): void {
    // creo un usuario y un reclamo con let porque despues de usarlos en esta funcion no
    // los necesito en otro lugar
    let _usr: UserModel = JSON.parse(sessionStorage.getItem('user'));
    let reclamo : any = {
      "nroReclamo": nroReclamo,
      "respuesta": "NO REQUIERE RESPONDER",
      "respRespuesta": _usr["nroPersona"]
    };

    this._reclamosService.actualizarReclamo(reclamo).subscribe(
      ok => {
        // con reload recargo la pagina luego de actualizar
        // window.location.reload();
        let index = this._reclamos.findIndex(r => r.nroReclamo === nroReclamo);
        this._reclamos = [...this._reclamos.filter(r => r.nroReclamo !== nroReclamo)];
      },
      err => {
        console.log("Error al actualizar reclamo en lista.component --> " + err);
        throw new Error("Error al actualizar reclamo");
      }
    );
  }
}
