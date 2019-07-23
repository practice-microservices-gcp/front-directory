import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRouterModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { DetailPersonModule } from '../../detail-person';

@NgModule({
  declarations: [ DetailsComponent ],
  imports: [ CommonModule, DetailPersonModule, DetailsRouterModule ]
})
export class DetailsModule {}