import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthUserComponent } from './container';
import { LoadingComponent } from '../components';

@NgModule({
    declarations: [ AuthUserComponent, LoadingComponent ],
    imports: [ CommonModule, FormsModule ],
    exports: [ AuthUserComponent]
})
export class AuthUserModule {}