import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiPeopleDataSource } from '../datasources';
import { DataTable, DataListProperties } from '../components';


@Injectable({
  providedIn: 'root'
})
export class PeopleRepositoryService {

  constructor(
    private apiDataSource: ApiPeopleDataSource
  ) {}

  public getOnePerson(id: any): Observable<DataListProperties> {
    const url = `people/${id}`
    return this.apiDataSource.getRequest(url)
  }

  public getOnePagePeople(offset: number, limit: number): Observable<DataTable> {
    const params = {
      offset: `${offset}`,
      limit: `${limit}`
    };

    const url = 'people';
    return this.apiDataSource.getRequest(url, params)
    .pipe(
      map((response: any)=>{
        return {
          limit: response.metadata.limit,
          offset: response.metadata.offset,
          total: response.metadata.total,
          data: response.data
        };
      })
    )
  }

  public saveOnePeople(name: string, surname: string, email: string): Observable<any> {
    return this.apiDataSource.postRequest('people', {name, surname, email});
  }
}