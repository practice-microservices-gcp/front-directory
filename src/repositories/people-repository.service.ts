import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}