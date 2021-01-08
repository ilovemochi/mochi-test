import { useI18n, useUserState } from '@hooks';
import { User } from '@ilovemochi/enums';
import { signOutStart } from '@redux/user/user.actions';
import { getFirstWord, toggleState } from '@utils/helper-functions';
import { useRouter } from 'next/router';
import { always, equals, ifElse, o, prop, T } from 'ramda';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../../../../elements';
import { theme } from '../../../../styles/theme';
import LangNavItem from '../../../header/header-right-icons/language-nav-item';
import MobileModal from '../../../header/mobile';
import { ButtonWhiteActivityIndicator } from '../../../shared/activity-indicator';
import MochiLogo from '../../../shared/mochi-header-logo';
import NoUserHeader from '../../../shared/no-user-header';
import Option from '../../../shared/option';
import {
  LanguageWrapper,
  MenuOptionsWrapper,
  MenuWrapper,
  NameWrapper,
  NavBarWrapper,
} from '../header.styles';
import { UserMenuProps } from '../header.types';
import MobileHeaderContent from '../mobile';
import { MenuOptions } from './nav-bar.data';

const UserMenu: FC<UserMenuProps> = ({ loading, user }) => {
  const { t } = useI18n();
  const dispatch = useDispatch();
  const signOut = o(dispatch, signOutStart);

  return (
    <MenuOptionsWrapper>
      <NameWrapper>
        <Option>{t('common.span.hi', { name: getFirstWord(user[User.Name]) })}</Option>
      </NameWrapper>
      <Button red onClick={signOut}>
        <ButtonWhiteActivityIndicator loading={loading}>
          {t('common.button.logout')}
        </ButtonWhiteActivityIndicator>
      </Button>
    </MenuOptionsWrapper>
  );
};

const AuthMenu: FC = () => {
  const { user, loading } = useUserState();
  return user ? (
    <UserMenu loading={loading} user={user} />
  ) : (
    <NoUserHeader colorHover="orange" white />
  );
};

const checkName = o(equals('loja'), prop<string, string>('name'));

const Options = () => {
  const { t } = useI18n();
  const router = useRouter();
  const { hasLocation } = useUserState();

  const options = MenuOptions.filter(ifElse(checkName, always(hasLocation), T));

  return (
    <MenuOptionsWrapper>
      {options.map(({ id, name, route }) => (
        <Option key={id} onClick={() => router.push(route)}>
          {t(`oldNavBar.${name}`)}
        </Option>
      ))}
      <LanguageWrapper>
        <LangNavItem notRounded />
      </LanguageWrapper>
    </MenuOptionsWrapper>
  );
};

const Menu: FC = always(
  <MenuWrapper flex row>
    <Options />
    <AuthMenu />
  </MenuWrapper>
);

const NavBar: FC = () => {
  const [isMenuVisible, setMenuIsVisible] = useState(false);
  const handleToggleMenu = toggleState(setMenuIsVisible);
  return (
    <NavBarWrapper>
      <MenuWrapper>
        <MochiLogo color={theme.color.white} />
      </MenuWrapper>
      <Menu />
      <MobileHeaderContent onToggleMenu={handleToggleMenu} />
      {isMenuVisible && <MobileModal handleToggleMenu={handleToggleMenu} />}
    </NavBarWrapper>
  );
};

export default NavBar;
