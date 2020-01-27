import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CreateUserComponent } from './container';
import { ComponentsModule } from '../components';
import { FEATURE_CREATE_USER} from './selectors';
import { reducer } from './reducer';
import { CreateUserEffects } from './effects';

@NgModule({
    declarations: [CreateUserComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ComponentsModule,
        StoreModule.forFeature(FEATURE_CREATE_USER, reducer),
        EffectsModule.forFeature([CreateUserEffects])
    ],
    exports: [CreateUserComponent]
})
export class CreateUserModule { }