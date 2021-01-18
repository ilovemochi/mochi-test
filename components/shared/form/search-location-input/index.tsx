import DEFAULT_CONFIG from '@constants/config';
import { useGeoCode, useGetPlacePredictions } from '@hooks';
import { AutocompletePrediction, GeocoderResult } from '@typescript';
import { getFormattedAddress, getReactHookFormError } from '@utils/helper-functions';
import { head, o, pathOr } from 'ramda';
import { FC, KeyboardEvent, useCallback, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { v4 } from 'uuid';

import TextField from '../../../../elements/text-field';
import FieldErrorMessage from '../field-error-message';
import ReactFormFieldWrapper from '../form.styles';
import { SearchLocationInputProps } from './search-location-input.types';
import { PredictionButton, PredictionItem, PredictionsWrapper } from './styles';

const SearchLocationInput: FC<SearchLocationInputProps> = ({
  errors,
  handleChange,
  disabled,
  defaultValue = '',
  predictionsContainerWidth = '100%',
  predictionsContainerPositionX = '0',
  placeholder = '',
  noBorder = false,
  ...otherProps
}) => {
  const [query, setQuery] = useState(defaultValue);
  const [predictions, setPredictions] = useState<Array<AutocompletePrediction>>([]);
  const [placeId, setPlaceId] = useState('');
  const newStreet = useRef<null | string>(null);
  const [debouncedQuery] = useDebounce(query, 1000);

  const handleSelectPrediction = useCallback(
    (results: GeocoderResult[]) => {
      const result = head(results);
      newStreet.current = getFormattedAddress(result);
      setQuery('');
      handleChange(result);
    },
    [handleChange]
  );

  const predictionsLoaded = useGetPlacePredictions(
    {
      input: query === defaultValue ? '' : debouncedQuery,
      componentRestrictions: DEFAULT_CONFIG.COMPONENT_RESTRICTIONS,
    },
    setPredictions
  );

  const geoCodeLoaded = useGeoCode({ placeId }, handleSelectPrediction);
  const error = getReactHookFormError({ name: 'street', errors });

  const handleKeyEnter = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (!geoCodeLoaded) return;
      const firstPrediction = head(predictions);

      if (!firstPrediction || event.key !== 'Enter') return;

      setPlaceId(firstPrediction.place_id);
      setPredictions([]);
    },
    [geoCodeLoaded, predictions]
  );

  const isDisabled = !predictionsLoaded || !!disabled;

  return (
    <ReactFormFieldWrapper>
      <TextField
        noBorder={noBorder}
        name="street"
        label="street"
        disabled={isDisabled}
        autoComplete="chrome-off"
        onChange={event => {
          o(setQuery, pathOr('', ['target', 'value']))(event);
          newStreet.current = null;
        }}
        onKeyDown={handleKeyEnter}
        placeholder={placeholder}
        aria-label="Input Street"
        value={newStreet.current ? newStreet.current : query}
        {...otherProps}
      />
      {!!predictions?.length && query !== '' && !isDisabled ? (
        <PredictionsWrapper width={predictionsContainerWidth} left={predictionsContainerPositionX}>
          {predictions.map(item => (
            <PredictionItem key={v4()}>
              <PredictionButton
                type="button"
                onClick={() => {
                  if (geoCodeLoaded) {
                    setPlaceId(item.place_id);
                    setPredictions([]);
                  }
                }}
              >
                {item.description}
              </PredictionButton>
            </PredictionItem>
          ))}
        </PredictionsWrapper>
      ) : null}
      {!!error && <FieldErrorMessage errors={errors} name="street" />}
    </ReactFormFieldWrapper>
  );
};

export default SearchLocationInput;
