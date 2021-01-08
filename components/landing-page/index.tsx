import { FC } from 'react';

import { View } from '../../elements';
import LandingHeaderSection from './landing-header';
import MainContent from './main-content';
import OrderContent from './order-content';

const LandingPage: FC = () => (
  <View flex column width="100%">
    <LandingHeaderSection />
    <MainContent />
    <OrderContent />
  </View>
);

export default LandingPage;
