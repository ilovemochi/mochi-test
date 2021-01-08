import { ServerException } from '../utils';

const makeSut = () => ({ sut: ServerException });

describe(ServerException.name, () => {
  it('formats the response properly if it is an client error', () => {
    const { sut } = makeSut();

    const result = sut({ isClient: true, i18n: { code: 100, value: 'value' } });
    expect(result).toEqual({ code: 100, value: 'value' });
  });

  it('sets default values if it is not an client error', () => {
    const { sut } = makeSut();

    const result = sut({ isClient: false, i18n: { code: 100, value: 'value' } });
    expect(result).toEqual({ code: 10119, value: null });
  });

  it('sets default values if it is a client error with wrong data', () => {
    const { sut } = makeSut();

    const result = sut({ isClient: true });
    expect(result).toEqual({ code: 10119, value: null });
  });
});
