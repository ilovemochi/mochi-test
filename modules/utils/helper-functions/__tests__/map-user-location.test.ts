import { mapUserLocation } from '../index';

const makeSut = () => ({ sut: mapUserLocation });

describe('mapUserLocation', () => {
  test('if mapUserLocation omit city, country, zip, and street', () => {
    const { sut } = makeSut();

    const data = {
      city: 'city',
      country: 'country',
      street: 'street',
      zip: 'zip',
      lat: 1,
      lng: 2,
    };

    const result = sut(data);

    expect(result.city).toBeUndefined();
    expect(result.country).toBeUndefined();
    expect(result.street).toBeUndefined();
    expect(result.zip).toBeUndefined();
    expect(result.coordinates).toBeUndefined();

    expect(result.location.address.city).toBe(data.city);
    expect(result.location.address.country).toBe(data.country);
    expect(result.location.address.street).toBe(data.street);
    expect(result.location.address.zip).toBe(data.zip);
    expect(result.location.coordinates).toEqual([data.lng, data.lat]);
  });
});
