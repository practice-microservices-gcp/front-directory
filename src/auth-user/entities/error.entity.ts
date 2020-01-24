import { NoticeType} from '../../components';

export interface Error {
    errorType: NoticeType;
    errorMsg: string;
}