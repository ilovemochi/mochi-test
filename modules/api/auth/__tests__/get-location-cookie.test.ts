import { serverGet } from '../../utils';
import { GetLocationCookie } from '../index';

jest.mock('../../utils.ts', () => ({
  serverGet: jest.fn().mockResolvedValue('response'),
}));

describe(GetLocationCookie.name, () => {
  const payload = {
    lat: '232342432',
    lng: '23423424',
  };

  it('calls the server get with the right data', async () => {
    await GetLocationCookie(payload);
    expect(serverGet).toHaveBeenCalledTimes(1);
    expect(serverGet).toHaveBeenCalledWith(`user/location?lat=${payload.lat}&lng=${payload.lng}`);
  });
  it('returns response from the server get', async () => {
    const result = await GetLocationCookie(payload);
    expect(result).toBe('response');
  });
});
