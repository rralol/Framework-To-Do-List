import { Component, OnInit, Input } from '@angular/core';
import {listItem} from '../item';


@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})
export class ListitemComponent implements OnInit {
  @Input() item: listItem;
  constructor() {}
  
  ngOnInit() {
  }
}
