import { AxiosPromise } from 'axios';
import { FeedbackType } from '../../components/Widget';
import { xhr } from './index';

interface ICreateFeedback {
  type: FeedbackType,
  screenshot: string | null,
  comment: string;
}

const createFeedback = (params: ICreateFeedback): AxiosPromise<void> => (
  xhr.post('/feedbacks', params)
);

export default {
  createFeedback,
};
