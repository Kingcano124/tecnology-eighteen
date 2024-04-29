import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  verEditar: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Pc portatil', weight: '2.300.000', symbol: 'Portatil de colo negro', verEditar: ''},
  {position: 2, name: 'Mouse Gamer', weight: '49.000', symbol: 'Mouse ergonomico gamer ', verEditar: ''},
  {position: 3, name: 'Audifonos', weight: '62.000', symbol: 'Audifonos con mucho volumen', verEditar: ''},
  {position: 4, name: 'Teclado negro', weight: '120.000', symbol: 'Teclado negro mate con luces', verEditar: ''},
  {position: 5, name: 'Diademas 2.0', weight: '99.000', symbol: 'Diademas grandes, alto volumen', verEditar: ''},
  
];

@Component({
  selector: 'app-consultar-productos',
  templateUrl: './consultar-productos.component.html',
  styleUrls: ['./consultar-productos.component.css']
})
export class ConsultarProductosComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'verEditar'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
