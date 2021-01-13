import { v4 } from 'uuid';

import Route, { TRoute } from '../routes';

const NavbarData = [
  { name: 'home', route: Route.Home, id: v4(), phoneOnly: false },
  { name: 'store', route: `${Route.MochiNight}`, id: v4(), phoneOnly: false, located: true },
  { name: 'faq', route: Route.FAQ, id: v4(), phoneOnly: false },
  { name: 'contacts', route: Route.Contact, id: v4(), phoneOnly: false },
] as Array<{ name: string; route: TRoute; id: string; phoneOnly: boolean }>;

export const NavbarUserData = [
  { name: 'orders', route: Route.Orders, id: v4() },
  { name: 'account', route: Route.Settings, id: v4() },
];

export default NavbarData;
