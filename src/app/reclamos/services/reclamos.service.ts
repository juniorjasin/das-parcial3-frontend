import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReclamoModel } from '../models/reclamo.model';

@Injectable({
  providedIn: 'root'
})
export class ReclamosService {

  constructor(private _http: HttpClient) { }

  obtenerReclamos() {
    return this._http.get<ReclamoModel[]>('http://localhost:8080/ReclamosService/rest/reclamos');
  }

  actualizarReclamo(reclamo){
  	console.log(reclamo);
    return this._http.put('http://localhost:8080/ReclamosService/rest/reclamos', reclamo);
  }

}
