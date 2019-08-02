import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { ConfigListProperties, DataListProperties } from 'src/components';
import { routerSelector, loadingSelector, configSelector, dataSelector, State } from '../selectors';
import { RouterState } from 'src/app';
import { detailsRequest } from '../actions';

@Component({
  selector: 'ardi-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailPersonComponent implements OnInit, OnDestroy {

  public config$: Observable<ConfigListProperties[]> = this.store.pipe(select(configSelector));
  public data: DataListProperties;
  public loading$: Observable<boolean> = this.store.pipe(select(loadingSelector));

  private routerSubscription: Subscription;
  private dataSubscription: Subscription;


  constructor(
    private store: Store<State>,
    private changeDetection: ChangeDetectorRef
  ) {}
  
  ngOnInit() {
    this.routerSubscription = this.store.pipe(select(routerSelector))
    .subscribe((routerState: RouterState) => {
      const action = detailsRequest({ id: Number(routerState.params.id) })

      this.store.dispatch(action);
    });

    this.dataSubscription = this.store.pipe(select(dataSelector))
    .subscribe((response: DataListProperties) => {
      this.data = Object.assign({}, {...response});
      this.changeDetection.markForCheck();
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }

    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
