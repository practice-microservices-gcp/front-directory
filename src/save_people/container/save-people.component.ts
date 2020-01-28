import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store'

import { State } from '../selectors'
import { savePeopleRequest } from '../actions';

@Component({
    selector: 'ardi-save-people',
    templateUrl: './save-people.component.html',
    styleUrls: ['./save-people.component.css']
})
export class SavePeopleComponent {

    public savePersonForm: FormGroup = new FormGroup ({
        name: new FormControl(''),
        surname: new FormControl(''),
        email: new FormControl('')
    });

    constructor(
        private store: Store<State>
    ) {}

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
