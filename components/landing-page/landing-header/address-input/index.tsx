import { useI18n, useLocation, useRemoveWindowGoogle } from '@hooks';
import { formatGeoCodeResult, getStreetFromPlaceObject } from '@utils/helper-functions';
import { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { MdArrowForward, MdLocationOn } from 'react-icons/md';

import { View } from '../../../../elements';
import { theme } from '../../../../styles/theme';
import SearchLocationInput from '../../../shared/form/search-location-input';
import { AddressTextField, SubButton } from '../header.styles';

export type GeocoderResult = google.maps.GeocoderResult;

const AddressInput: FC = () => {
  const { t } = useI18n();
  const [locationState, setLocationState] = useLocation();

  const { handleSubmit, errors, setValue } = useForm({
    defaultValues: {
      street: '',
    },
  });

  const handleChange = useCallback((payload: GeocoderResult) => {
    setValue('street', getStreetFromPlaceObject(payload));
    setLocationState(formatGeoCodeResult(payload));
  }, []);

  useRemoveWindowGoogle();

  const onSubmit = () => {
    if (!locationState.lat || !locationState.lng) return;

    alert('success!');
  };

  return (
    <AddressTextField onSubmit={handleSubmit(onSubmit)}>
      <View flex middle center width="6rem" height="6rem">
        <MdLocationOn size={24} color={theme.color.black} />
      </View>
      <View flex={1} height="100%">
        <SearchLocationInput
          noBorder
          placeholder={t('landingPage.addressInput.placeholder')}
          handleChange={handleChange}
          defaultValue=""
          errors={errors}
          labelLess
          predictionsContainerWidth="160%"
          predictionsContainerPositionX="-6rem"
        />
      </View>
      <SubButton>
        <MdArrowForward size={24} color={theme.color.white} />
      </SubButton>
    </AddressTextField>
  );
};

export default AddressInput;
