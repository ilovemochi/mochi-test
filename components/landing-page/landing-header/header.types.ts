import { IUser } from '@ilovemochi/types';

export interface UserMenuProps {
  user: IUser;
  loading: boolean;
}

export interface ExploreButtonProps {
  value: string;
  onClick: () => void;
}

export interface MobileHeaderContentProps {
  onToggleMenu: () => void;
}
