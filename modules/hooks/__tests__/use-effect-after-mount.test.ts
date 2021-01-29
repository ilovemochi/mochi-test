import { renderHook, act } from '@testing-library/react-hooks';
import { useEffectAfterMount } from './../index';

describe('Testing a useEffectAfterMount hook', () => {
  it('Is the useEffect called after mount', () => {
    var n = 5;

    const simpleFun: Function = () => {
      n = 7;
    };

    const { result } = renderHook(() => useEffectAfterMount(() => simpleFun(), [n]));
    expect(result.current).toBeUndefined();

    act(() => {
      expect(simpleFun);
    });

    expect(n).toBe(7);
  });

  // it('Fail when not passing a dependecies', () => {});

  // it('Fail when not passing the callback', () => {});
});
