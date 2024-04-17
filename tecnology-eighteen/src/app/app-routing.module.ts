import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IniciarSesionComponent} from './iniciar-sesion/iniciar-sesion.component';
import {RegistrarseComponent} from './registrarse/registrarse.component';
import {HeaderInicialComponent} from './header-inicial/header-inicial.component';
import {DescuentosComponent} from './descuentos/descuentos.component';
import {ResenasComponentComponent} from './resenas-component/resenas-component.component';
import {ContactanosComponent} from './contactanos/contactanos.component';
import { CardProductsComponent } from './card-products/card-products.component';

import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { ConsultarProductosComponent } from './consultar-productos/consultar-productos.component';
import { CrearProductosComponent } from './crear-productos/crear-productos.component';
import { ModificarProductosComponent } from './modificar-productos/modificar-productos.component';
import { UserAdminComponent } from './pages/user-admin/user-admin.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';

const routes: Routes = [
  { path: '', redirectTo: '/descuentos', pathMatch: 'full' },
  // { path: 'inicio', component: HeaderInicialComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'descuentos', component: DescuentosComponent },
  { path: 'productos', component: CardProductsComponent },
<<<<<<< HEAD
  { path: 'resenas', component: ResenasComponentComponent},
  { path: 'contactanos', component: ContactanosComponent},
=======

  { path: 'detalleProducto', component: DetalleProductosComponent },
  { path: 'consultarProductos', component: ConsultarProductosComponent },
  { path: 'crearProductos', component: CrearProductosComponent },
  { path: 'modificarProductos', component: ModificarProductosComponent },
  { path: 'users', component: UserAdminComponent },
  {path: 'ordenes', component: OrdenesComponent}


>>>>>>> 8f95a8861a25bfd8f2739294c9d4a6157b8bfcd1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
} 
