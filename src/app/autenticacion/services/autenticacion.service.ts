import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private _http: HttpClient) { }

  login(usuario: string, clave: string) :Observable<User> {
    let header: HttpHeaders = new HttpHeaders();
    header.set('Content-Type', 'Application/json');

    return this._http.post<User>("http://localhost:8081/login",
      { "usuario": usuario, "clave": clave },
      { "headers": header });
  }


}