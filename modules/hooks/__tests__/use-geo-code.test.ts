// eslint-disable-next-line max-classes-per-file
import { renderHook, waitFor } from '@test-utils';

import DEFAULT_CONFIG from '../../constants/config';
import useGeoCode from '../use-geo-code';
import useScript from '../use-script';

jest.mock('../use-script', () => ({ default: jest.fn(), __esModule: true }));

Object.defineProperty(process, 'browser', {
  value: true,
  writable: true,
});

const makeSut = (onChange: () => void, data = { placeId: 'id', componentRestrictions: {} }) =>
  renderHook(() => useGeoCode(data, onChange));

describe(useGeoCode.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns false and does not call the onChange', async () => {
    let done = false;

    (useScript as any).mockImplementation(({ callback }) => {
      if (!done) {
        callback();
      }
      done = true;
    });
    const onChange = jest.fn();
    const { result } = makeSut(onChange);

    await waitFor(() => expect(result.current).toBe(false));
    expect(useScript).toHaveBeenCalledWith({
      id: DEFAULT_CONFIG.GOOGLE_MAPS_SCRIPT_ID,
      src: `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`,
      callback: expect.any(Function),
      async: false,
    });
    expect(onChange).not.toHaveBeenCalled();
  });
  it('returns true if the script loads but does not call the onChange if the status is not ok', async () => {
    let done = false;

    (useScript as any).mockImplementation(({ callback }) => {
      if (!done) {
        callback();
      }
      done = true;
    });
    const geoCodeCB = jest.fn().mockImplementation((_, fn) => {
      fn([{ formatted_address: 'street_two' }], true);
    });

    const geoCode = jest.fn().mockImplementation(geoCodeCB);

    Object.defineProperty(window, 'google', {
      value: {
        maps: {
          Geocoder: class {
            geocode = geoCode;
          },
          GeocoderStatus: {
            OK: false,
          },
        },
      },
      writable: true,
    });

    const onChange = jest.fn();
    const { result } = makeSut(onChange);

    await waitFor(() => expect(result.current).toBe(true));
    expect(useScript).toHaveBeenCalledWith({
      id: DEFAULT_CONFIG.GOOGLE_MAPS_SCRIPT_ID,
      src: `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`,
      callback: expect.any(Function),
      async: false,
    });
    expect(onChange).not.toHaveBeenCalled();
  });

  it('returns true if the script loads but does not call the onChange if there is no placeId', async () => {
    let done = false;

    (useScript as any).mockImplementation(({ callback }) => {
      if (!done) {
        callback();
      }
      done = true;
    });
    const geoCodeCB = jest.fn().mockImplementation((_, fn) => {
      fn([{ formatted_address: 'street_two' }], true);
    });

    const geoCode = jest.fn().mockImplementation(geoCodeCB);

    Object.defineProperty(window, 'google', {
      value: {
        maps: {
          Geocoder: class {
            geocode = geoCode;
          },
          GeocoderStatus: {
            OK: true,
          },
        },
      },
      writable: true,
    });

    const onChange = jest.fn();
    const { result } = makeSut(onChange, {
      placeId: '',
      componentRestrictions: {},
    });
    await waitFor(() => expect(result.current).toBe(true));
    expect(useScript).toHaveBeenCalledWith({
      id: DEFAULT_CONFIG.GOOGLE_MAPS_SCRIPT_ID,
      src: `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`,
      callback: expect.any(Function),
      async: false,
    });
    expect(onChange).not.toHaveBeenCalled();
  });

  it('returns true if the script loads but does not call the onChange if the status is not ok', async () => {
    let done = false;

    (useScript as any).mockImplementation(({ callback }) => {
      if (!done) {
        callback();
      }
      done = true;
    });
    const geoCodeCB = jest.fn().mockImplementation((_, fn) => {
      fn([{ formatted_address: 'street_two' }], true);
    });

    const geoCode = jest.fn().mockImplementation(geoCodeCB);

    Object.defineProperty(window, 'google', {
      value: {
        maps: {
          Geocoder: class {
            geocode = geoCode;
          },
          GeocoderStatus: {
            OK: false,
          },
        },
      },
      writable: true,
    });

    const onChange = jest.fn();
    const { result } = makeSut(onChange);

    await waitFor(() => expect(result.current).toBe(true));
    expect(useScript).toHaveBeenCalledWith({
      id: DEFAULT_CONFIG.GOOGLE_MAPS_SCRIPT_ID,
      src: `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`,
      callback: expect.any(Function),
      async: false,
    });
    expect(onChange).not.toHaveBeenCalled();
  });

  it('returns true if the script loads and calls the onChange', async () => {
    let done = false;

    (useScript as any).mockImplementation(({ callback }) => {
      if (!done) {
        callback();
      }
      done = true;
    });
    const geoCodeCB = jest.fn().mockImplementation((_, fn) => {
      fn([{ formatted_address: 'street_two' }], true);
    });

    const geoCode = jest.fn().mockImplementation(geoCodeCB);

    Object.defineProperty(window, 'google', {
      value: {
        maps: {
          Geocoder: class {
            geocode = geoCode;
          },
          GeocoderStatus: {
            OK: true,
          },
        },
      },
      writable: true,
    });

    const onChange = jest.fn();
    const { result } = makeSut(onChange);

    await waitFor(() => expect(result.current).toBe(true));
    expect(useScript).toHaveBeenCalledWith({
      id: DEFAULT_CONFIG.GOOGLE_MAPS_SCRIPT_ID,
      src: `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`,
      callback: expect.any(Function),
      async: false,
    });
    expect(onChange).toHaveBeenCalledWith([{ formatted_address: 'street_two' }]);
  });
});
