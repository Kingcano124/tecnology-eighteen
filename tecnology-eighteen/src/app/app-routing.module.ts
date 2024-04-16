import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IniciarSesionComponent} from './iniciar-sesion/iniciar-sesion.component';
import {RegistrarseComponent} from './registrarse/registrarse.component';
import {HeaderInicialComponent} from './header-inicial/header-inicial.component';
import {DescuentosComponent} from './descuentos/descuentos.component';
import { CardProductsComponent } from './card-products/card-products.component';

import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { ConsultarProductosComponent } from './consultar-productos/consultar-productos.component';
import { CrearProductosComponent } from './crear-productos/crear-productos.component';
import { ModificarProductosComponent } from './modificar-productos/modificar-productos.component';
import { UserAdminComponent } from './pages/user-admin/user-admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/descuentos', pathMatch: 'full' },
  // { path: 'inicio', component: HeaderInicialComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'descuentos', component: DescuentosComponent },
  { path: 'productos', component: CardProductsComponent },

  { path: 'detalleProducto', component: DetalleProductosComponent },
  { path: 'consultarProductos', component: ConsultarProductosComponent },
  { path: 'crearProductos', component: CrearProductosComponent },
  { path: 'modificarProductos', component: ModificarProductosComponent },
  { path: 'users', component: UserAdminComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
} 
