import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export interface RouterState {
  url: string;
  params: Params,
  queryParams: Params,
  data: any
}

export class CustomRouterSerializer implements RouterStateSerializer<RouterState> {

  serialize(routerState: RouterStateSnapshot): RouterState {
    let route = routerState.root;

    while(route.firstChild) {
      route = route.firstChild;
    }

    const { params, data } = route;
    const {
      url,
      root: { queryParams }
    } = routerState

    return { url, params, queryParams, data };
  }
}