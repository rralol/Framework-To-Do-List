import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig} from "@angular/material";
import { NewitemdialogComponent } from '../newitemdialog/newitemdialog.component';
import {listItem} from '../item';
import { DataService } from '../dataservice.service';
import { ListitemComponent } from '../listitem/listitem.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  
  list: listItem[];

  constructor(
    private dialog: MatDialog,
    private dataService: DataService
    ) 
  { }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.dataService.getList().subscribe(list => this.list = list);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(NewitemdialogComponent,
       dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) this.dataService.addToList(data);
    }
  );    
  }
}

