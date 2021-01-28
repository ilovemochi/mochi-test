import { renderHook } from '@testing-library/react-hooks';
import { useIsMounted } from './../index';

describe('Testing a isMounted hook', () => {
  it('The hook is mounted ? ', () => {
    const { result } = renderHook(useIsMounted);

    expect(result.current.current).toBe(true);
  });

  it('The hook is unmounted ? ', () => {
    const { result, unmount } = renderHook(useIsMounted);

    unmount();

    expect(result.current.current).toBe(false);
  });
});
