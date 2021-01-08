import { MakeTestLocation } from '@ilovemochi/test-suite';

import { getStreetFromPlaceObject } from '../index';

const makeSut = () => ({ sut: getStreetFromPlaceObject });

const location = MakeTestLocation();

describe('getStreetFromPlaceObject', () => {
  it('get Street from placeObject if have formatted_address has prop', () => {
    const { sut } = makeSut();
    const data: any = {
      formatted_address: 'street',
      geometry: {
        location: {
          lng: () => location.coordinates[0],
          lat: () => location.coordinates[1],
        },
      },
    };
    const result = sut(data);
    expect(result).toBe('street');
  });

  it(`sets the street to "" if the prop formatted_address is not present`, () => {
    const { sut } = makeSut();
    const data: any = {
      geometry: {
        location: {
          lng: () => location.coordinates[0],
          lat: () => location.coordinates[1],
        },
      },
    };
    const result = sut(data);
    expect(result).not.toBe('street');
    expect(result).toBe('');
  });

  it(`don't get Street from placeObject because it don't have lat has prop`, () => {
    const { sut } = makeSut();
    const data: any = {};
    const result = sut(data);
    expect(result).not.toBe('street');
    expect(result).toBe('');
  });
});
