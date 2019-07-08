import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PeopleDataSourceService } from '../datasources'


@Injectable({
  providedIn: 'root'
})
export class PeopleRepositoryService {

  constructor(
    private dataSource: PeopleDataSourceService
  ) {}

  public getOnePerson(id: any): Observable<any> {
    return this.dataSource.getPerson(id);
  }

  public getOnePagePeople(offset: number, limit: number): Observable<any> {
    return this.dataSource.getPeople(offset, limit);
  }
}