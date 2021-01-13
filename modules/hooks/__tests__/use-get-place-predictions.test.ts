// eslint-disable-next-line max-classes-per-file
import { renderHook, waitFor } from '@test-utils';

import DEFAULT_CONFIG from '../../constants/config';
import useGetPlacePredictions from '../use-get-place-predictions';
import useScript from '../use-script';

jest.mock('../use-script', () => {
  return {
    default: jest.fn(),
    __esModule: true,
  };
});

const makeSut = (onChange: () => void, data = { input: 'input' }) =>
  renderHook(() => useGetPlacePredictions(data, onChange));

describe(useGetPlacePredictions.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('returns false if the if there is no google maps auto complete service in the window', async () => {
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

  it('returns true if the script loaded but does not call the onChange if there is no request input', async () => {
    let done = false;

    (useScript as any).mockImplementation(({ callback }) => {
      if (!done) {
        callback();
      }
      done = true;
    });
    const getPlacePredictionsCB = jest.fn().mockImplementation((_, fn) => {
      fn([{ description: 'description', place_id: 'id', formatted_address: 'street' }], true);
    });

    const getPlacePredictions = jest.fn().mockImplementation(getPlacePredictionsCB);

    Object.defineProperty(window, 'google', {
      value: {
        maps: {
          places: {
            AutocompleteService: class {
              getPlacePredictions = getPlacePredictions;
            },
            PlacesServiceStatus: {
              OK: true,
            },
          },
        },
      },
      writable: true,
    });

    const onChange = jest.fn();
    const { result } = makeSut(onChange, { input: '' });

    await waitFor(() => expect(result.current).toBe(true));
    expect(useScript).toHaveBeenCalledWith({
      id: DEFAULT_CONFIG.GOOGLE_MAPS_SCRIPT_ID,
      src: `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`,
      callback: expect.any(Function),
      async: false,
    });
    expect(onChange).not.toHaveBeenCalled();
  });

  it('returns true if the script loaded but the auto complete service status is not ok', async () => {
    let done = false;

    (useScript as any).mockImplementation(({ callback }) => {
      if (!done) {
        callback();
      }
      done = true;
    });
    const getPlacePredictionsCB = jest.fn().mockImplementation((_, fn) => {
      fn([{ description: 'description', place_id: 'id', formatted_address: 'street' }], true);
    });

    const getPlacePredictions = jest.fn().mockImplementation(getPlacePredictionsCB);

    Object.defineProperty(window, 'google', {
      value: {
        maps: {
          places: {
            AutocompleteService: class {
              getPlacePredictions = getPlacePredictions;
            },
            PlacesServiceStatus: {
              OK: false,
            },
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

  it('returns true and calls the onChange', async () => {
    let done = false;

    (useScript as any).mockImplementation(({ callback }) => {
      if (!done) {
        callback();
      }
      done = true;
    });
    const getPlacePredictionsCB = jest.fn().mockImplementation((_, fn) => {
      fn([{ description: 'description', place_id: 'id', formatted_address: 'street' }], true);
    });

    const getPlacePredictions = jest.fn().mockImplementation(getPlacePredictionsCB);

    Object.defineProperty(window, 'google', {
      value: {
        maps: {
          places: {
            AutocompleteService: class {
              getPlacePredictions = getPlacePredictions;
            },
            PlacesServiceStatus: {
              OK: true,
            },
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
    expect(onChange).toHaveBeenCalledWith([
      { description: 'description', place_id: 'id', formatted_address: 'street' },
    ]);
  });
});
