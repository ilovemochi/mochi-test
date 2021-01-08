import { Rosetta } from 'rosetta';

export interface I18nState {
  activeLocale: string;
  locale: (l: string, dict: any) => void;
  t: Rosetta<unknown>['t'];
}

export interface I18nProps {
  locale: string;
  lngDict: Record<string, string>;
}
