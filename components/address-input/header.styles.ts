import styled from 'styled-components';

import { Text } from '../../elements';
import { FlexStyles } from '../../styles';
import { theme } from '../../styles/theme';

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

export const SectionTitle = styled(Text)`
  ${DefaultTitlesStyles}
`;

export const MenuOptionsWrapper = styled.div`
  ${FlexStyles({ justifyContent: 'center', alignItems: 'center', direction: 'row' })};
`;

export const RequestLocationWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${FlexStyles({ justifyContent: 'center', alignItems: 'center', direction: 'row' })};
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
