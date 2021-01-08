import { formatGeoCodeResult } from '../index';

const makeSut = () => ({ sut: formatGeoCodeResult });
describe(formatGeoCodeResult.name, () => {
  it('to returns to formatGeoCodeResult in object with properties street, lat and lng ', () => {
    const { sut } = makeSut();
    const geoCode: any = {
      formatted_address: 'street',
      geometry: { location: { lat: () => 1, lng: () => 2 } },
    };
    const geoCodeResult = sut(geoCode);
    expect(geoCodeResult).toHaveProperty('street');
    expect(geoCodeResult).toHaveProperty('lat');
    expect(geoCodeResult).toHaveProperty('lng');
    expect(geoCodeResult.lng).toBe(2);
    expect(geoCodeResult.lat).toBe(1);
    expect(geoCodeResult.street).toBe('street');
  });
});
