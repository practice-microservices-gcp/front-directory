import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent, LoadingComponent } from '../components';
import { ListPeopleComponent } from './container';

@NgModule({
  declarations: [ TableComponent, ListPeopleComponent, LoadingComponent ],
  imports: [ CommonModule ],
  exports: [ ListPeopleComponent ]
})
export class ListPeopleModule {}