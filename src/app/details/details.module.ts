import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRouterModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { DetailPersonModule } from '../../detail-person';
import { LogoutModule } from 'src/logout';
import { HomeNotificationModule } from 'src/home-notifications';
import { LoadingHomeModule } from 'src/loading-home';

@NgModule({
  declarations: [ DetailsComponent ],
  imports: [
    CommonModule,
    DetailPersonModule,
    DetailsRouterModule,
    LogoutModule,
    HomeNotificationModule,
    LoadingHomeModule
  ]
})
export class DetailsModule {}