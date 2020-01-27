import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { Error } from '../entities';
import { NoticeType } from '../../components';
import { State, loadingSelector, errorSelector, loginSuccessSelector } from '../selectors';
import { loginRequest } from '../actions';

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
    ){}

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
            ),
            this.store
            .pipe(select(loginSuccessSelector))
            .subscribe(
                (login: boolean) => {
                    if (login) {
                        this.router.navigateByUrl('/home');
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
}
