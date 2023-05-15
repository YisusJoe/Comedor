import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateSessionService {

  SESSION = {

    idu_proveedor: null,
    idu_usuario: null,
    idu_usuario_rol: null,
    nom_usuario: null,
    nom_rol: null,
    opciones: [],
    opcion: {}
  }

  getSession(res:any) {

    let data = JSON.parse(res)
    data = data.response;

    console.log(data);

    this.SESSION.idu_proveedor = data[0].idu_proveedor;
    this.SESSION.idu_usuario = data[0].idu_usuario;
    this.SESSION.idu_usuario_rol = data[0].idu_usuario_rol;
    this.SESSION.nom_rol = data[0].nom_rol;
    this.SESSION.nom_usuario = data[0].nom_usuario;

    this.SESSION.opcion = data[0].opcionesMenu;

    console.log(data[0].opcionesMenu);
  }

  constructor() { }
}
