import { IGenericObject } from '@ilovemochi/types';
import { Currency } from 'dinero.js';

export interface GetMoneyData extends IGenericObject<any> {
  currency: Currency;
  price: number;
}
