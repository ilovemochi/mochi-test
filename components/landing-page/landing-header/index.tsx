import { useI18n } from '@hooks';
import { getUserHasLocation } from '@redux/user/user.selectors';
import { always } from 'ramda';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { LandingContentWrapper, Text } from '../styles';
import AddressInput from './address-input';
import Content from './content';
import { Container, RequestLocationWrapper } from './header.styles';
import NavBar from './nav-bar';

const RequestLocationView: FC = () => {
  const { t } = useI18n();
  return (
    <AddressInput />
  );
};



const RequestLocation: FC = always(
  <RequestLocationWrapper>
    <RequestLocationView />
    <SVG />
  </RequestLocationWrapper>
);

const LandingHeaderSection: FC = () => {
  const userHasLocation = useSelector(getUserHasLocation);
  return (
    <Container>
      <LandingContentWrapper height="100%" flex column>
        <NavBar />
        {userHasLocation ? <Content /> : <RequestLocation />}
      </LandingContentWrapper>
    </Container>
  );
};

export default LandingHeaderSection;
