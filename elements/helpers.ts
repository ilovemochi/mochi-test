import { compose, equals, length, type } from 'ramda';
import { ReactText } from 'react';
import { css } from 'styled-components';

const handleNumberType = compose(equals('String'), type);
const handleArrayType = compose(equals('Array'), type);

// eslint-disable-next-line consistent-return
export const handlePadding = (padding: ReactText[]) => {
  if (handleNumberType(padding)) {
    return css`
      padding: ${padding};
    `;
  }

  if (handleArrayType(padding) && typeof padding === 'object') {
    const paddingSize = length(padding);
    switch (paddingSize) {
      case 1:
        return css`
          padding: ${padding[0]};
        `;
      case 2:
        return css`
          padding: ${padding[0]} ${padding[1]};
        `;
      case 3:
        return css`
          padding-top: ${padding[0]};
          padding-right: ${padding[1]};
          padding-left: ${padding[1]};
          padding-bottom: ${padding[2]};
        `;
      default:
        return css`
          padding-top: ${padding[0]};
          padding-right: ${padding[1]};
          padding-bottom: ${padding[2]};
          padding-left: ${padding[3]};
        `;
    }
  }
};

// eslint-disable-next-line consistent-return
export const handleMargin = (margin: ReactText[]) => {
  if (handleNumberType(margin)) {
    return css`
      margin: ${margin};
    `;
  }

  if (handleArrayType(margin) && typeof margin === 'object') {
    const marginSize = length(margin);
    switch (marginSize) {
      case 1:
        return css`
          margin: ${margin[0]};
        `;
      case 2:
        return css`
          margin: ${margin[0]} ${margin[1]};
        `;
      case 3:
        return css`
          margin-top: ${margin[0]};
          margin-right: ${margin[1]};
          margin-left: ${margin[1]};
          margin-bottom: ${margin[2]};
        `;
      default:
        return css`
          margin-top: ${margin[0]};
          margin-right: ${margin[1]};
          margin-bottom: ${margin[2]};
          margin-left: ${margin[3]};
        `;
    }
  }
};
