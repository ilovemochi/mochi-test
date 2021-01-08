import { useEffect, useRef } from 'react';

const useEffectAfterMount = (callback: Function, dependencies: ReadonlyArray<any>) => {
  const componentJustMounted = useRef(true);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!componentJustMounted.current) {
      return callback();
    }
    componentJustMounted.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies]);
};

export default useEffectAfterMount;
