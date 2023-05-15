import { Component } from '@angular/core';
import { DBService } from '../db.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  dataDB:any;
  menu = {
    empleado : JSON.parse(localStorage.getItem('SESSION')!),
    snMenu : true,
    SubMenu : true
  }
  idu_modulo:string = '';

  constructor(private data:DBService){

    // tengo que pasar el modulo que estoy seleccionando
    let datosCrudo = data.obtenerData()
    this.dataDB = datosCrudo;
    this.idu_modulo = localStorage.getItem('modulo')!
    // console.log(this.menu.empleado.response)
    // console.log(this.menu.empleado.response[0].nom_imagen_opcion)
    // console.log(this.menu.empleado.response[0].nom_opcion)
  }
}
