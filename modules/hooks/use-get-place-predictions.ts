import { hasPath } from 'ramda';
import { useEffect, useState } from 'react';

import DEFAULT_CONFIG from '../constants/config';
import { AutocompletePrediction, AutocompletionRequest } from '../typescript';
import useIsMounted from './use-is-mounted';
import useScript from './use-script';

export type UseGetPlacePredictions = (
  request: AutocompletionRequest,
  onChange: (data: AutocompletePrediction[]) => void
) => boolean;

const getGoogleAutocompleteService = hasPath(['google', 'maps', 'places', 'AutocompleteService']);

const useGetPlacePredictions: UseGetPlacePredictions = (request, onChange) => {
  const [loaded, setLoaded] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const isMounted = useIsMounted();

  useScript({
    id: DEFAULT_CONFIG.GOOGLE_MAPS_SCRIPT_ID,
    src: `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`,
    callback: () => setScriptLoaded(true),
    async: false,
  });

  useEffect(() => {});

  const isGoogleAutocompleteServiceLoaded = process.browser
    ? getGoogleAutocompleteService(window)
    : false;

  useEffect(() => {
    if (isMounted.current && isGoogleAutocompleteServiceLoaded && !loaded && scriptLoaded)
      setLoaded(true);
  }, [isGoogleAutocompleteServiceLoaded, isMounted.current, loaded, scriptLoaded]);

  useEffect(() => {
    if (isMounted.current && isGoogleAutocompleteServiceLoaded && loaded && request.input) {
      const AutoCompleteService = new window.google.maps.places.AutocompleteService();
      AutoCompleteService.getPlacePredictions(request, (predictions, status) => {
        if (status !== window.google.maps.places.PlacesServiceStatus.OK) return;
        onChange(predictions);
      });
    }
  }, [isMounted.current, request.input, onChange, isGoogleAutocompleteServiceLoaded, loaded]);

  return loaded;
};

export default useGetPlacePredictions;
