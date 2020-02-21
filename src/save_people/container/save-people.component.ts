import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs';

import { State, saveSuccessSelector } from '../selectors'
import { savePeopleRequest, savePeopleRestore } from '../actions';

@Component({
    selector: 'ardi-save-people',
    templateUrl: './save-people.component.html',
    styleUrls: ['./save-people.component.css']
})
export class SavePeopleComponent implements OnInit, OnDestroy{

    public savePersonForm: FormGroup = new FormGroup ({
        name: new FormControl(''),
        surname: new FormControl(''),
        email: new FormControl('')
    });

    private subscriptions: Subscription[] = [];

    constructor(
        private store: Store<State>
    ) {}

    ngOnInit() {
        this.subscriptions.push(
            this.store.select(saveSuccessSelector)
            .subscribe(() => {
                const action = savePeopleRestore();
                this.savePersonForm.reset();
                this.store.dispatch(action);
            })
        )
    }

    ngOnDestroy() {
        for (const subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }

    onSubmit() {
        const {
            name,
            surname,
            email
        }  = this.savePersonForm.value;

        const action = savePeopleRequest({
            name: name,
            surname: surname,
            email: email
        });

        this.store.dispatch(action);
    }
}
