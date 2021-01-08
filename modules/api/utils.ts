import { IGenericObject } from '@ilovemochi/types';
import {
  addIndex,
  always,
  applySpec,
  compose,
  ifElse,
  pathOr,
  propOr,
  reduce,
  toPairs,
} from 'ramda';

import { FetchIt, Method } from './api-protocols';
import RefreshAuth from './auth/refresh-auth';

export const makeAuthorizationHeader = (accessToken: string) => ({
  Authorization: `Bearer ${accessToken}`,
});

export const getProductsImageUrl = (path: string) => `${process.env.NEXT_PUBLIC_S3_BUCKET}${path}`;

export const ServerException = applySpec({
  code: ifElse(propOr(false, 'isClient'), pathOr(10119, ['i18n', 'code']), always(10119)),
  value: ifElse(propOr(false, 'isClient'), pathOr(null, ['i18n', 'value']), always(null)),
});

export const objectToQuery = compose<
  IGenericObject<number | string>,
  [string, string | number][],
  string
>(
  addIndex<[string, string | number], string>(reduce)(
    (acc, [fst, snd], index) => acc.concat(index ? `&${fst}=${snd}` : `?${fst}=${snd}`),
    ''
  ),
  toPairs
);

export const fetchIt: FetchIt = ({ endpoint, method, url, extraHeaders, data }) =>
  fetch(`${endpoint}/${url}`, {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...extraHeaders,
    },
    ...(method !== 'GET' && { body: JSON.stringify(data) }),
  });

const request = (endpoint: string) => (method: Method) => async (
  url: string,
  data: IGenericObject<any> = {},
  extraHeaders: IGenericObject<string | number> = {}
) => {
  const response = await fetchIt({ endpoint, data, url, extraHeaders, method });

  if (response.status === 204)
    return {
      statusCode: response.status,
      data: {},
      authData: null,
    };

  let responseJSON = await response.json();

  if (response.ok)
    return {
      data: responseJSON,
      statusCode: response.status,
      authData: null,
    };

  if (response.status === 401) {
    const refreshAuthResponse = await RefreshAuth();
    if (refreshAuthResponse.ok) {
      const authData = await refreshAuthResponse.json();

      const retryResponse = await fetchIt({
        endpoint,
        data,
        url,
        extraHeaders: { ...extraHeaders, Authorization: `Bearer ${authData.accessToken}` },
        method,
      });

      responseJSON = await retryResponse.json();

      if (retryResponse.ok)
        return {
          data: responseJSON,
          statusCode: retryResponse.status,
          authData,
        };
    }
  }

  throw ServerException(responseJSON);
};

const serverRequest = request(process.env.NEXT_PUBLIC_SERVER_URL!);

export const serverPost = serverRequest('POST');
export const serverGet = serverRequest('GET');
