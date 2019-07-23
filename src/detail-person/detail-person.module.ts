import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameComponent } from '../components';
import { DetailPersonComponent } from './container';

@NgModule({
  declarations: [ FrameComponent, DetailPersonComponent ],
  imports: [ CommonModule ],
  exports: [ DetailPersonComponent ]
})
export class DetailPersonModule {}