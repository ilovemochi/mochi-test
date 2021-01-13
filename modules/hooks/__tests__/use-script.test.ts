import { renderHook } from '@test-utils';

import { loadScript, removeScript } from '../../utils/helper-functions';
import useScript from '../use-script';

jest.mock('../../utils/helper-functions', () => ({
  noop: jest.fn(),
  loadScript: jest.fn(),
  removeScript: jest.fn(),
}));

describe(`use script hook`, () => {
  it('you must load the script and check if it is on the page with the data passed', async () => {
    const { unmount, result } = renderHook(() =>
      useScript({ async: false, id: 'SameValidId', src: 'ValidSrc', callback: () => {} })
    );

    expect(result.current).toBeUndefined();
    expect(loadScript).toHaveBeenCalledWith({
      async: false,
      id: 'SameValidId',
      src: 'ValidSrc',
      callback: expect.any(Function),
    });
    unmount();
    expect(result.current).toBeUndefined();
    expect(removeScript).toHaveBeenCalledWith('SameValidId');
  });
});
