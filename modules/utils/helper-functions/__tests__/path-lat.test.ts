import { pathLat } from '../index';

const makeSut = () => ({ sut: pathLat });

describe('pathLng', () => {
  it('expect to get lng from given object', () => {
    const { sut } = makeSut();

    const store: any = { geometry: { location: { lat: 37.7 } } };
    const result = sut(store);
    expect(result).toBe(37.7);
  });
});
