import { generateImageLink } from '@utils/helper-functions';
import { dec, inc } from 'ramda';
import { FC, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { v4 } from 'uuid';

import { useI18n } from '../../../../hooks';
import Button from '../../../button';
import LazyImage from '../../../lazy-image';
import Text from '../../../text';
import View from '../../../view';
import { ProductProps } from '../../card.types';

const Product: FC<Omit<ProductProps, 'variant'>> = ({
  productName,
  image,
  description,
  onClick,
  compressed = false,
  price,
  btnText,
  prepareTime,
}) => {
  const { t } = useI18n();
  const [quantity, setQuantity] = useState(1);

  const decrementId = v4();
  const incrementId = v4();
  const addToCartId = v4();

  const addItem = () => setQuantity(inc);
  const removeItem = () => setQuantity(dec);
  const handleClick = () => onClick(quantity);

  return (
    <View
      width={compressed ? '35rem' : '45rem'}
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      role="article"
      aria-label={t('common.ariaLabel.product')}
    >
      <View
        height="12rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        role="figure"
        aria-label={productName}
      >
        <LazyImage imageMap={generateImageLink(image)} alt={productName} />
      </View>
      <View display="flex" flexDirection="column" justifyContent="space-between" m="2rem">
        <View
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
        >
          <Text variant="bodyLarge">{productName}</Text>
          <View m="2rem 1rem 4rem">
            <Text variant="body">
              <Text variant="inline">
                {compressed ? (
                  t('productPage.card.included')
                ) : (
                  <b>{t('productPage.card.included')}</b>
                )}
              </Text>
              {description}
              {compressed ? '...' : ' '}
              {compressed && <Text variant="link">{t('common.button.seeMore')}</Text>}
            </Text>
            {!compressed && (
              <>
                <Text variant="body">
                  <Text variant="inline">
                    <b>{t('productPage.card.time')}</b>
                  </Text>
                  {prepareTime}
                </Text>
                <Text variant="body">
                  <Text variant="inline">
                    <b>{t('productPage.card.price')}</b>
                  </Text>
                  {price}
                </Text>
              </>
            )}
          </View>
        </View>
        <View display="flex" width="100%" justifyContent="space-around" alignItems="center">
          <Button
            width="100%"
            variant="primary"
            onClick={handleClick}
            aria-labelledby={addToCartId}
            px="L"
          >
            <Text variant="buttonTextSmall" aria-label={t('common.ariaLabel.price')}>
              {!!price && price * quantity}
            </Text>
            <Text variant="buttonTextSmall" id={addToCartId} textTransform="uppercase">
              {btnText}
            </Text>
          </Button>
          {!compressed && (
            <View display="inline-flex" justifyContent="space-around">
              <Button
                variant="rounded"
                onClick={removeItem}
                disabled={quantity === 1}
                aria-labelledby={decrementId}
              >
                <FaMinus
                  role="img"
                  id={decrementId}
                  aria-label={t('common.ariaLabel.removeItem')}
                />
              </Button>
              <Button
                variant="rounded"
                disabled
                aria-label={t('common.ariaLabel.quantity')}
                color="text"
              >
                {quantity}
              </Button>
              <Button variant="rounded" onClick={addItem} aria-labelledby={incrementId}>
                <FaPlus role="img" id={incrementId} aria-label={t('common.ariaLabel.addItem')} />
              </Button>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Product;
