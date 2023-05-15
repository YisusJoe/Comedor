import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Observable, catchError, map, pipe, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioApiService implements OnInit {

  ngOnInit(): void {}

  constructor(private http: HttpClient) {}

  public iniciarSecion(datos:any) {

    console.log(datos.params.rfcprov)
    console.log(datos.params.pass)
    if(datos.params.rfcprov == 'SAFJ9607027A6' && datos.params.pass == 'MTIzNA==') {
      return 1;
    } else {
      return 0;
    }
  }

  public consumirServicio(datos:any): Observable<String> {

    // console.log(datos.params)
    // alert(datos.params)
    return this.http
    .post('http://10.27.113.36/diseno/apicomedorcoppel/' + datos.uri, datos.params)
    // .post('http://localhost:8080/apicomedorcoppel/' + datos.uri, datos.params)
    // .post('http://localhost:8080/apicomedorcoppel' + datos.uri, datos.params)
    .pipe(
      map(({ data }: any) => data),
      catchError(this._handleError)
    )
  } 

  private _handleError(error: HttpErrorResponse) {

    let errorMessage = 'No se obtuvo respuesta del servidor de autenticación';
    if (error.error.data) errorMessage = error.error.data.userMessage;
    return throwError(() => new Error(errorMessage))
  }
}

// public MostrarIVA(): Observable<string> {
  
//   var datos = {
//     params: {}
//   }
//   return this.http
//     .post('http://localhost:8080/apicomedorcoppel/comedorIva', datos.params)
//     .pipe(
//       map(({ data }: any) => data),
//       catchError(this._handleError)
//     )
// }