import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewUserComponent } from './new-user.component';
import { NewUserRouterModule } from './new-user-routing.module';
import { CreateUserModule } from '../../create-user';

@NgModule({
    declarations: [ NewUserComponent ],
    imports: [ CommonModule, NewUserRouterModule, CreateUserModule ]
})
export class NewUserModule {}