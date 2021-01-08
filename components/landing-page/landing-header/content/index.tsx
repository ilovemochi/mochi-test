import Route from '@constants/routes';
import { useI18n } from '@hooks';
import { useRouter } from 'next/router';
import { always } from 'ramda';
import { FC } from 'react';

import Button from '../../../../elements/button';
import { Props as TextProps } from '../../../../elements/text';
import { ButtonText } from '../../../shared/text';
import { HavingFun } from '../../../svg';
import { ContentSVGWrapper, DescriptionText, MainContent, SectionTitle } from '../header.styles';
import { ExploreButtonProps } from '../header.types';

const Title: FC<TextProps> = props => <SectionTitle white h2 {...props} />;

const Description: FC<TextProps> = props => <DescriptionText large white {...props} />;

const ExploreButton: FC<ExploreButtonProps> = ({ onClick, value }) => (
  <Button large accent onClick={onClick}>
    <ButtonText white normal h4>
      {value}
    </ButtonText>
  </Button>
);

const SVG = always(
  <ContentSVGWrapper>
    <HavingFun />
  </ContentSVGWrapper>
);

const Content: FC = () => {
  const { t } = useI18n();
  const router = useRouter();

  const goToStore = () => router.push(Route.MochiNight);

  return (
    <MainContent>
      <Title>{t('landingPage.header.enjoy.title')}</Title>
      <Description>{t('landingPage.header.plainText')}</Description>
      <SVG />
      <ExploreButton onClick={goToStore} value={t('landingPage.header.enjoy.button')} />
    </MainContent>
  );
};

export default Content;
