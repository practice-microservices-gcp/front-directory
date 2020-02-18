import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.dev';
import { concatMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiPeopleDataSource {

    constructor(
        private http: HttpClient,
        private auth: AngularFireAuth
    ) { }

    public getRequest(url: string, params?: { [key: string]: string }): Observable<any> {
        return this.auth.idToken
            .pipe(
                concatMap((token: string) => {
                    const headers: HttpHeaders = new HttpHeaders({
                        'Authorization': `Bearer ${token}`
                    });

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
                        uri += `?key=${environment.apiKey}`;
                    }
                    return this.http.get(uri, { headers: headers });
                })
            )
    }
}