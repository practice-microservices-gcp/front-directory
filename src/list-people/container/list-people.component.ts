import { Component, OnInit } from '@angular/core';
import { PeopleState } from '../reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { configSelector, dataSelector, loadingSelector } from '../selectors';
import { pageRequest } from '../actions';
@Component({
  selector: 'ardi-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  public loading$: Observable<any> = this.store.pipe(select(loadingSelector));
  public config$: Observable<{ title: string, name: string}[]> = this.store.pipe(select(configSelector));
  public tableData$: Observable<{ [key: string]: any }[]> = this.store.pipe(select(dataSelector));
  

  constructor(
    private store: Store<PeopleState>
  ) {}

  ngOnInit() {
    const action = pageRequest({page: 0, limit: 5});

    this.store.dispatch(action);
  }

  private onEvent(action: { type: string, payload?: any}) {
    console.log('Action: ', action);
  }

  public onRowClicked(id: number) {
    this.onEvent({
      type:'RowClicked',
      payload: id
    });
  }

  public goFirstPage() {
    this.onEvent({
      type: 'FirstPage'
    });
  }

  public goPreviousPage() {
    this.onEvent({
      type:'PreviusPage'
    });
  }

  public changeSize(size: number) {
    this.onEvent({
      type:'ChangeSize',
      payload: size
    });
  }

  public goNextPage() {
    this.onEvent({
      type: 'NextPage'
    });
  }

  public goLastPage() {
    this.onEvent({
      type: 'LastPage'
    });
  }
}
