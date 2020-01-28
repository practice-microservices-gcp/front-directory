import { Component,OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { State, loadingSelector, notificationSelector } from '../selectors';
import { Notification } from '../entities';
import { newUserRequest } from '../actions';

@Component({
    selector: 'ardi-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit, OnDestroy{

    public newUserForm: FormGroup = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    });

    public loading$: Observable<boolean> = this.store.pipe(select(loadingSelector))
    public notification: Observable<Notification>;
    
    private subscriptions: Subscription[] = [];

    public loading: boolean = false;
    public noticeType: string = 'notification';
    public msg: string = null;

    constructor(
        private store: Store<State>,
        private router: Router
    ) {}

    ngOnInit() {
        this.subscriptions.push(
            this.store
            .pipe(select(notificationSelector))
            .subscribe(
                (notification: Notification) => {
                    if (notification) {
                        this.noticeType = notification.type;
                        this.msg = notification.message;
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

    public onSubmit() {
        const {email, password} = this.newUserForm.value;
        const action = newUserRequest({
            email: email,
            password: password
        });

        this.store.dispatch(action);
    }

    public onNoticeClose() {
        if (this.noticeType === 'notification') {
            this.router.navigateByUrl('/login');
        }
    }
}
