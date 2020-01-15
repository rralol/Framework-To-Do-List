import { Injectable } from '@angular/core';
import { listItem } from './item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private list: listItem[];

  constructor() {
    this.list = new Array();
    this.loadFromLocalStorage();
  }

  public addToList(item: listItem){
    this.list.push(item);
    this.storeInLocalStorage();
  }

  public getList(): Observable<listItem[]> {
    return of(this.list);
  }

  public removeFromList(item: listItem){
    const index: number = this.list.indexOf(item);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
    this.storeInLocalStorage();
  }

  public updateItem(itemToUpdate: listItem, newItem: listItem) {
    const index: number = this.list.indexOf(itemToUpdate);
    this.list[index] = newItem;
    this.storeInLocalStorage();
  }

  private storeInLocalStorage() {
    localStorage.clear();
    localStorage.setItem('list', JSON.stringify(this.list));
  }
  private loadFromLocalStorage() {
    this.list = JSON.parse(localStorage.getItem('list'));
  }

}

