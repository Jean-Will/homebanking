import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-fundos',
  templateUrl: './add-fundos.component.html',
  styleUrls: ['./add-fundos.component.css']
})
export class AddFundosComponent implements OnInit {
  
  constructor (
    public dialogRef: MatDialogRef<AddFundosComponent>
  ) { }
ngOnInit(): void {
  
}
AddFundos(): void {
  this.dialogRef.close();
}

}
  


