import { serverGet } from '../utils';
import { TGetLanguage } from './others-protocol';

// eslint-disable-next-line import/prefer-default-export
export const GetLanguage: TGetLanguage = lang => serverGet(`language/${lang || ''}`);
