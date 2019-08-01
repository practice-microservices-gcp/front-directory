import { createAction, props, Action } from '@ngrx/store';
import { DataListProperties } from '../../components';

export interface DetailsSuccessAction extends Action {
  data: DataListProperties;
}

export const detailSuccessType = '[detail-people] Details obtained successfully';
export const detailsSuccess = createAction(
  detailSuccessType,
  props<{data: DataListProperties}>()
)