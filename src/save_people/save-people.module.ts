import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SavePeopleComponent } from './container';

@NgModule({
    declarations: [ SavePeopleComponent ],
    imports: [ CommonModule, ReactiveFormsModule ],
    exports: [ SavePeopleComponent ]
})
export class SavePeopleModule {}