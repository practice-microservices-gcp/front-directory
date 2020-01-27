import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateUserComponent } from './container';
import { ComponentsModule } from '../components';

@NgModule({
    declarations: [ CreateUserComponent ],
    imports: [ CommonModule, ReactiveFormsModule, ComponentsModule ],
    exports: [ CreateUserComponent ]
})
export class CreateUserModule {}