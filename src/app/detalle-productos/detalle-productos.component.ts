import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent {
  cards = [
    {
      title: 'Portatil ASUS',
      image: '../../assets/Imgenes/pc2.png',
      content: 'Al contactarnos te brindaremos toda la información necesaria para realizar el proceso de compre',
      precio: ' Precio: $3.200.000'
    },
    
  ];

  cardsDos = 
    {
      title: 'Computador Portátil ASUS Zenbook OLED 14" Pulgadas UX3402ZA - Intel Core i5 - RAM 8GB - Disco SSD 512 GB - Azul',
      image: '../../assets/Imgenes/pc2.png',
      content: '<ul><li>Incluye Funda y Adaptador USB-A a RJ45 gigabit ethernet</li><li>Certificado de grado militar MIL-STD-810H ultra-exigente</li><li>Certificación TÜV Rheinland para bajas emisiones de luz azul</li><li>Inicio de sesión seguro con sensor de huellas dactilares</li></ul>',
      contentDos: 'El ASUS Zenbook 14 OLED potente y compacto Zenbook 14 OLED es increíblemente liviano y delgado, con un nuevo diseño elegante, moderno y atemporal. La pantalla OLED NanoEdge ofrece unas imágenes perfectas, con precisión de color validada por PANTONE® y una gama de color DCI-P3 al 100%. El procesador Intel® Core™ .',
      precio: ' Precio: $3.200.000'
    }
  ;

}
