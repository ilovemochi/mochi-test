import { generateImageLink } from '@utils/helper-functions';
import { FC } from 'react';

import LazyImage from '../../../lazy-image';
import Text from '../../../text';
import View from '../../../view';
import { EssentialText, EssentialWrapper } from '../../card.styles';
import { EssentialsProps } from '../../card.types';

const Essential: FC<Omit<EssentialsProps, 'variant'>> = ({
  productName,
  image,
  storeName,
  onClick,
}) => (
  <>
    <View
      position="absolute"
      display="flex"
      width="18rem"
      height="100%"
      justifyContent="center"
      alignItems="center"
      role="figure"
      aria-label={productName}
    >
      <LazyImage imageMap={generateImageLink(image)} alt={productName} />
    </View>
    <EssentialWrapper role="article" onClick={onClick}>
      <EssentialText className="store">
        <Text variant="bodyLarge" textAlign="center" color="textInverted">
          {storeName}
        </Text>
      </EssentialText>
      <EssentialText className="product">
        <Text variant="body" textAlign="center" color="textInverted">
          {productName}
        </Text>
      </EssentialText>
    </EssentialWrapper>
  </>
);

export default Essential;
