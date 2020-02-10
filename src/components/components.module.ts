import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameComponent } from './frame';
import { ListPropertiesComponent } from './list-properties';
import { LoadingComponent } from './loading';
import { NoticeComponent } from './notice';
import { TableComponent } from './table';
import { NavBarComponent } from './nav-bar';

const components = [
    FrameComponent,
    ListPropertiesComponent,
    LoadingComponent,
    NoticeComponent,
    TableComponent,
    NavBarComponent
]

@NgModule({
    declarations: [...components],
    imports: [ CommonModule ],
    exports: [...components]
})
export class ComponentsModule {}