import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameComponent } from './frame';
import { ListPropertiesComponent } from './list-properties';
import { LoadingComponent } from './loading';
import { NoticeComponent } from './notice';
import { TableComponent } from './table';

const components = [
    FrameComponent,
    ListPropertiesComponent,
    LoadingComponent,
    NoticeComponent,
    TableComponent
]

@NgModule({
    declarations: [...components],
    imports: [ CommonModule ],
    exports: [...components]
})
export class ComponentsModule {}