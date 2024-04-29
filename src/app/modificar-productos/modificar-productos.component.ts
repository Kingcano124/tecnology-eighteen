import { Component } from '@angular/core';

@Component({
  selector: 'app-modificar-productos',
  templateUrl: './modificar-productos.component.html',
  styleUrls: ['./modificar-productos.component.css']
})
export class ModificarProductosComponent {

  data = 
  {
    nombre: 'Computador',
    precio: '1.500.000',
    caracteristicas: 'Incluye ROG Chakram Core mouse y funda ROG Zephyrus gaming,Pantalla rápida',
    acercaProducto: 'Lleva el ASUS ROG Zephyrus G16 Juega y crea sobre la marcha con el poder de la renovada Zephyrus G16 2024. ',
    imagen:'../../assets/Imgenes/pc.png',
    estado: 'Activo'
  }

}
