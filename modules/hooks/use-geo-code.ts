import { hasPath } from 'ramda';
import { useEffect, useState } from 'react';

import DEFAULT_CONFIG from '../constants/config';
import { GeocoderRequest, GeocoderResult } from '../typescript';
import useIsMounted from './use-is-mounted';
import useScript from './use-script';

export type UseGeoCode = (
  request: GeocoderRequest,
  onChange: (data: GeocoderResult[]) => void
) => boolean;

const getGeoCoderLoaded = hasPath(['google', 'maps', 'GeocoderStatus']);

const useGeoCode: UseGeoCode = (request, onChange) => {
  const [loaded, setLoaded] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const isMounted = useIsMounted();

  useScript({
    id: DEFAULT_CONFIG.GOOGLE_MAPS_SCRIPT_ID,
    src: `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`,
    callback: () => setScriptLoaded(true),
    async: false,
  });

  const isGeoCoderLoaded = process.browser ? getGeoCoderLoaded(window) : false;

  useEffect(() => {
    if (isMounted.current && isGeoCoderLoaded && !loaded && scriptLoaded) setLoaded(true);
  }, [isGeoCoderLoaded, isMounted.current, loaded, scriptLoaded]);

  useEffect(() => {
    if (isMounted.current && loaded && isGeoCoderLoaded && request.placeId) {
      const GeoCoder = new window.google.maps.Geocoder();
      GeoCoder.geocode(request, (result, status) => {
        if (status !== window.google.maps.GeocoderStatus.OK) return;
        onChange(result);
      });
    }
  }, [isMounted.current, request.placeId, loaded, isGeoCoderLoaded]);
  return loaded;
};

export default useGeoCode;
