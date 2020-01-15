import { Component, OnInit, Input, Output } from '@angular/core';
import {listItem} from '../item';
import { DataService } from '../dataservice.service';
import { MatDialog, MatDialogConfig} from "@angular/material";
import { NewitemdialogComponent } from '../newitemdialog/newitemdialog.component';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})
export class ListitemComponent implements OnInit {
  @Input() item: listItem;
  done: boolean;
  list: listItem[];
  constructor(
    private dialog: MatDialog,
    private dataService: DataService
    ) 
    {this.done = false;}
  
  ngOnInit() {
    this.getList();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.item;
  
    const dialogRef = this.dialog.open(NewitemdialogComponent,
        dialogConfig);
  
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data);
        if (data) this.dataService.updateItem(this.item, data);
        console.log(this.list);
      }
    ); 
  }

  getList(): void {
    this.dataService.getList().subscribe(list => this.list = list);
  }

  markDone() {
    this.done = !this.done;
  }

  remove() {
    this.dataService.removeFromList(this.item);
    this.getList();
  }

}
