import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { configSelector, dataSelector, loadingSelector, State } from '../selectors';
import { pageRequest } from '../actions';
import { DataTable, ConfigTable } from '../entities';
@Component({
  selector: 'ardi-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  public loading$: Observable<boolean> = this.store.pipe(select(loadingSelector));
  public config$: Observable<ConfigTable[]> = this.store.pipe(select(configSelector));
  public tableData$: Observable<DataTable[]> = this.store.pipe(select(dataSelector));
  

  constructor(
    private store: Store<State>,
    private router: Router
  ) {}

  ngOnInit() {
    const action = pageRequest({page: 0, limit: 5});

    this.store.dispatch(action);
  }

  private onEvent(action: { type: string, payload?: any}) {
    console.log('Action: ', action);
  }

  public onRowClicked(id: number) {
    this.router.navigateByUrl('/details');
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
