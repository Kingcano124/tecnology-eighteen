import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardProductsComponent } from './card-products/card-products.component';

/* Material Angular */
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { MenuHamburgerComponent } from './menu-hamburger/menu-hamburger.component';
import { UserAdminComponent } from './pages/user-admin/user-admin.component';
import {MatTableModule} from '@angular/material/table';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { HeaderInicialComponent } from './header-inicial/header-inicial.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { DescuentosComponent } from './descuentos/descuentos.component';



@NgModule({
  declarations: [
    AppComponent,
    CardProductsComponent,
    IniciarSesionComponent,
    FooterComponent,
    HeaderAdminComponent,
    MenuHamburgerComponent,
    UserAdminComponent,
    RegistrarseComponent,
    HeaderInicialComponent,
    DescuentosComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
