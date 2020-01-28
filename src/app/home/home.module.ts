import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { ListPeopleModule } from '../../list-people';
import { SavePeopleModule } from '../../save_people';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ListPeopleModule,
    SavePeopleModule
  ]
})
export class HomeModule {}