import { Card, Carousel, FlexView, Text, View } from '@elements';
import { EssentialsProps, RestaurantProps } from '@elements/card';
import { useI18n } from '@hooks';
import { map } from 'ramda';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Link } from '../../components/shared/shared.components';
import { essentialData, miniRestaurantData } from './home.mocks';

const MainContent: FC = () => {
  const { t } = useI18n();

  return (
    <>
      <View bg="foreground" p="XL" my="XL" mx={['M', 'L']} borderRadius="XL">
        <FlexView alignItems="center" justifyContent="space-between">
          <Text variant="bodyLarge">{t('common.span.essentials')}</Text>
          <Link href="/v2">
            <Text variant="link">{t('common.button.seeMore')}</Text>
          </Link>
        </FlexView>
        <View mt="XL" role="list" flexWrap="nowrap" overflowX="hidden">
          <Carousel itemsPerSlide={[1, 2, 3, 4, 5, 6]}>
            {map((data: EssentialsProps) => <Card {...data} key={v4()} />)(essentialData)}
          </Carousel>
        </View>
      </View>
      <View bg="foreground" p="XL" my="XL" mx={['M', 'L']} borderRadius="XL">
        <FlexView alignItems="center" justifyContent="space-between">
          <Text variant="bodyLarge">{t('common.span.restaurants')}</Text>
          <Link href="/v2">
            <Text variant="link">{t('common.button.seeMore')}</Text>
          </Link>
        </FlexView>
        <View mt="XL" role="list" flexWrap="nowrap" overflowX="hidden">
          <Carousel itemsPerSlide={[1, 1, 1, 2, 3, 3]}>
            {map((data: RestaurantProps) => <Card {...data} key={v4()} />)(miniRestaurantData)}
          </Carousel>
        </View>
      </View>
    </>
  );
};

export default MainContent;
