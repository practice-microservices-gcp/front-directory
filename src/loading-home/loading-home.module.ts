import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components';
import { LoadingHomeComponent } from './container';

@NgModule({
    declarations: [ LoadingHomeComponent ],
    imports: [ CommonModule, ComponentsModule ],
    exports: [ LoadingHomeComponent ]
})
export class LoadingHomeModule {}