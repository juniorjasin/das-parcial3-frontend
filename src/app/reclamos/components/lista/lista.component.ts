import { Component, OnInit } from '@angular/core';
import { ReclamosService } from '../../services/reclamos.service';
import { ReclamoModel } from '../../models/reclamo.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  _reclamos: ReclamoModel[] = [];

  get reclamos(): ReclamoModel[] {
    return this._reclamos;
  }

  constructor(private _reclamosService: ReclamosService) { }

  ngOnInit() {
    this._reclamosService.obtenerReclamos().subscribe(
      reclamos => this._reclamos = reclamos,
      error => console.log(error)
    );
  }

}
