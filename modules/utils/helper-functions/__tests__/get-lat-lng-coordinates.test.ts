import { MakeTestStore } from '@ilovemochi/test-suite';

import { getLatLngCoordinates } from '../index';

const makeSut = () => ({ sut: getLatLngCoordinates });

describe('getLatLngCoordinates', () => {
  it('expect to return the lat and lng from store data', () => {
    const { sut } = makeSut();
    const store = MakeTestStore();
    const result = sut(store);

    const expectedLatLng = {
      lng: store.location.coordinates[0],
      lat: store.location.coordinates[1],
    };
    expect(result).toEqual(expectedLatLng);
  });
});
