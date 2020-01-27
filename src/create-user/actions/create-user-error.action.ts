import { createAction, props, Action} from '@ngrx/store';
import { NoticeType } from '../../components';

export interface NewUserErrorAction extends Action {
    errorType: NoticeType,
    errorMsg: string
}

export const newUserErrorType = '[new-user] User creation has failed';
export const newUserError = createAction(
    newUserErrorType,
    props<{errorType: NoticeType, errorMsg: string}>()
);
