import { createConstantAction } from '../redux-helpers';
import ErrorActionTypes from './error.enum';
import { ClearAllErrors } from './error.types';

// eslint-disable-next-line import/prefer-default-export
export const clearAllErrors: ClearAllErrors = createConstantAction(ErrorActionTypes.CLEAR_ERROR);
