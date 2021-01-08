import Route from '@constants/routes';
import { getUserData } from '@redux/user/user.selectors';
import { storePathAfterLogin } from '@utils/session-storage';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';

import { Text, View } from '../../../elements';
import { RenderInfoProps } from '../landing-page-types';
import { Titles } from '../styles';
import { DrinksUrl } from './main-content-data';
import {
  AccentButton,
  Image,
  MoreOptions,
  MoreOptionsItem,
  RenderInfoWrapper,
  Section,
  SVGWrapper,
} from './main-content.styles';

export const RenderInfo: FC<RenderInfoProps> = ({
  right = false,
  title,
  description,
  buttonText,
}) => {
  const user = useSelector(getUserData);
  const router = useRouter();
  const setAfterLoginPath = () => storePathAfterLogin(Route.MochiNight);
  const goToStore = () => {
    if (user) router.push(Route.MochiNight);
    else {
      setAfterLoginPath();
      router.push(Route.SignIn);
    }
  };
  return (
    <RenderInfoWrapper flex column justifyContent="space-between" right={right}>
      <View margin={['0', '0', '4rem', '0']}>
        <View margin={['0', '0', '1rem', '0']}>
          <Titles h1 width={right ? '80%' : '100%'}>
            {title}
          </Titles>
        </View>
        <Text h4 normal dark50 width={right ? '80%' : '100%'}>
          {description}
        </Text>
      </View>
      <AccentButton type="button" onClick={goToStore}>
        {buttonText}
      </AccentButton>
    </RenderInfoWrapper>
  );
};

// eslint-disable-next-line no-undef
export const InfoSection: FC<RenderInfoProps & { ImageName: () => JSX.Element }> = ({
  right = false,
  ImageName,
  ...props
}) => (
  <Section flex row middle justifyContent="space-between">
    {!right ? (
      <>
        <RenderInfo right={right} {...props} />
        <SVGWrapper>
          <ImageName />
        </SVGWrapper>
      </>
    ) : (
      <>
        <SVGWrapper>
          <ImageName />
        </SVGWrapper>
        <RenderInfo right={right} {...props} />
      </>
    )}
  </Section>
);

export const InfoOptionSection: FC<RenderInfoProps> = ({ right = false, ...props }) => (
  <Section flex row middle justifyContent="space-between">
    <RenderInfo right={right} {...props} />
    <MoreOptions>
      {DrinksUrl.map(url => (
        <MoreOptionsItem key={v4()}>
          <Image src={url} alt="drinks" />
        </MoreOptionsItem>
      ))}
    </MoreOptions>
  </Section>
);
