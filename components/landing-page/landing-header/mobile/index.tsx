import { always } from 'ramda';
import { FC } from 'react';
import { MdMenu } from 'react-icons/md';

import { View } from '../../../../elements';
import { theme } from '../../../../styles/theme';
import LangNavItem from '../../../header/header-right-icons/language-nav-item';
import { MenuIcon } from '../../../header/header.styles';
import { MobileWrapper } from '../../../shared/shared.styles';
import { MochiWord } from '../../../svg';
import { LanguageWrapper, MochiWordWrapper } from '../header.styles';
import { MobileHeaderContentProps } from '../header.types';

const MochiWordIcon = always(
  <MochiWordWrapper>
    <MochiWord viewBox="0 0 600 100" />
  </MochiWordWrapper>
);

const MobileHeaderContent: FC<MobileHeaderContentProps> = ({ onToggleMenu }) => (
  <MobileWrapper flex row justifyContent="space-between" alignItems="center">
    <MochiWordIcon />
    <View width="10rem" flex alignItems="center" justifyContent="space-between">
      <LanguageWrapper>
        <LangNavItem notRounded />
      </LanguageWrapper>
      <MenuIcon onClick={onToggleMenu}>
        <MdMenu color={theme.color.white} size={36} />
      </MenuIcon>
    </View>
  </MobileWrapper>
);

export default MobileHeaderContent;
