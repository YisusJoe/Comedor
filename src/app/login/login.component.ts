import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router:Router){}

  iniciarSecion(formData:NgForm){

    console.log(formData.value.rfcInput);
    console.log(formData.value.passInput);
    this.router.navigate(['index']);
  }
}
