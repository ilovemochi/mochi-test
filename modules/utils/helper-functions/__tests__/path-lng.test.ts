import { pathLng } from '../index';

const makeSut = () => ({ sut: pathLng });

describe('pathLng', () => {
  it('expect to get lng from given object', () => {
    const { sut } = makeSut();

    const store: any = { geometry: { location: { lng: -122.5 } } };
    const result = sut(store);
    expect(result).toBe(-122.5);
  });
});
