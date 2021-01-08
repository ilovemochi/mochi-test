import { Languages as L } from '@ilovemochi/enums';

export type ILangs = {
  [key in L]: string;
};

const Languages: ILangs = {
  [L.EN]: 'english',
  [L.PT]: 'portuguese',
};

export default Languages;
