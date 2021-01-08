import { maxWidth } from '@utils/helper-functions';
import styled, { css } from 'styled-components';

import { View } from '../../../elements';
import { theme } from '../../../styles/theme';

export const Section = styled(View)`
  width: 100%;
  margin: 12rem 0 16rem;

  ${maxWidth.forTabletLandscapeUp(css`
    width: 100%;
    margin: 6rem 0 12rem;

    flex-direction: column-reverse !important;
    align-items: center !important;
    &:nth-child(2) {
      flex-direction: column !important;
    }
  `)};
`;

export const SVGWrapper = styled.div`
  height: 25rem;
  width: 80rem;
  object-fit: cover;

  ${maxWidth.forTabletLandscapeUp(css`
    max-width: 80%;
    max-height: none;
    margin-bottom: 1rem;
    flex-direction: column !important;
  `)}

  ${maxWidth.forPhoneOnly(css`
    max-width: 100%;
  `)}
`;

export const Image = styled.img`
  width: 55rem;
  max-height: 40rem;
  object-fit: cover;

  ${maxWidth.forTabletLandscapeUp(css`
    max-width: 80%;
    max-height: none;
    margin-bottom: 1rem;
    flex-direction: column !important;
  `)}

  ${maxWidth.forPhoneOnly(css`
    max-width: 100%;
  `)}
`;

export const MoreOptions = styled.div`
  display: grid;
  height: 30rem;
  grid-template-columns: 14rem 14rem 14rem;
  grid-template-rows: 14rem 14rem 14rem;
  grid-gap: 2rem;

  ${maxWidth.forTabletPortraitUp(css`
    height: 21rem;
    grid-template-columns: 10rem 10rem 10rem;
    grid-template-rows: 10rem 10rem 10rem;
    grid-gap: 1rem;
  `)}
`;

export const MoreOptionsItem = styled.button`
  background-color: ${theme.color.dark8};
  border-radius: 1rem;
  border: 0.1rem solid transparent;
  cursor: pointer;
  padding: 1rem;

  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.07);
    border-color: ${theme.color.dark15};
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const AccentButton = styled.button`
  min-width: 64px;
  max-width: 16rem;
  padding: 1.3rem;
  cursor: pointer;

  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  border-radius: 100rem;
  border: 2px solid ${theme.color.darkAccent};

  background-color: ${theme.color.darkAccent};
  -webkit-text-fill-color: ${theme.color.white};
  color: ${theme.color.white};
`;

export const RenderInfoWrapper = styled(View)<{ right: boolean }>`
  margin-right: ${props => (props.right ? '0' : '8rem')};
  margin-left: ${props => (props.right ? '8rem' : '0')};

  ${maxWidth.forTabletLandscapeUp(css`
    margin: 0;
    align-items: center !important;

    * {
      width: 100% !important;
      text-align: center;
    }
  `)}
`;
