import styled, { css } from 'styled-components';

import { Text, View } from '../../../elements';
import { FlexStyles } from '../../../styles';
import { theme } from '../../../styles/theme';

export const Container = styled(View)`
  width: 100%;
  height: 100vh;

  background-color: ${theme.color.darkAccent};
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const Button = styled.button<{ transparent?: boolean }>`
  min-width: 64px;
  padding: 0.8rem 2rem;
  cursor: pointer;

  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  border-radius: 50px;
  border: 2px solid ${theme.color.black};

  background-color: ${props => (props.transparent ? 'transparent' : theme.color.black)};
  color: ${props => (props.transparent ? theme.color.black : theme.color.white)};
`;

export const AddressTextField = styled.form<{ addressIsValid?: boolean | null }>`
  width: 40rem;
  height: 7rem;
  background-color: ${theme.color.white};
  box-shadow: ${theme.color.dark8} 0px 0.1rem 4px 0px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SubButton = styled.button`
  width: 7rem;
  height: 100%;
  background-color: ${theme.color.black};
  transition: all 0.3s ease;
  cursor: pointer;

  :hover {
    background-color: #484a4d;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DefaultTitlesStyles = `
    width: 100%;
    text-align: center;
    margin: 2rem 0;
`;

export const MainContent = styled.div`
  width: 100%;
  padding: 0 2rem;
  ${FlexStyles({ flex: 1, direction: 'column', justifyContent: 'center', alignItems: 'center' })}
`;

export const SectionTitle = styled(Text)`
  ${DefaultTitlesStyles}
`;

export const DescriptionText = styled(Text)`
  ${DefaultTitlesStyles};
`;

export const NavBarWrapper = styled.div`
  ${FlexStyles({ justifyContent: 'space-between', alignItems: 'center', direction: 'row' })};
  width: 100%;
  height: 10rem;
  padding: 2rem 0;
`;

export const MenuOptionsWrapper = styled.div`
  ${FlexStyles({ justifyContent: 'center', alignItems: 'center', direction: 'row' })};
`;

export const ContentSVGWrapper = styled.div`
  height: 12rem;
  width: 20rem;
`;

export const RequestLocationWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${FlexStyles({ justifyContent: 'center', alignItems: 'center', direction: 'row' })};
`;

export const HeaderSVGWrapper = styled.div`
  display: none;
`;

export const MochiWordWrapper = styled.div`
  width: 20rem;
  svg {
    fill: ${props => props.theme.color.white};
    width: 100%;
    height: 3.5rem;
  }
`;

export const LanguageWrapper = styled.div`
  --nav-size: 5rem;
`;

export const NameWrapper = styled.div`
  h5 {
    max-width: 12rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
