import { renderHook, act } from '@testing-library/react-hooks';
import { useWindowSize } from './../index';

describe('Test the window Size Hook', () => {
  it('Check if the hook is getting a real size of device', () => {
    const { result } = renderHook(() => useWindowSize());

    const reallSize = { width: window.innerWidth, height: window.innerHeight };

    expect(result.current).toEqual(reallSize);
  });

  it('Check if it is getting a size on resize event', () => {
    const { result } = renderHook(() => useWindowSize());

    const resizedValues = { width: 1200, height: 500 };

    act(() => {
      Object.defineProperties(window, {
        innerHeight: {
          writable: true,
          configurable: true,
          value: resizedValues.height,
        },
        innerWidth: {
          writable: true,
          configurable: true,
          value: resizedValues.width,
        },
      });

      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toEqual(resizedValues);
  });
});
