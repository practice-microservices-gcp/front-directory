import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent, LoadingComponent } from '../components';
import { ListPeopleComponent } from './container';
import { TablePeopleComponent } from './components';

@NgModule({
  declarations: [ TableComponent, ListPeopleComponent, TablePeopleComponent, LoadingComponent ],
  imports: [ CommonModule ],
  exports: [ ListPeopleComponent ]
})
export class ListPeopleModule {}