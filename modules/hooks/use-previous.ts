import { MutableRefObject, useEffect, useRef } from 'react';

const usePrevious = <T>(value: T) => {
  const ref: MutableRefObject<undefined | T> = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;
