import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components';
import { LogoutComponent } from './container';
import { StoreModule } from '@ngrx/store';
import { FEATURE_LOGOUT } from './selectors/logout.selector';
import { reducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { LogoutEffects } from './effects';

@NgModule({
    declarations: [ LogoutComponent ],
    imports: [
        CommonModule,
        ComponentsModule,
        StoreModule.forFeature(FEATURE_LOGOUT, reducer),
        EffectsModule.forFeature([LogoutEffects])
    ],
    exports: [ LogoutComponent ]
})
export class LogoutModule {}