import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PeopleDataSourceService } from '../datasources'
import { DataTable, DataListProperties } from '../components';


@Injectable({
  providedIn: 'root'
})
export class PeopleRepositoryService {

  constructor(
    private dataSource: PeopleDataSourceService
  ) {}

  public getOnePerson(id: any): Observable<DataListProperties> {
    return this.dataSource.getPerson(id);
  }

  public getOnePagePeople(offset: number, limit: number): Observable<DataTable[]> {
    return this.dataSource.getPeople(offset, limit);
  }

  public saveOnePeople(name: string, surname: string, email: string): Observable<any> {
    return of('OK')
  }
}