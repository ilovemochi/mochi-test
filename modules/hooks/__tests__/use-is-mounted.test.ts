import { renderHook } from '@test-utils';

import useIsMounted from '../use-is-mounted';

describe(`useIsMounted hook`, () => {
  it('checking that the hook is actually assembling', () => {
    const { result, unmount } = renderHook(() => useIsMounted());

    expect(result.current.current).toBe(true);
    unmount();
    expect(result.current.current).toBe(false);
  });
});
