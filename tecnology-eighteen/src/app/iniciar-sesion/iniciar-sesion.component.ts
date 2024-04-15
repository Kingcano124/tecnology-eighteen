import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  constructor(private router: Router) { }
  
  registrarse() {
    this.router.navigateByUrl('/registrarse'); // Cambia '/productos' por la ruta correcta de tus productos
  }
}
