import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-retirar-fundos',
  templateUrl: './retirar-fundos.component.html',
  styleUrls: ['./retirar-fundos.component.css']
})
export class RetirarFundosComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RetirarFundosComponent>
  ) { }
ngOnInit(): void {
  
}
cancel(): void {
  this.dialogRef.close();
}

}
