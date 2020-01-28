import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';

import { UserRepositoryService } from '../../repositories';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SessionGuardService implements CanActivateChild {

    constructor(
        private userRepo: UserRepositoryService,
        private router: Router
    ) {}

    canActivateChild(): Observable<boolean> {
        return this.userRepo.isSessionActive()
        .pipe(
            tap((isSession: boolean) => {
                if (!isSession) {
                    this.router.navigateByUrl('/login')
                }
            })
        )
    }

}