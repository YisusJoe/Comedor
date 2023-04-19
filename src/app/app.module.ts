import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule,Routes } from '@angular/router';

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
