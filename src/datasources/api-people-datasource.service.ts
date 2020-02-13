import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiPeopleDataSource {

    constructor(private http: HttpClient){}

    public getRequest(url: string, params?: {[key:string]: string}): Observable<any> {
        let uri = `${environment.apiHost}/${url}`;

        if (params) {
            const keyQueryParams = Object.keys(params);
            const leng = keyQueryParams.length;
            uri += '?';

            for (let i = 0; i < leng; i++) {
                uri += `${keyQueryParams[i]}=${params[keyQueryParams[i]]}`
                if (i < (leng - 1)) {
                    uri += '&'
                }
            }
        }

        return this.http.get(uri);
    }
}