import { generateImageLink } from '@utils/helper-functions';
import { FC } from 'react';

import { useI18n } from '../../../../hooks';
import LazyImage from '../../../lazy-image';
import MochiImage from '../../../mochi-image';
import Text from '../../../text';
import View from '../../../view';
import { HeartIcon, LocationIcon } from '../../card.styles';
import { RestaurantProps } from '../../card.types';

const Restaurant: FC<Omit<RestaurantProps, 'variant'>> = ({
  image,
  logo,
  storeName,
  onClick,
  isOpen,
  limitHour,
  likes,
  compressed = false,
  distanceMin,
}) => {
  const { t } = useI18n();
  return (
    <View
      width="100%"
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      onClick={onClick}
      role="article"
      aria-label={t('common.ariaLabel.restaurant')}
    >
      <View
        role="figure"
        height={compressed ? '10rem' : '15rem'}
        display="flex"
        alignItems="center"
        justifyContent="center"
        aria-label={storeName}
      >
        <LazyImage imageMap={generateImageLink(image)} alt={storeName} />
      </View>
      <MochiImage
        bg="foreground"
        mt={compressed ? '-9rem' : '-7.5rem'}
        boxShadow="0 0 0.5rem rgba(0,0,0,0.3)"
        width="15rem"
        height="15rem"
        borderRadius="50%"
        imageProps={{
          src: logo,
          loading: 'lazy',
        }}
        alt={`${storeName} logo`}
      />
      <View
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        p={compressed ? 'M' : 'XL'}
      >
        <Text variant="t4">{storeName}</Text>
        <View
          display="flex"
          width="100%"
          alignItems="center"
          justifyContent="space-around"
          mt={compressed ? 'M' : 'XL'}
        >
          <View display="flex" alignItems="center" aria-label={t('common.ariaLabel.distance')}>
            <LocationIcon role="img" aria-label={t('common.ariaLabel.location')} />
            <Text variant="small" color="grayQuaternary" aria-label={t('common.ariaLabel.time')}>
              {distanceMin}min
            </Text>
          </View>
          <View display="inline-flex" alignItems="center">
            <View
              m="M"
              display="inline-flex"
              justifyContent="center"
              alignItems="center"
              bg={isOpen ? 'successTertiary' : 'errorTertiary'}
              py="S"
              px="L"
              borderRadius="L"
            >
              <Text variant="small" color="textInverted" textTransform="capitalize">
                {t('common.span.storeStatus', { count: isOpen ? 1 : 0 })}
              </Text>
            </View>
            <Text variant="small" color="grayQuaternary">
              {t('common.span.statusUntil', { hour: limitHour })}
            </Text>
          </View>
          <View display="flex" alignItems="center" aria-label={t('common.ariaLabel.likeCounter')}>
            <HeartIcon role="img" aria-label={t('common.ariaLabel.likes')} />
            <Text variant="small" color="grayQuaternary">
              {likes}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Restaurant;
