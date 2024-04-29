import {Component} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { ModalUserComponent } from '../modal-user/modal-user.component';

export interface PeriodicElement {
  name: string;
  rol: string;
  status: string;
  edit: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: "Daniela Garzón", rol: 'Administrador', status: "Activo", edit: ''},
  {name: "David", rol: 'Administrador', status: "Activo", edit: ''},
  {name: "Carlos", rol: 'Administrador', status: "Activo", edit: ''},
  {name: "Sofia", rol: 'Administrador', status: "Activo", edit: ''},
  {name: "Alfonso", rol: 'Administrador', status: "Activo", edit: ''},
  {name: "Fernando", rol: 'Cliente', status:  "Activo", edit: ''},
  {name: "Luisa", rol: 'Cliente', status:  "Inactivo", edit: ''},
  {name: "Carolina", rol: 'Cliente', status:  "Inactivo", edit: ''},
  {name: "Daniel salazar", rol: 'Cliente', status:  "Inactivo", edit: ''},
  {name:  "Pedro", rol: 'Cliente', status:  "Inactivo", edit: ''}
]


@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent {
  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ['name', 'rol', 'status', 'edit'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    this.dialog.open(ModalUserComponent);
  }

}
