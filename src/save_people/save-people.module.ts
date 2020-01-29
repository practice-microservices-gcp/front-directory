import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SavePeopleComponent } from './container';
import { FEATURE_SAVE_PEOPLE } from './selectors';
import { reducer } from './reducer';
import { SavePeopleEffects } from './effects';

@NgModule({
    declarations: [ SavePeopleComponent ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        StoreModule.forFeature(FEATURE_SAVE_PEOPLE, reducer),
        EffectsModule.forFeature([SavePeopleEffects])
    ],
    exports: [ SavePeopleComponent ]
})
export class SavePeopleModule {}