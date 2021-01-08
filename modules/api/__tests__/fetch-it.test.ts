import { fetchIt } from '../utils';

const makeSut = () => ({ sut: fetchIt });

global.fetch = jest.fn().mockResolvedValue('response');

describe(fetchIt.name, () => {
  afterEach(() => {
    (fetch as any).mockClear();
  });
  it('calls fetch with the right data', async () => {
    const { sut } = makeSut();
    const result = await sut({
      endpoint: 'endpoint',
      method: 'GET',
      data: { value: 'key' },
      extraHeaders: { Cookie: 'delicious' },
      url: 'url',
    });
    expect(fetch).toHaveBeenCalledWith('endpoint/url', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Cookie: 'delicious',
      },
    });
    expect(result).toBe('response');
  });

  it('attaches the body to fetch if it not a  get request', async () => {
    const { sut } = makeSut();
    const result = await sut({
      endpoint: 'endpoint',
      method: 'PATCH',
      data: { value: 'key' },
      extraHeaders: { Cookie: 'delicious' },
      url: 'url',
    });
    expect(fetch).toHaveBeenCalledWith('endpoint/url', {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Cookie: 'delicious',
      },
      body: JSON.stringify({ value: 'key' }),
    });
    expect(result).toBe('response');
  });
});
