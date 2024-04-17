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
<<<<<<< HEAD
import { ResenasComponentComponent } from './resenas-component/resenas-component.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

=======
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { ConsultarProductosComponent } from './consultar-productos/consultar-productos.component';
import { CrearProductosComponent } from './crear-productos/crear-productos.component';
import { ModificarProductosComponent } from './modificar-productos/modificar-productos.component';
import { MatSelectModule } from '@angular/material/select';
import { ModalUserComponent } from './pages/modal-user/modal-user.component';
import {MatDialogModule} from '@angular/material/dialog';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
>>>>>>> 8f95a8861a25bfd8f2739294c9d4a6157b8bfcd1


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
<<<<<<< HEAD
    ResenasComponentComponent,
    ContactanosComponent,
    DetalleProductoComponent,
=======
    DetalleProductosComponent,
    ConsultarProductosComponent,
    CrearProductosComponent,
    ModificarProductosComponent,
    ModalUserComponent,
    OrdenesComponent
>>>>>>> 8f95a8861a25bfd8f2739294c9d4a6157b8bfcd1
    
    
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
    MatMenuModule,
    MatSelectModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
