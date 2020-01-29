import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components';
import { HomeNotificationComponent } from './container';

@NgModule({
    declarations: [ HomeNotificationComponent ],
    imports: [ CommonModule, ComponentsModule ],
    exports: [ HomeNotificationComponent ]
})
export class HomeNotificationModule {}