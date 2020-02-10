import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { NoticeType } from '../../components';
import { errorListPeopleSelector, errorSavePeopleSelector, successSavePeopleSelector, State, errorLogoutSelector} from '../selectors';

@Component({
    selector: 'ardi-home-notification',
    templateUrl: './home-notification.component.html',
    styleUrls: ['./home-notification.component.css']
})
export class HomeNotificationComponent implements OnInit, OnDestroy {

    public noticeType: NoticeType = 'notification';
    public message: string = null;

    private subscriptions: Subscription[] = [];

    constructor(
        private store: Store<State>
    ){}

    ngOnInit() {
        this.subscriptions.push(
            this.store
            .pipe(select(errorListPeopleSelector))
            .subscribe(
                (err: Error) => {
                    if (err) {
                        this.noticeType = 'error';
                        this.message = err.message;
                    }
                }
            )
        );

        this.subscriptions.push(
            this.store
            .pipe(select(errorSavePeopleSelector))
            .subscribe(
                (err: Error) => {
                    if (err) {
                        this.noticeType = 'error';
                        this.message = err.message
                    }
                }
            )
        );

        this.subscriptions.push(
            this.store
            .pipe(select(successSavePeopleSelector))
            .subscribe(
                (value: boolean) => {
                    if (value) {
                        this.noticeType = 'notification';
                        this.message = 'Person saved successfully'
                    }
                }
            )
        );

        this.subscriptions.push(
            this.store
            .pipe(select(errorLogoutSelector))
            .subscribe(
                (err: Error) => {
                    if (err) {
                        this.noticeType = 'error';
                        this.message = err.message;
                    }
                }
            )
        )
    }

    ngOnDestroy() {
        for (const subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }

    close() {
        this.message = null;
    }


}
