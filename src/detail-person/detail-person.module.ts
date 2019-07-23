import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameComponent, ListPropertiesComponent } from '../components';
import { DetailPersonComponent } from './container';

@NgModule({
  declarations: [ FrameComponent, ListPropertiesComponent, DetailPersonComponent ],
  imports: [ CommonModule ],
  exports: [ DetailPersonComponent ]
})
export class DetailPersonModule {}