import { useI18n, useLocation, useRemoveWindowGoogle } from '@hooks';
import { Address } from '@ilovemochi/enums';
import { setLocationCookieStart } from '@redux/user/user.actions';
import { GeocoderResult } from '@typescript';
import { formatGeoCodeResult, getStreetFromPlaceObject } from '@utils/helper-functions';
import { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { MdArrowForward, MdLocationOn } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { View } from '../../../../elements';
import { theme } from '../../../../styles/theme';
import SearchLocationInput from '../../../shared/form/search-location-input';
import { AddressTextField, SubButton } from '../header.styles';

const AddressInput: FC = () => {
  const dispatch = useDispatch();
  const { t } = useI18n();
  const [locationState, setLocationState] = useLocation();

  const { handleSubmit, errors, setValue } = useForm({
    defaultValues: {
      [Address.Street]: '',
    },
  });

  const handleChange = useCallback((payload: GeocoderResult) => {
    setValue(Address.Street, getStreetFromPlaceObject(payload));
    setLocationState(formatGeoCodeResult(payload));
  }, []);

  useRemoveWindowGoogle();

  const onSubmit = () => {
    if (!locationState.lat || !locationState.lng) return;

    dispatch(
      setLocationCookieStart({
        lat: String(locationState.lat ? locationState.lat : ''),
        lng: String(locationState.lng ? locationState.lng : ''),
      })
    );
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
