import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select, State as fullState } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Error } from '../entities';
import { NoticeType } from '../../components';
import { State, loadingSelector, errorSelector, allowNavigationSelector } from '../selectors';
import { loginRequest, loginForbidenNavigation } from '../actions';
import { AuthState } from '../reducer';

@Component({
    selector: 'ardi-auth-user',
    templateUrl: './auth-user.component.html',
    styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent implements OnInit, OnDestroy {

    public loading = false;
    public user = '';
    public password = '';
    public errorType: NoticeType = 'warning';
    public errorMsg = null

    public loading$: Observable<boolean> = this.store.pipe(select(loadingSelector));
    public error$: Observable<Error>;
    public loginSucces$: Observable<boolean>;

    private subscriptions: Subscription[] = [];

    constructor(
        private store: Store<State>,
        private router: Router
    ) { }

    ngOnInit() {
        this.subscriptions.push(
            this.store
                .pipe(select(errorSelector))
                .subscribe(
                    (value: Error) => {
                        if (value) {
                            this.errorType = value.errorType;
                            this.errorMsg = value.errorMsg;
                        }
                    }
                ));

        this.subscriptions.push(
            this.store
            .pipe(select(allowNavigationSelector))
            .subscribe(
                (value: boolean) => {
                    if (value){
                        const action = loginForbidenNavigation();
                        this.store.dispatch(action);
                        this.router.navigateByUrl('/priv/home')
                    }
                }
            )
        );
    }

    ngOnDestroy() {
        for (const subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }

    public doLogin() {
        const action = loginRequest({
            email: this.user,
            password: this.password
        });
        this.store.dispatch(action);
    }

    public goNewUser(event) {
        this.router.navigateByUrl('/new-user');
    }

    public closeNotice() {
        this.errorMsg = null;
    }
}
