import { useEffect } from 'react';

import { loadScript, noop, removeScript } from '../utils/helper-functions';

export interface UseScriptData {
  src: string;
  callback?: () => void;
  id: string;
  async: boolean;
}

export type UseScript = (data: UseScriptData) => void;

const useScript: UseScript = ({ id, src, callback = noop, async }) => {
  useEffect(() => {
    loadScript({ id, src, callback, async });
    return () => {
      removeScript(id);
    };
  }, [id, src]);
};

export default useScript;
