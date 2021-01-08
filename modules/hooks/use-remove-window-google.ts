import { useEffect } from 'react';

const useRemoveWindowGoogle = () => {
  useEffect(() => {
    return () => {
      (window as any).google.maps = {};
    };
  }, []);
};

export default useRemoveWindowGoogle;
