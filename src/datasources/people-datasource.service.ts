import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { DataTable } from '../components';

@Injectable({
  providedIn: 'root'
})
export class PeopleDataSourceService {

  private data: DataTable[] = [{
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
    name: 'Jose Maria',
    surname: 'Rajoy',
    email: 'josem.rajoy.sanz@email.com'
  },{
    id: 10,
    name: 'Mariano',
    surname: 'Aznar',
    email: 'mariano.aznar@email.com'
  },{
    id: 11,
    name: 'Meritxell',
    surname: 'Oreja',
    email: 'meri.oreja@email.com'
  },{
    id: 12,
    name: 'Mayor',
    surname: 'Batet',
    email: 'mayor.batet@email.com'
  },{
    id: 13,
    name: 'Felipe',
    surname: 'Fraga',
    email: 'felipe.fraga@email.com'
  },{
    id: 14,
    name: 'Manuel',
    surname: 'Gonzalez',
    email: 'manuel.gonzalez@email.com'
  },{
    id: 15,
    name: 'Julio',
    surname: 'Guerra',
    email: 'julio.guerra@email.com'
  },{
    id: 16,
    name: 'Alfonso',
    surname: 'Anguita',
    email: 'alfonso.anguita@email.com'
  },{
    id: 17,
    name: 'Celia',
    surname: 'Aguirre',
    email: 'celia.aguirre@email.com'
  },{
    id: 18,
    name: 'Esperanza',
    surname: 'Villalobos',
    email: 'esperanza.villalobos@email.com'
  },{
    id: 19,
    name: 'Jorge',
    surname: 'Alarcon',
    email: 'jorge.alarcon@email.com'
  }];

  private observableAnswer(data: any): Observable<any> {
    return from(new Promise((resolve) => {
      setTimeout(() => { resolve(data); }, 300);
    }))
  }

  public getPerson(id: any): Observable<any> {
    return this.observableAnswer(this.data.filter(person => person.id === id)[0]);
  }

  public getPeople(offset: number, limit: number) {
    const response = {
      data: this.data.slice(offset, (offset+limit)),
      offset: offset, 
      limit: limit,
      total: this.data.length
    }
    return this.observableAnswer(response);
  }
}