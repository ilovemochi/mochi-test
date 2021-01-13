import { FC, HTMLAttributes } from 'react';

import { textStyle } from './text.styles';
import { TextProps } from './text.types';

const Text: FC<TextProps & HTMLAttributes<HTMLParagraphElement>> = ({ variant, ...otherProps }) => {
  const StyledText = textStyle(variant);
  return <StyledText variant={variant} {...otherProps} />;
};

export default Text;

export * from './text.types';
