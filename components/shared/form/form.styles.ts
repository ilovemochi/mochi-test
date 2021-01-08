import { maxWidth } from '@utils/helper-functions';
import styled, { css } from 'styled-components';

import { Text } from '../../../elements';
import { FlexStyles } from '../../../styles';
import { theme } from '../../../styles/theme';

export const FormWrapper = styled.div`
  display: block;
`;

export const FieldWrapper = styled.div`
  padding: 3rem 0;
  border-top: 0.1rem solid rgba(40, 47, 54, 0.05);
  display: block;
  ${FlexStyles({ justifyContent: 'space-between' })}
  ${maxWidth.forTabletPortraitUp(css`
    ${FlexStyles({ flexWrap: 'wrap', justifyContent: 'flex-start' })}
  `)}
`;

export const FieldTitle = styled(Text)`
  margin-bottom: 1.5rem;
  display: block;
`;

export const FieldContent = styled.div`
  display: block;
`;

export const FieldAdvice = styled(Text)`
  overflow-wrap: normal;
  opacity: 0.6;
`;

export const ButtonsWrapper = styled.div`
  padding: 0;
  display: block;
  ${FlexStyles({ alignItems: 'center' })}
  ${maxWidth.forTabletPortraitUp(css`
    ${FlexStyles({ flexWrap: 'wrap', justifyContent: 'center' })};
    margin-top: 1rem;
  `)}
`;

export const ReactFormFieldWrapper = styled.div`
  position: relative;
  ${FlexStyles({ direction: 'column', alignItems: 'center', justifyContent: 'space-around' })}
  p {
    font-size: ${props => props.theme.font.normal};
    color: ${props => props.theme.color.red};
  }
`;

export const PhaseIndicatorWrapper = styled.div`
  width: 80%;
  margin: 1.5rem auto;
  opacity: 0.9;
  ${FlexStyles({ justifyContent: 'center' })}
`;

export const PhasePilots = styled.div<{ level: number }>`
  width: 100%;
  height: 0.5rem;
  background: linear-gradient(
    90deg,
    ${theme.color.black} ${props => props.level}%,
    rgb(150, 150, 150) ${props => props.level}%
  );
  ${FlexStyles({ alignItems: 'center', justifyContent: 'space-between' })}
`;

export const Phase = styled.div<{ active?: boolean }>`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 -1rem;
  border-radius: 50%;
  cursor: help;
  font-size: 1.7rem;
  color: ${theme.color.white};
  ${FlexStyles({ alignItems: 'center', justifyContent: 'center' })};
  background-color: ${props => (props.active ? theme.color.black : 'rgb(150, 150, 150)')};
`;
