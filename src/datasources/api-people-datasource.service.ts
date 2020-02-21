import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.dev';
import { concatMap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiPeopleDataSource {

    constructor(
        private http: HttpClient,
        private auth: AngularFireAuth
    ) { }

    private setAuthHeaders(): Observable<HttpHeaders> {
       return this.auth.idToken
       .pipe(
           map((token: string) => new HttpHeaders({
            'Authorization': `Bearer ${token}`
           }))
       );
    }

    private addParams(url: string, params?: {[key:string]: string}): string {
        if (params) {
            params['key'] = environment.apiKey;
            const keyQueryParams = Object.keys(params);
            const leng = keyQueryParams.length;
            url += '?';

            for (let i = 0; i < leng; i++) {
                url += `${keyQueryParams[i]}=${params[keyQueryParams[i]]}`
                if (i < (leng - 1)) {
                    url += '&'
                }
            }
        } else {
            url += `?key=${environment.apiKey}`;
        }

        return url;
    }

    public getRequest(url: string, params?: { [key: string]: string }): Observable<any> {
        return this.setAuthHeaders()
        .pipe(
            concatMap((headers: HttpHeaders) => {
                let uri = `${environment.apiHost}/${url}`;

                uri = this.addParams(uri, params);

                return this.http.get(uri, { headers: headers});
            })
        )
    }

    public postRequest(url: string, body: {[key:string]: any}): Observable <any> {
        return this.setAuthHeaders()
        .pipe(
            concatMap((headers: HttpHeaders) => {
                let uri = `${environment.apiHost}/${url}`;
                uri = this.addParams(uri);

                return this.http.post(uri, body, {headers: headers});
            })
        )
    }
}