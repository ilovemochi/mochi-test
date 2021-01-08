import RefreshAuth from '../refresh-auth';

global.fetch = jest.fn().mockResolvedValue('response');

describe(RefreshAuth.name, () => {
  it('attaches the cookie if it is not undefined', async () => {
    const result = await RefreshAuth();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('SERVER_URL/user/me', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    expect(result).toBe('response');
  });
  it('returns response from the server post', async () => {
    const result = await RefreshAuth('delicious');
    expect(fetch).toHaveBeenCalledWith('SERVER_URL/user/me', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Cookie: 'delicious',
      },
    });
    expect(result).toBe('response');
  });
});
