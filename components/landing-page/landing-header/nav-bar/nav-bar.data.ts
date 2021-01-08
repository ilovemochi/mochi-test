import Route from '@constants/routes';
import { v4 } from 'uuid';

// eslint-disable-next-line import/prefer-default-export
export const MenuOptions = [
  { id: v4(), name: 'store', route: Route.MochiNight },
  { id: v4(), name: 'faq', route: Route.FAQ },
  { id: v4(), name: 'contacts', route: Route.Contact },
  { id: v4(), name: 'account', route: Route.Settings },
] as const;
