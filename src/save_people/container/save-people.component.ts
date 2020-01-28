import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

    onSubmit() {
        console.log(this.savePersonForm.value);
    }
}
