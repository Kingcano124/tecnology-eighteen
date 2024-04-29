import { Component } from '@angular/core';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.css']
})
export class CardProductsComponent {

  cards = [
    {
      title: 'Portatil ASUS',
      image: '../../assets/Imgenes/pc2.png',
      content: 'Computador Portátil Gamer Victus ASUS 15.6" Pulgadas fb0128la \r\n- AMD Ryzen 5 - RAM 8GB',
      precio: ' Precio: $3.200.000'
    },
    {
      title: 'Monitor Samsung 24 pulgadas',
      image: '../../assets/Imgenes/monitor.png',
      content: 'Monitor Samsung Gamer 24" pulgadas G320NL Plan Negro, con tasa de actualización de 165Hz.',
      precio: 'Precio: $200.000'
    },
    {
      title: 'Control PLAYSTATION  ',
      image: '../../assets/Imgenes/control.png',
      content: 'Control inalambrico DualShock 4, color azul, Incluye un sensor altamente sensible de seis ejes ',
      precio: 'Precio: $200.000'
    },
    {
      title: 'Monitor LG 22 pulgadas',
      image: '../../assets/Imgenes/pc.png',
      content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      precio: 'Precio: $3.200.000'
    },
    {
      title: 'Monitor LG 22 pulgadas',
      image: '../../assets/Imgenes/pc.png',
      content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      precio: 'Precio: $3.200.000'
    },
    {
      title: 'Monitor LG 22 pulgadas',
      image: '../../assets/Imgenes/pc.png',
      content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      precio: 'Precio: $3.200.000'
    },
    // Aquí puedes agregar más objetos para representar más tarjetas
  ];

}
