import { renderHook } from '@testing-library/react-hooks';

import useIsMounted from './use-is-mounted';

describe('useIsMounted hook', () => {
  const { result, unmount } = renderHook(() => useIsMounted());

  it('it should return true, after component is mounted', () => {
    expect(result.current.current).toBe(true);
  });

  it('it should return false, after component is unmounted', () => {
    unmount();
    expect(result.current.current).toBe(false);
  });
});
