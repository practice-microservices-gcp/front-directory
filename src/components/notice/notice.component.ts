import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate} from '@angular/animations';

import { NoticeType } from './notice-type.entity'

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
    public set type (notice_type: NoticeType) {
        switch (notice_type) {
            case 'error':
                this.isError = true;
                this.isWarning = false;
                this.isNotification = false;
            break;
            case 'warning':
                this.isError = false;
                this.isWarning = true;
                this.isNotification = true;
            break;
            default:
                this.isError = false;
                this.isWarning = false;
                this.isNotification = true;
        }
    }

    @Input()
    public show: boolean = false;

    @Input()
    public message = 'The operation has failed. Please contact with the administrator';

    @Output()
    public onClose: EventEmitter<any> = new EventEmitter<any>();

    public isError = false;
    public isWarning = false;
    public isNotification = true;

    public close() {
        this.onClose.emit();
    }
}
