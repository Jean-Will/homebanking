
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RetirarFundosComponent } from './retirar-fundos/retirar-fundos.component';
import { AddFundosComponent } from './add-fundos/add-fundos.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'price', 'date'];
  dataSource = new MatTableDataSource<Movimentacoes>(ELEMENT_DATA);

  constructor ( public dialog: MatDialog ){}
  ngOnInit():void{

  }

  addLive(): void {
    const dialogRef = this.dialog.open(RetirarFundosComponent, {
     width:'300px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    })

    
    
   
  
  }
  AddFundos(): void {
    const dialogRef = this.dialog.open(AddFundosComponent, {
      width:'300px'

  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  })
  }
}



export interface Movimentacoes {
  name: string;
  position: number;
  price: number ;
  date: string;
}



const ELEMENT_DATA: Movimentacoes[] = [
  {position: 1, name: 'Mercado', price: 250.90 , date: '12.04.2023'},
  {position: 2, name: 'Bomba de Gasolina', price: 45.00, date: '11.04.2023'},
  {position: 3, name: 'Farmacia', price: 6.94, date: '10.04.2023'},
  {position: 4, name: 'worten', price: 49.99, date: '10.04.2023'},
  {position: 5, name: 'Bomba de gasolina', price: 30.81, date: '06.04.2023'},
  {position: 6, name: 'Hospital da Luz', price: 60.00, date: '30.03.2023'},
  
];
