import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import * as _moment from 'moment';
import { listItem } from '../item';

const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-newitemdialog',
  templateUrl: './newitemdialog.component.html',
  styleUrls: ['./newitemdialog.component.css'],
  providers: [
  {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]},
  {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class NewitemdialogComponent implements OnInit {

  form: FormGroup;
  currentdate = moment();
  edit: boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewitemdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: listItem
    ) {
      if (data) {
        this.edit = true;
        this.form = this.fb.group({
          title: [data.title, Validators.required],
          description: [data.description,],
          date: [data.date, Validators.required],
          priority: [data.priority, Validators.required] 
        });
      } else {
        this.edit = false;
        this.form = this.fb.group({
          title: ['', Validators.required],
          description: ['',],
          date: [this.currentdate, Validators.required],
          priority: ['', Validators.required] 
        });
      }
  }

  ngOnInit() {

  }

  save() {
    
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
  close() {
    this.dialogRef.close();
  }
}
