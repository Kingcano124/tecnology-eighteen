import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header-inicial',
  templateUrl: './header-inicial.component.html',
  styleUrls: ['./header-inicial.component.css']
})
export class HeaderInicialComponent {
  constructor(private router: Router) { }
  mostrarProductos() {
    this.router.navigateByUrl('/productos'); // Cambia '/productos' por la ruta correcta de tus productos
  }
  mostrarInicio() {
    this.router.navigateByUrl('/descuentos'); // Cambia '/productos' por la ruta correcta de tus productos
  }
  mostrarDescuentos() {
    this.router.navigateByUrl('/descuentos'); // Cambia '/productos' por la ruta correcta de tus productos
  }
  iniciarSesion() {
    this.router.navigateByUrl('/iniciar-sesion'); // Cambia '/productos' por la ruta correcta de tus productos
  }


}
