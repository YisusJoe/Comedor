import { Component } from '@angular/core';
import { DBService } from '../db.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  snMenu:boolean;
  SubMenu:boolean;
  empleado;
  datosStorage;

  ata:object = {
    "response":[
      {"idu_proveedor":"30","idu_usuario":"54","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"VERDE ALIMENTOS SA DE CV","idu_modulo":"1","nom_modulo":"Catálogos","nom_imagen":"documento.png","idu_menu_opcion":"1","nom_opcion":"Comedores","nom_state":"/catalogos/Comedores","nom_file":"Comedores","nom_dir":"catalogos/","nom_imagen_opcion":"restaurante.png"},
      {"idu_proveedor":"30","idu_usuario":"54","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"VERDE ALIMENTOS SA DE CV","idu_modulo":"1","nom_modulo":"Catálogos","nom_imagen":"documento.png","idu_menu_opcion":"2","nom_opcion":"Alimentos","nom_state":"/catalogos/Alimentos","nom_file":"Alimentos","nom_dir":"catalogos/","nom_imagen_opcion":"bolsa-termica.png"},
      {"idu_proveedor":"30","idu_usuario":"54","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"VERDE ALIMENTOS SA DE CV","idu_modulo":"1","nom_modulo":"Catálogos","nom_imagen":"documento.png","idu_menu_opcion":"3","nom_opcion":"Proveedores","nom_state":"/catalogos/proveedores","nom_file":"proveedores","nom_dir":"catalogos/","nom_imagen_opcion":"camion.png"},
      {"idu_proveedor":"30","idu_usuario":"54","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"VERDE ALIMENTOS SA DE CV","idu_modulo":"1","nom_modulo":"Catálogos","nom_imagen":"documento.png","idu_menu_opcion":"5","nom_opcion":"Usuarios","nom_state":"/catalogos/Usuarios","nom_file":"Usuarios","nom_dir":"catalogos/","nom_imagen_opcion":"usuarios.png"},{"idu_proveedor":"30","idu_usuario":"54","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"VERDE ALIMENTOS SA DE CV","idu_modulo":"2","nom_modulo":"Configuración","nom_imagen":"configuracion.png","idu_menu_opcion":"6","nom_opcion":"Perfiles","nom_state":"/configuracion/Perfiles","nom_file":"Perfiles","nom_dir":"configuracion/","nom_imagen_opcion":"perfiles.png"},{"idu_proveedor":"30","idu_usuario":"54","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"VERDE ALIMENTOS SA DE CV","idu_modulo":"3","nom_modulo":"Operación","nom_imagen":"cajero.png","idu_menu_opcion":"4","nom_opcion":"Punto de Venta","nom_state":"/operacion/puntoVenta","nom_file":"puntoVenta","nom_dir":"operacion/","nom_imagen_opcion":"caja-registradora.png"},{"idu_proveedor":"30","idu_usuario":"54","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"VERDE ALIMENTOS SA DE CV","idu_modulo":"4","nom_modulo":"Reportes","nom_imagen":"reportes.png","idu_menu_opcion":"7","nom_opcion":"Reporte de Consumo Diario","nom_state":"/reportes/reporteConsumoComedor","nom_file":"reporteConsumoComedor","nom_dir":"reportes/","nom_imagen_opcion":"reporteConsumo.png"}]}

  

  constructor(private data:DBService) {
    
    let datosCrudo = data.obtenerData()
    this.datosStorage = JSON.parse(localStorage.getItem('SESSION')!);
    this.empleado = datosCrudo;
    this.snMenu = true;
    this.SubMenu = true;
    // console.log("Yo soy ata: " + this.ata);
    // console.log(this.datosStorage);
  }

  salir() {

    //Aqui ira la logica para salir hacia el login
    alert("Seguro que quieres salir?");
  }

}
