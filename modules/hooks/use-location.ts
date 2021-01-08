import { Address, Location } from '@ilovemochi/enums';
import { useState } from 'react';

import { ILocationState } from '../redux/redux.types';

const useLocation = () =>
  useState<ILocationState>({
    [Location.Lat]: null,
    [Location.Lng]: null,
    [Address.Street]: null,
  });

export default useLocation;
