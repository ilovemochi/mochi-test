import { makeAuthorizationHeader } from '../utils';

const makeSut = () => ({ sut: makeAuthorizationHeader });

describe(makeAuthorizationHeader.name, () => {
  it('properly formats the authorization headers', () => {
    const { sut } = makeSut();
    const result = sut('access_token');
    expect(result).toEqual({ Authorization: 'Bearer access_token' });
  });
});
