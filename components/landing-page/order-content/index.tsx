import { useI18n } from '@hooks';
import { FC } from 'react';

import AddressInput from '../landing-header/address-input';
import { LandingContentWrapper } from '../styles';
import { AddressWrapper, Container, Text } from './order-content-style';

const OrderContent: FC = () => {
  const { t } = useI18n();

  return (
    <Container>
      <LandingContentWrapper height="100%" flex column center middle>
        <Text h2 center white>
          {t('landingPage.mainContent.start.title')}
        </Text>
        <Text h5 normal center width="40%" white>
          {t('landingPage.mainContent.start.description')}
        </Text>
        <AddressWrapper flex column width="100%" margin={['2rem', '0']}>
          <AddressInput />
        </AddressWrapper>
      </LandingContentWrapper>
    </Container>
  );
};
export default OrderContent;
