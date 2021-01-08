import { IStyles } from '@typescript';
import { addStyles } from '@utils/helper-functions';
import styled from 'styled-components';

export const H1 = styled.h1<IStyles>`
  font-size: ${props => props.theme.font.h1};
  line-height: 7rem;
  ${props => addStyles(props.styles)};
`;

export const H2 = styled.h2<IStyles>`
  font-size: ${props => props.theme.font.h2};
  line-height: 5rem;
  ${props => addStyles(props.styles)};
`;

export const H3 = styled.h3<IStyles>`
  font-size: ${props => props.theme.font.h3};
  line-height: 3rem;
  ${props => addStyles(props.styles)};
`;

export const H4 = styled.h4<IStyles>`
  font-size: ${props => props.theme.font.h4};
  line-height: 2.5rem;
  ${props => addStyles(props.styles)};
`;

export const H5 = styled.h5<IStyles>`
  font-size: ${props => props.theme.font.h5};
  line-height: 2.5rem;
  ${props => addStyles(props.styles)};
`;

export const H6 = styled.h6<IStyles>`
  font-size: ${props => props.theme.font.h6};
  line-height: 2rem;
  text-transform: uppercase;
  ${props => addStyles(props.styles)};
`;

export const TextExtraLarge = styled.p<IStyles>`
  font-size: ${props => props.theme.font.extraLarge};
  line-height: 2.5rem;
  ${props => addStyles(props.styles)};
`;

export const TextLarge = styled.p<IStyles>`
  line-height: 3rem;
  font-size: ${props => props.theme.font.large};
  ${props => addStyles(props.styles)};
`;

export const TextMedium = styled.p<IStyles>`
  line-height: 2rem;
  font-size: ${props => props.theme.font.normal};
  ${props => addStyles(props.styles)};
`;

export const Label = styled.label<IStyles>`
  line-height: 2rem;
  font-size: ${props => props.theme.font.normal};
  ${props => addStyles(props.styles)};
`;

export const TextSmall = styled.p<IStyles>`
  line-height: 1.5rem;
  font-style: normal;
  font-size: ${props => props.theme.font.small};
  ${props => addStyles(props.styles)};
`;
