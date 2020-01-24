import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AuthUserModule } from '../../auth-user';

@NgModule({
    declarations: [ LoginComponent ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        AuthUserModule
    ],
    exports: []
})
export class LoginModule {}