import { View } from '@elements';
import { FC } from 'react';

import { SearchBar } from '../../components/v2';
import Header from './header';
import MainContent from './main-content';

const HomeView: FC = () => (
  <View width="100%" maxWidth={['100%', '130em']}>
    <Header />
    <View
      bg="foreground"
      mx="L"
      my="XL"
      px={['L', 'L', 'XXL']}
      py={['L', 'L', 'XL']}
      borderRadius="XL"
    >
      <SearchBar />
    </View>
    <MainContent />
  </View>
);

export default HomeView;
