import { useI18n } from '@hooks';
import { FC } from 'react';

import data, { lastInfoData } from '../data';
import { LandingContentWrapper } from '../styles';
import { InfoOptionSection, InfoSection } from './main-content-info';

const MainContent: FC = () => {
  const { t } = useI18n();

  return (
    <LandingContentWrapper>
      {data.map((info, index) => (
        <InfoSection
          key={info.section}
          title={t(`landingPage.mainContent.${info.section}.intro`)}
          description={t(`landingPage.mainContent.${info.section}.description`)}
          buttonText={t(`landingPage.mainContent.${info.section}.button`)}
          ImageName={info.ImageName}
          right={index % 2 !== 0}
        />
      ))}
      <InfoOptionSection
        right={false}
        title={t(`landingPage.mainContent.${lastInfoData.section}.intro`)}
        description={t(`landingPage.mainContent.${lastInfoData.section}.description`)}
        buttonText={t(`landingPage.mainContent.${lastInfoData.section}.button`)}
      />
    </LandingContentWrapper>
  );
};

export default MainContent;
