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

  constructor(private data:DBService) {
    
    let datosCrudo = data.obtenerData()
    this.empleado = datosCrudo;
    this.snMenu = true;
    this.SubMenu = true;
  }

  salir() {

    //Aqui ira la logica para salir hacia el login
    alert("Seguro que quieres salir?");
  }

}
