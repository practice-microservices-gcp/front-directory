import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { loadingListPeopleSelector, loadingSavePeopleSelector,State, loadingLogoutSelector } from '../selectors';


@Component({
    selector: 'ardi-loading-home',
    templateUrl: './loading-home.component.html',
    styleUrls: ['./loading-home.component.css']
})
export class LoadingHomeComponent implements OnInit, OnDestroy{

    public get showLoading() {
        return this.loadingListPeople || this.loadingSavePeople || this.loadingLogout;
    }

    private loadingListPeople: boolean = false;
    private loadingSavePeople: boolean = false;
    private loadingLogout: boolean = false;

    

    private subscriptions: Subscription[] = [];

    constructor(
        private store: Store<State>
    ) {}

    ngOnInit() {
        this.subscriptions.push(
            this.store
            .pipe(select(loadingSavePeopleSelector))
            .subscribe(
                (value: boolean) => {
                    this.loadingSavePeople = value;
                }
            )
        );

        this.subscriptions.push(
            this.store
            .pipe(select(loadingListPeopleSelector))
            .subscribe(
                (value: boolean) => {
                    this.loadingListPeople = value;
                }
            )
        );

        this.subscriptions.push(
            this.store
            .pipe(select(loadingLogoutSelector))
            .subscribe(
                (value: boolean) => {
                    this.loadingLogout = value;
                }
            )
        )
    }

    ngOnDestroy() {
        for (const subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }
}
