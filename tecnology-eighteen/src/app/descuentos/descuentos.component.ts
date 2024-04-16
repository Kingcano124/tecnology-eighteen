import { Component } from '@angular/core';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.css']
})
export class DescuentosComponent {
  cards = [
    {
      title: 'Computador Portátil ASUS Zenbook OLED 14" Pulgadas UX3402ZA - Intel Core i5 - RAM 8GB - Disco SSD 512 GB - Azul',
      image: '../../assets/Imgenes/pc2.png',
      content: '<ul><li>Procesador: Intel Core I7</li><li>Capacidad de Disco: Estado Solido SSD 1 TB</li><li>Memoria RAM: 32 GB</li></ul>',
      precio: ' Precio: $3.200.000'
    },
    {
      title: 'Monitor Samsung 24 pulgadas',
      image: '../../assets/Imgenes/monitor.png',
      content: '<ul><li>Procesador: Intel Core I7</li><li>Capacidad de Disco: Estado Solido SSD 1 TB</li><li>Memoria RAM: 32 GB</li></ul>',
      precio: 'Precio: $200.000'
    },
    {
      title: 'Control PLAYSTATION  ',
      image: '../../assets/Imgenes/control.png',
      content: '<ul><li>Procesador: Intel Core I7</li><li>Capacidad de Disco: Estado Solido SSD 1 TB</li><li>Memoria RAM: 32 GB</li></ul> ',
      precio: 'Precio: $200.000'
    },
    {
      title: 'Monitor LG 22 pulgadas',
      image: '../../assets/Imgenes/pc.png',
      content: '<ul><li>Procesador: Intel Core I7</li><li>Capacidad de Disco: Estado Solido SSD 1 TB</li><li>Memoria RAM: 32 GB</li></ul>',
      precio: 'Precio: $3.200.000'
    },
    {
      title: 'Monitor LG 22 pulgadas',
      image: '../../assets/Imgenes/pc.png',
      content: '<ul><li>Procesador: Intel Core I7</li><li>Capacidad de Disco: Estado Solido SSD 1 TB</li><li>Memoria RAM: 32 GB</li></ul>',
      precio: 'Precio: $3.200.000'
    },
    {
      title: 'Monitor LG 22 pulgadas',
      image: '../../assets/Imgenes/pc.png',
      content: '<ul><li>Procesador: Intel Core I7</li><li>Capacidad de Disco: Estado Solido SSD 1 TB</li><li>Memoria RAM: 32 GB</li></ul>',
      precio: 'Precio: $3.200.000'
    },
    // Aquí puedes agregar más objetos para representar más tarjetas
  ];
}
