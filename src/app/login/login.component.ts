import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioApiService } from '../modules/services/servicio-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private servicioApi:ServicioApiService){}

  ngOnInit(): void {}

  iniciarSecion(formData:NgForm){

    var datos = {
      // url: "comedores",
      uri: "validarPassword",
      method: "POST",
      params: {
        "tipoprov": 7,
        "numprov": 0,
        "rfcprov": formData.value.rfcInput,
        "correoprov": "NOT-EMAIL",
        "razonsocial": "",
        "pass": btoa(formData.value.passInput),
        "idu_modulo": null,
        "nom_rfc": ""

      },
      headers: {'Content-Type': 'application/json'}
    }
    
    // AQUI VA EL CODIGO DONDE TE REENVIA TE ENVIA LOS MODULOS DE COMEEDORES
    this.servicioApi.consumirServicio(datos).subscribe({
      next: (data:any) => {

        if(data['response']['estatus'] == 1) {
          
          datos.uri = "modulosProveedor";
          datos.params["idu_modulo"] = null;
          datos.params["nom_rfc"] = data['response']['rfc'];

          // CONSUMIMOS MODULOSPROVEEDOR //
          this.servicioApi.consumirServicio(datos).subscribe({
            next: (data:any) => {
              
              localStorage.setItem('SESSION', JSON.stringify(data));
              this.router.navigate(['index']);
            },
            error: (error) => alert(error)
          });
        } else {

          alert("Usuario o contraseña incorrectos.");
        }
      }, 
      error: (error) => alert("Ha ocurrido un error al iniciar seción\n" + error) //this.showError(error)
    });
  }
}
