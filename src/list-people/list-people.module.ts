import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './reducer';
import { ComponentsModule } from '../components';
import { ListPeopleComponent } from './container';
import { ListPeopleEffects } from './effects';
import { FEATURE_LIST_PEOPLE } from './selectors';


@NgModule({
  declarations: [ ListPeopleComponent ],
  imports: [
    CommonModule,
    ComponentsModule,
    StoreModule.forFeature(FEATURE_LIST_PEOPLE, reducer),
    EffectsModule.forFeature([ListPeopleEffects])
  ],
  exports: [ ListPeopleComponent ]
})
export class ListPeopleModule {}