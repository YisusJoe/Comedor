import { Injectable } from '@angular/core';


// const data = [
//   {"idu_proveedor":"0","idu_usuario":"65","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"JOSE LUIS HERNANDEZ MEDINA","idu_modulo":"1","nom_modulo":"Catálogos","nom_imagen":"documento.png","idu_menu_opcion":"1","nom_opcion":"Comedores","nom_state":"/catalogos/Comedores","nom_file":"Comedores","nom_dir":"catalogos/","nom_imagen_opcion":"restaurante.png"},
//   {"idu_proveedor":"0","idu_usuario":"65","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"JOSE LUIS HERNANDEZ MEDINA","idu_modulo":"1","nom_modulo":"Catálogos","nom_imagen":"documento.png","idu_menu_opcion":"2","nom_opcion":"Alimentos","nom_state":"/catalogos/Alimentos","nom_file":"Alimentos","nom_dir":"catalogos/","nom_imagen_opcion":"bolsa-termica.png"},
//   {"idu_proveedor":"0","idu_usuario":"65","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"JOSE LUIS HERNANDEZ MEDINA","idu_modulo":"1","nom_modulo":"Catálogos","nom_imagen":"documento.png","idu_menu_opcion":"3","nom_opcion":"Proveedores","nom_state":"/catalogos/proveedores","nom_file":"proveedores","nom_dir":"catalogos/","nom_imagen_opcion":"camion.png"},
//   {"idu_proveedor":"0","idu_usuario":"65","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"JOSE LUIS HERNANDEZ MEDINA","idu_modulo":"1","nom_modulo":"Catálogos","nom_imagen":"documento.png","idu_menu_opcion":"5","nom_opcion":"Usuarios","nom_state":"/catalogos/Usuarios","nom_file":"Usuarios","nom_dir":"catalogos/","nom_imagen_opcion":"usuarios.png"},
//   {"idu_proveedor":"0","idu_usuario":"65","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"JOSE LUIS HERNANDEZ MEDINA","idu_modulo":"2","nom_modulo":"Configuración","nom_imagen":"configuracion.png","idu_menu_opcion":"6","nom_opcion":"Perfiles","nom_state":"/configuracion/Perfiles","nom_file":"Perfiles","nom_dir":"configuracion/","nom_imagen_opcion":"perfiles.png"},
//   {"idu_proveedor":"0","idu_usuario":"65","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"JOSE LUIS HERNANDEZ MEDINA","idu_modulo":"3","nom_modulo":"Operación","nom_imagen":"cajero.png","idu_menu_opcion":"4","nom_opcion":"Punto de Venta","nom_state":"/operacion/puntoVenta","nom_file":"puntoVenta","nom_dir":"operacion/","nom_imagen_opcion":"caja-registradora.png"},
//   {"idu_proveedor":"0","idu_usuario":"65","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"JOSE LUIS HERNANDEZ MEDINA","idu_modulo":"4","nom_modulo":"Reportes","nom_imagen":"reportes.png","idu_menu_opcion":"7","nom_opcion":"Reporte de Consumo Diario","nom_state":"/reportes/reporteConsumoComedor","nom_file":"reporteConsumoComedor","nom_dir":"reportes/","nom_imagen_opcion":"reporteConsumo.png"}
// ];

const repose = [
  {"data":{"loggedin":true,"idu_proveedor":"0","idu_usuario":"56","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"FERNANDO JUVENTINO SANCHEZ MONTOYA","opcionesMenu":[{"idu_proveedor":"0","idu_usuario":"56","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"FERNANDO JUVENTINO SANCHEZ MONTOYA","idu_modulo":"1","nom_modulo":"Cat\u00e1logos","nom_imagen":"documento.png","idu_menu_opcion":"1","nom_opcion":"Comedores","nom_state":"\/catalogos\/Comedores","nom_file":"Comedores","nom_dir":"catalogos\/","nom_imagen_opcion":"restaurante.png"},{"idu_proveedor":"0","idu_usuario":"56","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"FERNANDO JUVENTINO SANCHEZ MONTOYA","idu_modulo":"1","nom_modulo":"Cat\u00e1logos","nom_imagen":"documento.png","idu_menu_opcion":"2","nom_opcion":"Alimentos","nom_state":"\/catalogos\/Alimentos","nom_file":"Alimentos","nom_dir":"catalogos\/","nom_imagen_opcion":"bolsa-termica.png"},{"idu_proveedor":"0","idu_usuario":"56","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"FERNANDO JUVENTINO SANCHEZ MONTOYA","idu_modulo":"1","nom_modulo":"Cat\u00e1logos","nom_imagen":"documento.png","idu_menu_opcion":"3","nom_opcion":"Proveedores","nom_state":"\/catalogos\/proveedores","nom_file":"proveedores","nom_dir":"catalogos\/","nom_imagen_opcion":"camion.png"},{"idu_proveedor":"0","idu_usuario":"56","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"FERNANDO JUVENTINO SANCHEZ MONTOYA","idu_modulo":"1","nom_modulo":"Cat\u00e1logos","nom_imagen":"documento.png","idu_menu_opcion":"5","nom_opcion":"Usuarios","nom_state":"\/catalogos\/Usuarios","nom_file":"Usuarios","nom_dir":"catalogos\/","nom_imagen_opcion":"usuarios.png"},{"idu_proveedor":"0","idu_usuario":"56","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"FERNANDO JUVENTINO SANCHEZ MONTOYA","idu_modulo":"2","nom_modulo":"Configuraci\u00f3n","nom_imagen":"configuracion.png","idu_menu_opcion":"6","nom_opcion":"Perfiles","nom_state":"\/configuracion\/Perfiles","nom_file":"Perfiles","nom_dir":"configuracion\/","nom_imagen_opcion":"perfiles.png"},{"idu_proveedor":"0","idu_usuario":"56","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"FERNANDO JUVENTINO SANCHEZ MONTOYA","idu_modulo":"3","nom_modulo":"Operaci\u00f3n","nom_imagen":"cajero.png","idu_menu_opcion":"4","nom_opcion":"Punto de Venta","nom_state":"\/operacion\/puntoVenta","nom_file":"puntoVenta","nom_dir":"operacion\/","nom_imagen_opcion":"caja-registradora.png"},{"idu_proveedor":"0","idu_usuario":"56","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"FERNANDO JUVENTINO SANCHEZ MONTOYA","idu_modulo":"4","nom_modulo":"Reportes","nom_imagen":"reportes.png","idu_menu_opcion":"7","nom_opcion":"Reporte de Consumo Diario","nom_state":"\/reportes\/reporteConsumoComedor","nom_file":"reporteConsumoComedor","nom_dir":"reportes\/","nom_imagen_opcion":"reporteConsumo.png"}],"corteCaja":null,"start":1682467048,"expire":1682468848,"idu_modulo":"1","nom_modulo":"Cat\u00e1logos"},"success":true,"errorMessage":"","errorDetail":""}
]

const data2 = [
  {
    "data": {
      "loggedin":true,"idu_proveedor":"30",
      "idu_usuario":"54",
      "idu_usuario_rol":"1",
      "nom_rol":"Administrador",
      "nom_usuario":"VERDE ALIMENTOS SA DE CV", 
      "opcionesMenu":[
        {"idu_proveedor":"30","idu_usuario":"54","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"VERDE ALIMENTOS SA DE CV","idu_modulo":"1","nom_modulo":"Cat\u00e1logos","nom_imagen":"documento.png","idu_menu_opcion":"1","nom_opcion":"Comedores","nom_state":"\/catalogos\/Comedores","nom_file":"Comedores","nom_dir":"catalogos\/","nom_imagen_opcion":"restaurante.png"},
        {"idu_proveedor":"30","idu_usuario":"54","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"VERDE ALIMENTOS SA DE CV","idu_modulo":"1","nom_modulo":"Cat\u00e1logos","nom_imagen":"documento.png","idu_menu_opcion":"2","nom_opcion":"Alimentos","nom_state":"\/catalogos\/Alimentos","nom_file":"Alimentos","nom_dir":"catalogos\/","nom_imagen_opcion":"bolsa-termica.png"},
        {"idu_proveedor":"30","idu_usuario":"54","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"VERDE ALIMENTOS SA DE CV","idu_modulo":"1","nom_modulo":"Cat\u00e1logos","nom_imagen":"documento.png","idu_menu_opcion":"3","nom_opcion":"Proveedores","nom_state":"\/catalogos\/proveedores","nom_file":"proveedores","nom_dir":"catalogos\/","nom_imagen_opcion":"camion.png"},
        {"idu_proveedor":"30","idu_usuario":"54","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"VERDE ALIMENTOS SA DE CV","idu_modulo":"1","nom_modulo":"Cat\u00e1logos","nom_imagen":"documento.png","idu_menu_opcion":"5","nom_opcion":"Usuarios","nom_state":"\/catalogos\/Usuarios","nom_file":"Usuarios","nom_dir":"catalogos\/","nom_imagen_opcion":"usuarios.png"},
        {"idu_proveedor":"30","idu_usuario":"54","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"VERDE ALIMENTOS SA DE CV","idu_modulo":"2","nom_modulo":"Configuraci\u00f3n","nom_imagen":"configuracion.png","idu_menu_opcion":"6","nom_opcion":"Perfiles","nom_state":"\/configuracion\/Perfiles","nom_file":"Perfiles","nom_dir":"configuracion\/","nom_imagen_opcion":"perfiles.png"},
        {"idu_proveedor":"30","idu_usuario":"54","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"VERDE ALIMENTOS SA DE CV","idu_modulo":"3","nom_modulo":"Operaci\u00f3n","nom_imagen":"cajero.png","idu_menu_opcion":"4","nom_opcion":"Punto de Venta","nom_state":"\/operacion\/puntoVenta","nom_file":"puntoVenta","nom_dir":"operacion\/","nom_imagen_opcion":"caja-registradora.png"},
        {"idu_proveedor":"30","idu_usuario":"54","idu_usuario_rol":"1","nom_rol":"Administrador","nom_usuario":"VERDE ALIMENTOS SA DE CV","idu_modulo":"4","nom_modulo":"Reportes","nom_imagen":"reportes.png","idu_menu_opcion":"7","nom_opcion":"Reporte de Consumo Diario","nom_state":"\/reportes\/reporteConsumoComedor","nom_file":"reporteConsumoComedor","nom_dir":"reportes\/","nom_imagen_opcion":"reporteConsumo.png"}],
      "corteCaja":null,
      "start":1681950498,
      "expire":1681952298
    },
    "success":true,
    "errorMessage":"","errorDetail":""
  }
];

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor() {}

  obtenerData() {

    var data = data2[0];
    // var objetoEmpresa = dataRFC["data"]["loggedin"]
    return data;
  }
}
