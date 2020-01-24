import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate} from '@angular/animations';

@Component({
    selector: 'ardi-notice',
    templateUrl: './notice.component.html',
    styleUrls: ['./notice.component.css'],
    animations: [
        trigger('openCloseNotice', [
            transition(':enter',[
                style({opacity: 0}),
                animate('1s ease-out', style({opacity: 1}))
            ]),
            transition(':leave',[
                style({ opacity: 1}),
                animate('0.3s ease-in', style({opacity: 0}))
            ])
        ])
    ]
})
export class NoticeComponent {

    @Input()
    public set type (notice_type: 'error' | 'warning') {
        if (notice_type === 'error') {
            this.isError = true;
            this.isWarning = false;
        } else {
            this.isWarning = true;
            this.isError = false;
        }
    }

    @Input()
    public show: boolean = false;

    @Input()
    public message = 'The operation has failed. Please contact with the administrator';

    public isError = false;
    public isWarning = true;

    public close() {
        this.show = false;
    }
}
