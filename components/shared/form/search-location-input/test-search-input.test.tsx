// eslint-disable-next-line max-classes-per-file
import useScript from '@hooks/use-script';
import { act, render, screen, userEvent } from '@test-utils';

import SearchLocationInput from '.';

jest.mock('../../../../modules/hooks/use-script', () => ({ __esModule: true, default: jest.fn() }));

Object.defineProperty(process, 'browser', {
  value: true,
  writable: true,
});

const placeholder = 'location';

const makeSut = ({ errors = {}, disabled = false, handleChange = jest.fn() }) =>
  render(
    <SearchLocationInput
      handleChange={handleChange}
      errors={errors}
      disabled={disabled}
      placeholder={placeholder}
    />
  );

describe('SearchLocationInput', () => {
  const addressToLookFor = 'address';

  it('renders the component', () => {
    makeSut({});
    expect(screen.getByPlaceholderText('location')).toBeTruthy();
  });

  it('should not allow typing when disabled', async () => {
    const { queryByDisplayValue } = makeSut({});

    userEvent.type(screen.getByPlaceholderText(placeholder), addressToLookFor);
    expect(queryByDisplayValue(addressToLookFor)).toBeNull();
  });

  it('should show a list of suggestions appear when typing', async () => {
    let done = false;

    (useScript as any).mockImplementation(({ callback }) => {
      if (!done) {
        callback();
      }
      done = true;
    });
    const getPlacePredictions = jest.fn().mockImplementation((_, fn) => {
      fn([{ description: 'description', place_id: 'id', formatted_address: 'street' }], true);
    });

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

    makeSut({});

    const searchInput = screen.getByPlaceholderText(placeholder);
    // eslint-disable-next-line no-void
    act(() => void userEvent.type(searchInput, addressToLookFor));
    // eslint-disable-next-line no-void
    act(() => void jest.advanceTimersByTime(1000));

    const predictionItemButton = await screen.findByText('street');

    expect(predictionItemButton).toBeDefined();
  });
});
