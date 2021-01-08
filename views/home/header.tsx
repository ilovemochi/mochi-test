import { Theme } from '@design-system';
import { FlexView, Text, View } from '@elements';
import { useI18n } from '@hooks';
import { FC } from 'react';
import { useTheme } from 'styled-components';

import { MochiVerticalLogo } from '../../components/svg';
import { HeaderContent } from './home.styles';

const Header: FC = () => {
  const { t } = useI18n();
  const { colors } = useTheme() as Theme;
  return (
    <View width={['100vw', '100%']} height={['40vw', '30rem']} minHeight="18rem">
      <HeaderContent
        width="100%"
        justifyContent="space-around"
        alignItems="center"
        color="textInverted"
        height="100%"
        position="relative"
      >
        <View p="XXL" display={['none', 'none', 'none', 'block']} opacity="0.9">
          <Text variant="h2">{t('landingPage.header.intro')}</Text>
          <Text variant="bodyLarge" fontWeight="300">
            {t('landingPage.header.plainText')}
          </Text>
        </View>
        <FlexView px="XXL" flexDirection="column" alignItems="center">
          <View role="figure" width={['7rem', '7rem', '15rem']} m="L">
            <MochiVerticalLogo
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              color={colors.textInverted}
            />
          </View>
          <View display={['block', 'block', 'block', 'none']} textAlign="center" m="L">
            <Text variant="bodyLarge" textTransform="uppercase">
              {t('common.span.welcome')}
            </Text>
          </View>
        </FlexView>
      </HeaderContent>
    </View>
  );
};

export default Header;
