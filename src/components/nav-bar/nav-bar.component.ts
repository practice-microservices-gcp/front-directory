import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NavBarConfig } from './nav-bar-config.entity';

@Component({
    selector: 'ardi-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

    @Input()
    public set configuration( config: NavBarConfig) {
        this.configNav = config;
        this.isLeftOne = config.leftPossition.length === 1;
        this.isCenterOne = config.centerPossition.length === 1;
        this.isRightOne = config.rigthPossition.length === 1;
    }


    @Output()
    public onOptionClicked: EventEmitter<string> = new EventEmitter<string>();

    private configNav: NavBarConfig;
    private isLeftOne: Boolean;
    private isCenterOne: Boolean;
    private isRightOne: Boolean;

    public clickOnOption( event: string) {
        this.onOptionClicked.emit(event);
    }

}
