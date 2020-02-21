import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { State, loadingSelector } from '../selectors';


@Component({
    selector: 'ardi-loading-home',
    templateUrl: './loading-home.component.html',
    styleUrls: ['./loading-home.component.css']
})
export class LoadingHomeComponent {

    public loading$ = this.store.pipe(select(loadingSelector));


    constructor(
        private store: Store<State>
    ) {}
}
