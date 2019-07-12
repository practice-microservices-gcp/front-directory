import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { configSelector, dataSelector, loadingSelector, State, pageLimitSelector } from '../selectors';
import { pageRequest } from '../actions';
import { DataTable, ConfigTable, PaginationParams } from '../entities';
@Component({
  selector: 'ardi-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit, OnDestroy {

  public loading$: Observable<boolean> = this.store.pipe(select(loadingSelector));
  public config$: Observable<ConfigTable[]> = this.store.pipe(select(configSelector));
  public tableData$: Observable<DataTable[]> = this.store.pipe(select(dataSelector));
  public pageLimit$: Observable<PaginationParams> = this.store.pipe(select(pageLimitSelector));

  private page: number = 0;
  private limit: number = 5;
  private lastPage: number = 0;
  private pageLimitSubscription: Subscription;
  

  constructor(
    private store: Store<State>,
    private router: Router
  ) {}

  ngOnInit() {
    const action = pageRequest({page: 0, limit: 5});

    this.pageLimitSubscription = this.pageLimit$
    .subscribe(
      (pageLimit: PaginationParams) => {
        this.page = pageLimit.page;
        this.limit = pageLimit.limit;
        this.lastPage = pageLimit.lastPage;
      }
    );
    this.store.dispatch(action);
  }

  ngOnDestroy() {
    if (this.pageLimitSubscription) {
      this.pageLimitSubscription.unsubscribe();
    }
  }

  public onRowClicked(id: number) {
    this.router.navigateByUrl('/details');
  }

  public goFirstPage() {
    const action = pageRequest({ page: 0, limit: this.limit });
    this.store.dispatch(action);
  }

  public goPreviousPage() {
    const pageToGo = ((this.page - 1) < 0) ? 0 : (this.page - 1);
    const action = pageRequest({ page: pageToGo, limit: this.limit});
    this.store.dispatch(action);
  }

  public changeSize(size: number) {
    const action = pageRequest({ page: 0, limit: size });
    this.store.dispatch(action);
  }

  public goNextPage() {
    const pageToGo = ((this.page + 1) > this.lastPage) ? this.lastPage: this.page + 1;
    const action = pageRequest({ page: pageToGo, limit: this.limit });

    this.store.dispatch(action);
  }

  public goLastPage() {
    const pageToGo = this.lastPage;
    const action = pageRequest({ page: pageToGo, limit: this.limit });

    this.store.dispatch(action);
  }
}
