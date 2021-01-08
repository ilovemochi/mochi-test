import { BadRequestBody } from '@ilovemochi/types';

import RefreshAuth from '../auth/refresh-auth';
import { serverPost } from '../utils';

const makeSut = () => ({ sut: serverPost });

jest.mock('../auth/refresh-auth', () => ({ __esModule: true, default: jest.fn() }));

describe(serverPost.name, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls request with the right data and returns the result if ok', async () => {
    global.fetch = jest.fn(
      () =>
        Promise.resolve({ json: () => Promise.resolve('response'), ok: true, status: 200 }) as any
    );

    const { sut } = makeSut();
    const result = await sut('endpoint', { key: 'value' }, { cookie: 'delicious' });
    expect(fetch).toHaveBeenCalledWith('SERVER_URL/endpoint', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        cookie: 'delicious',
      },
      body: JSON.stringify({ key: 'value' }),
    });
    expect(result).toEqual({ data: 'response', statusCode: 200, authData: null });
  });

  it('calls request with the right data and returns a empty result', async () => {
    global.fetch = jest.fn(() => Promise.resolve({ ok: true, status: 204 }) as any);

    const { sut } = makeSut();
    const result = await sut('endpoint', { key: 'value' }, { cookie: 'delicious' });
    expect(fetch).toHaveBeenCalledWith('SERVER_URL/endpoint', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        cookie: 'delicious',
      },
      body: JSON.stringify({ key: 'value' }),
    });
    expect(result).toEqual({ data: {}, statusCode: 204, authData: null });
  });

  it('does not retry the endpoint if status is 401 but the response is not ok', async () => {
    const errorResponse: BadRequestBody = {
      i18n: {
        code: 10000,
        value: null,
      },
      message: 'default error',
      isClient: true,
      name: 'error',
    };

    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(errorResponse),
          ok: false,
          status: 401,
        }) as any
    );

    (RefreshAuth as any).mockResolvedValue({
      ok: false,
      status: 401,
      json: () => Promise.resolve(),
    });

    const { sut } = makeSut();
    try {
      await sut('fail_endpoint', { key: 'value' });
      expect(fetch).toHaveBeenCalledWith('SERVER_URL/fail_endpoint', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: 'value' }),
      });
    } catch (error) {
      expect(error).toEqual(errorResponse.i18n);
      expect(RefreshAuth).toHaveBeenCalledTimes(1);
    }
  });

  it('throws an error if ok is false', async () => {
    const errorResponse: BadRequestBody = {
      i18n: {
        code: 10000,
        value: null,
      },
      message: 'default error',
      isClient: true,
      name: 'error',
    };

    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(errorResponse),
          ok: false,
          status: 400,
        }) as any
    );

    const { sut } = makeSut();
    try {
      await sut('fail_endpoint');
    } catch (error) {
      expect(fetch).toHaveBeenCalledWith('SERVER_URL/fail_endpoint', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
      expect(error).toEqual(errorResponse.i18n);
    }
  });

  it('retries the endpoint if the status from the first call is 401 and the retry response is ok', async () => {
    let done = false;
    global.fetch = jest.fn(() => {
      if (!done) {
        done = true;
        return Promise.resolve({
          json: () => Promise.resolve({ data: 'value' }),
          ok: false,
          status: 401,
        }) as any;
      }
      return Promise.resolve({
        json: () => Promise.resolve({ data: 'value' }),
        ok: true,
        status: 200,
      }) as any;
    });

    (RefreshAuth as any).mockResolvedValue({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({ accessToken: 'access_token' }),
    });

    const { sut } = makeSut();

    const result = await sut('url');
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(RefreshAuth).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('SERVER_URL/url', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer access_token',
      },
      body: JSON.stringify({}),
    });
    expect(result).toMatchObject({
      data: { data: 'value' },
      authData: { accessToken: 'access_token' },
    });
  });
});
