import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig} from "@angular/material";
import { NewitemdialogComponent } from '../newitemdialog/newitemdialog.component';
import {listItem} from '../item';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  
  list: listItem[];

  constructor(private dialog: MatDialog) { this.list = new Array();}
  ngOnInit() {
  }

  getListLength() {
    return this.list.length;
  }

  getItem(index: number) {
    return this.list[index];
  }

  setItem(index: number, listitem: listItem) {
    this.list[index] = listitem;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(NewitemdialogComponent,
       dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data);
        if (data) this.list.push(data);
        console.log(this.list);
    }
  );    
  }
}

