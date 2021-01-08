import { I18nContext } from '@utils/i18n';
import { isNil } from 'ramda';
import { useContext } from 'react';

interface Keys {
  count?: number;
  [arg: string]: any;
}
const useI18n = () => {
  const { t, ...otherProps } = useContext(I18nContext);

  const translation = (key: string, args?: Keys): string => {
    const plural = new Intl.PluralRules();
    if (args) {
      const { count } = args;
      return t(`${key}${!isNil(count) ? `.${plural.select(count)}` : ''}`, args);
    }
    return t(key);
  };

  return {
    t: translation,
    ...otherProps,
  };
};

export type Translation = (key: string, args?: Keys) => string;

export default useI18n;
