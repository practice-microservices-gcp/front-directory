import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleDataSourceService {

  private data: {[key:string]: any}[] = [{
    id: 0,
    name: 'Juan',
    surname: 'Palomo',
    email: 'juan.palomo@email.com'
  }, {
    id: 1,
    name: 'Antonio',
    surname: 'Marzal',
    email: 'antonio.marzal@email.com'
  }, {
    id: 2,
    name: 'Maria',
    surname: 'Guitierrez',
    email: 'maria.guitierrez@email.com'
  }, {
    id: 3,
    name: 'Pablo',
    surname: 'Garcia',
    email: 'pablo.garcia@email.com'
  }, {
    id: 4,
    name: 'Enrique',
    surname: 'Sanz',
    email: 'enrique.sanz@email.com'
  }, {
    id: 5,
    name: 'Marina',
    surname: 'Garcia',
    email: 'marina.garcia@email.com'
  },{
    id: 6,
    name: 'Pedro',
    surname: 'Iglesias',
    email: 'pedro.iglesias@email.com'
  }, {
    id: 7,
    name: 'Pablo',
    surname: 'Sanchez',
    email: 'pablo.sanchez@email.com'
  }, {
    id: 8,
    name: 'Pablo',
    surname: 'Ribera',
    email: 'enrique.sanz@email.com'
  },{
    id: 9,
    name: 'Enrique',
    surname: 'Sanz',
    email: 'enrique.sanz@email.com'
  },{
    id: 10,
    name: 'Enrique',
    surname: 'Sanz',
    email: 'enrique.sanz@email.com'
  },{
    id: 11,
    name: 'Enrique',
    surname: 'Sanz',
    email: 'enrique.sanz@email.com'
  },{
    id: 12,
    name: 'Enrique',
    surname: 'Sanz',
    email: 'enrique.sanz@email.com'
  },{
    id: 13,
    name: 'Enrique',
    surname: 'Sanz',
    email: 'enrique.sanz@email.com'
  },{
    id: 14,
    name: 'Enrique',
    surname: 'Sanz',
    email: 'enrique.sanz@email.com'
  },{
    id: 15,
    name: 'Enrique',
    surname: 'Sanz',
    email: 'enrique.sanz@email.com'
  },{
    id: 16,
    name: 'Enrique',
    surname: 'Sanz',
    email: 'enrique.sanz@email.com'
  },{
    id: 17,
    name: 'Enrique',
    surname: 'Sanz',
    email: 'enrique.sanz@email.com'
  },{
    id: 18,
    name: 'Enrique',
    surname: 'Sanz',
    email: 'enrique.sanz@email.com'
  },{
    id: 19,
    name: 'Enrique',
    surname: 'Sanz',
    email: 'enrique.sanz@email.com'
  }];
}