import { Component } from '@angular/core';
import { DBService } from '../db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  datosStorage = JSON.parse(localStorage.getItem('SESSION')!);

  menu:any = {
    
    empleado : this.datosStorage.response,
    snMenu : true,
    SubMenu : true,
  }

  constructor(private data:DBService, private router:Router) {
    
    let datosCrudo = data.obtenerData()
    this.datosStorage = JSON.parse(localStorage.getItem('SESSION')!);
    // console.log("Yo soy ata: " + this.ata);
    // console.log(this.datosStorage);
  }

  cambiarModulo(modulo:any) {

    console.log(modulo.idu_modulo)
    localStorage.setItem('modulo', modulo.idu_modulo)
    location.reload()
    // console.log("CAMBIANDO MODULO " + JSON.stringify(modulo));
  }

  salir() {

    //Aqui ira la logica para salir hacia el login
    alert("Seguro que quieres salir?");
    localStorage.clear();
    this.router.navigate(['']);
  }

}
