import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
    selector: 'ardi-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

    public newUserForm: FormGroup = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    });

    public loading: boolean = false;
    public noticeType: string = 'notification';
    public msg: string = null;

    onSubmit() {
        console.log(this.newUserForm.value);
    }
}
