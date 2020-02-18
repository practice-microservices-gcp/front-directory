import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

import { NavBarConfig } from 'src/components';
import { State, logoutSuccessSelector } from '../selectors';
import { logoutRequest, logoutReset } from '../actions';
import { Subscription } from 'rxjs';

@Component({
    selector: 'ardi-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit, OnDestroy {


    public config: NavBarConfig = {
        leftPossition: [{
            text: 'People page',
            event: 'home'
        }],
        centerPossition: [],
        rigthPossition: [{
            icon: 'assets/logout-icon.png',
            event: 'logout'
        }]
    }

    private subscriptions: Subscription[] = [];

    constructor(
        private store: Store<State>,
        private router: Router
    ){}

    ngOnInit() {
        this.subscriptions
        .push(
            this.store.pipe(select(logoutSuccessSelector))
            .subscribe(
                (value: boolean) => {
                    if (value) {
                        const action = logoutReset();
                        this.store.dispatch(action);
                        this.router.navigateByUrl('/login');
                    }
                }
            )
        )
    }

    ngOnDestroy() {
        for(const subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }

    public goTo(event) {
        
        if (event === this.config.leftPossition[0].event) {
            this.router.navigateByUrl('/priv/home')
        } else {
            this.store.dispatch(logoutRequest())
        }
    }
}
