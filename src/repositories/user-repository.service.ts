import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class UserRepositoryService {

    constructor(private auth: AngularFireAuth) {}

    public doLogin(user: string, password: string): Observable<any> {
        return of('OK');
    }

    public createNewUser(user:string, password:string): Observable<any> {
        return of('OK');
    }

    public isSessionActive(): Observable<boolean> {
        return from(this.auth.currentUser)
        .pipe(
            map((user: firebase.User) => !!user)
        )
    }

    public logout(): Observable<boolean> {
        return of(true)
    }
}