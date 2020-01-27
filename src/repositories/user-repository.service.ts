import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserRepositoryService {

    public doLogin(user: string, password: string): Observable<any> {
        return of('OK')
    }
}