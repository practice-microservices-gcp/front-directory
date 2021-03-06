import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthUserComponent } from './container';
import { ComponentsModule } from '../components';
import { FEATURE_AUTH_USER } from './selectors';
import { reducer } from './reducer';
import { AuthUserEffects } from './effects';

@NgModule({
    declarations: [ AuthUserComponent ],
    imports: [
        CommonModule,
        FormsModule,
        ComponentsModule,
        StoreModule.forFeature(FEATURE_AUTH_USER, reducer),
        EffectsModule.forFeature([AuthUserEffects])
    ],
    exports: [ AuthUserComponent]
})
export class AuthUserModule {}