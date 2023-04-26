import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule,Routes } from '@angular/router';
import { DBService } from './db.service';
import { HttpClientModule } from '@angular/common/http';
import { ServicioApiService } from './modules/services/servicio-api.service';

const appRoutes:Routes = [

  {path: '', component:LoginComponent},
  {path: 'index', component:FullLayoutComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    LoginComponent,
    IndexComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    // AGREGUE ESTA LINEA PARA QUE FUNCIONARA LO DE JUVE
    HttpClientModule
  ],
  // SERVICIO DE PRUEBA TAMBIEN PARA QUE FUNCIONE
  providers: [DBService, ServicioApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
