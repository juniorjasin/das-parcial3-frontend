export class ReclamoModel {

    private _fechaHora: string;
    private _nroChasis: string;
    private _dominio: string;
    private _km: number;
    private _apellido: string;
    private _nombre: string;
    private _email: string;
    private _telefono: string;
    private _contactar: string;
    private _localidad: string;
    private _reclamo: string;

    set fechaHora(fechaHora: string) {
        this._fechaHora = fechaHora;
    }

    get fechaHora() {
        return this._fechaHora;
    }

    set nroChasis(nroChasis: string) {
        this._nroChasis = nroChasis;
    }

    get nroChasis() {
        return this._nroChasis;
    }

    set dominio(dominio: string) {
        this._dominio = dominio;
    }

    get dominio() {
        return this._dominio;
    }

    set km(km: number) {
        this._km = km;
    }

    get km() {
        return this._km;
    }

    set apellido(apellido: string) {
        this._apellido = apellido;
    }

    get apellido() {
        return this._apellido;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }

    set email(email: string) {
        this._email = email;
    }

    get email() {
        return this._email;
    }

    set telefono(telefono: string) {
        this._telefono = telefono;
    }

    get telefono() {
        return this._telefono;
    }

    set contactar(contactar: string) {
        this._contactar = contactar;
    }

    get contactar() {
        return this._contactar;
    }

    set localidad(localidad: string) {
        this._localidad = localidad;
    }

    get localidad() {
        return this._localidad;
    }

    set reclamo(reclamo: string) {
        this._reclamo = reclamo;
    }

    get reclamo() {
        return this._reclamo;
    }
}
