import { createAction, props, Action } from '@ngrx/store';
import { NoticeType } from '../../components';

export interface LoginErrorAction extends Action {
    errorType: NoticeType,
    errorMsg: string
}

export const loginErrorType = '[auth-user] Login fail';
export const loginError = createAction(
    loginErrorType,
    props<{ errorType: NoticeType, errorMsg: string}>()
);