import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  date: string;
  name: string;
  product: string;
  manage : string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: "04/16/2024", name: 'Computador ASUS', product: "Computador ASUS", manage: ''},
  {date: "04/16/2024", name: 'Daniel Cano', product: "Impresora", manage: ''},
  {date: "04/16/2024", name: 'Carlos Salazar', product: "TV Panasonic", manage: ''},
  {date: "04/16/2024", name: 'Favio Cano', product: "Iphone 12", manage: ''},
  {date: "04/16/2024", name: 'esteban Sanchez', product: "Celular Xiaomi", manage: ''},
  {date: "04/16/2024", name: 'David Fernandez', product:  "Torre de Sonido", manage: ''},
  {date: "04/16/2024", name: 'Castaño Jhon Alex', product:  "Cargador Iphone", manage: ''},
  {date: "04/16/2024", name: 'Lina M', product:  "Celular Xiaomi 5", manage: ''},
  {date: "04/16/2024", name: 'Liliana Aguirre', product:  "Impresora", manage: ''},
  {date: "04/16/2024", name: 'Fani Lopez', product:  "Celular Xiaomi 6", manage: ''}
]


@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})

export class OrdenesComponent {

  displayedColumns: string[] = ['date', 'name', 'product', 'manage'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
