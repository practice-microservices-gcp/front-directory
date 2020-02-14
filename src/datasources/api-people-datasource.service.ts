import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.dev';

@Injectable({
    providedIn: 'root'
})
export class ApiPeopleDataSource {

    constructor(private http: HttpClient){}

    public getRequest(url: string, params?: {[key:string]: string}): Observable<any> {
        let uri = `${environment.apiHost}/${url}`;

        if (params) {
            params['key'] = environment.apiKey;
            const keyQueryParams = Object.keys(params);
            const leng = keyQueryParams.length;
            uri += '?';

            for (let i = 0; i < leng; i++) {
                uri += `${keyQueryParams[i]}=${params[keyQueryParams[i]]}`
                if (i < (leng - 1)) {
                    uri += '&'
                }
            }
        } else {
            uri +=`?key=${environment.apiKey}`;
        }

        return this.http.get(uri);
    }
}