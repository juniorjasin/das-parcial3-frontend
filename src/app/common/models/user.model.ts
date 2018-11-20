export interface User {
    nombre: string;
    apellido: string;
    nroDocumento: string;
    nroPersona: number;
    tipoDocumento: string;
}

export class UserModel {

    private _nroPersona: number;
    private _nombre: string;
    private _apellido: string;
    private _tipoDocumento: string;
    private _nroDocumento: string;
    private _usuario: string;
    private _clave: string;

    constructor(user: User) {
        this._nroPersona = user.nroPersona;
        this._nombre = user.nombre;
        this._apellido = user.apellido;
        this._tipoDocumento = user.tipoDocumento;
        this._nroDocumento = user.nroDocumento;
    }

    set nroPersona(nroPersona: number){
        this._nroPersona = nroPersona;
    }

    get nroPersona(){
        return this._nroPersona;
    }

    set nombre(nombre: string){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set apellido(apellido: string){
        this._apellido = apellido;
    }

    get apellido(){
        return this._apellido;
    }

    set tipoDocumento(tipoDocumento: string){
        this._tipoDocumento = tipoDocumento;
    }

    get tipoDocumento(){
        return this._tipoDocumento;
    }

    set usuario(usuario: string){
        this._usuario = usuario;
    }

    get usuario(){
        return this._usuario;
    }

    set clave(clave: string){
        this._clave = clave;
    }

    get clave(){
        return this._clave;
    }

    set nroDocumento(nroDocumento: string){
        this._nroDocumento = nroDocumento;
    }

    get nroDocumento(){
        return this._nroDocumento;
    }
}
