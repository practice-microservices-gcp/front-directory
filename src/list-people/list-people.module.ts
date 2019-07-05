import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../components';
import { ListPeopleComponent } from './container';

@NgModule({
  declarations: [ TableComponent, ListPeopleComponent ],
  imports: [ CommonModule ],
  exports: [ ListPeopleComponent ]
})
export class ListPeopleModule {}