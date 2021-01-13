import { FaHeart, FaLocationArrow } from 'react-icons/fa';
import styled from 'styled-components';
import { system, variant } from 'styled-system';

import { fontSizes, palette, radii, space } from '../../design-system';
import { CardWrapperProps } from './card.types';

export const CardWrapper = styled('div')<CardWrapperProps>(
  {
    boxShadow: `0 0 0.5rem ${palette.NEUTRAL_300}`,
    borderRadius: radii.L,
    display: 'inline-block',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  variant({
    variants: {
      essential: {
        width: '18rem',
        height: '22rem',
      },
      product: {
        minWidth: '27rem',
      },
      restaurant: {
        minWidth: '27rem',
        cursor: 'pointer',
        width: '35rem',
      },
    },
  }),
  system({
    bg: {
      property: 'backgroundColor',
      scale: 'colors',
    },
  })
);

export const EssentialWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover > .store {
    padding-top: 45%;
  }
  &:hover > .product {
    padding-bottom: 45%;
  }
`;

export const EssentialText = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: space.L,
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  transition: 'all 300ms ease-in-out',
});

const Icon = `
  font-size: ${fontSizes.Medium};
  margin: ${space.M};
`;

export const HeartIcon = styled(FaHeart)`
  ${Icon};
  color: ${palette.ERROR_200};
`;

export const LocationIcon = styled(FaLocationArrow)`
  ${Icon};
  color: rgba(0, 0, 0, 0);
  font-weight: bold;
  path {
    stroke: ${palette.NEUTRAL_800};
    stroke-width: 5rem;
    stroke-linejoin: round !important;
    stroke-linecap: round !important;
  }
`;
