import ErrorActionTypes from './error.enum';

export interface ClearAllErrorsReturn {
  type: ErrorActionTypes.CLEAR_ERROR;
}

export interface ClearAllErrors {
  (): ClearAllErrorsReturn;
}
