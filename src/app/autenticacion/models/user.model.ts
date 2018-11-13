export interface User {

    // {"apellido":"APELLIDO1","nombre":"NOMBRE1","nroDocumento":"00000001","nroPersona":1,"tipoDocumento":"DNI"}

    nombre: string,
    apellido: string,
    nroDocumento: string,
    nroPersona: number,
    tipoDocumento: string,
    
}

export class UserModel {

    private _nro_persona: number;
    private _nombre: string;
    private _apellido: string;
    private _tipo_documento: string;
    private _nro_documento: string;
    private _usuario: string;
    private _clave: string;

    constructor(user: User) {
        this._nro_persona = user.nroPersona;
        this._nombre = user.nombre;
        this._apellido = user.apellido;
        this._tipo_documento = user.tipoDocumento;
        this._nro_documento = user.nroDocumento;
    }

    set nro_persona(nro_persona: number){
        this._nro_persona = nro_persona;
    }

    get nro_persona(){
        return this._nro_persona;
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

    set tipo_documento(tipo_documento: string){
        this._tipo_documento = tipo_documento;
    }
    
    get tipo_documento(){
        return this._tipo_documento;
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
    
    set nro_documento(nro_documento: string){
        this._nro_documento = nro_documento;
    }

    get nro_documento(){
        return this._nro_documento;
    }
}
