import { useScript } from '../index';
import { renderHook } from '@testing-library/react-hooks';
import DEFAULT_CONFIG from '../../constants/config';
import { render, screen } from '@testing-library/react';
import React, { Component } from 'react';
import { removeScript, loadScript } from './../../utils/helper-functions';

const GoogleMapTest = () => {
  return (
    <div>
      <div id="mapG">google map here</div>
    </div>
  );
};

describe('Testing a useScript hook', () => {
  it('Testing if a script is loaded correctly', () => {
    render(<GoogleMapTest />);

    var isCorrectlyLoaded = false;

    const setIsCorrectlyLoaded = value => {
      isCorrectlyLoaded = value;
    };

    const data = {
      src: `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`,
      id: 'mapG',
      callback: () => setIsCorrectlyLoaded(true),
      async: false,
    };

    const { result } = renderHook(() => useScript(data));

    expect(isCorrectlyLoaded).toBe(true);
    expect(result.current).toBeUndefined();
  });

  it('Testing when the script is not loaded correctly', () => {
    render(<GoogleMapTest />);

    var isCorrectlyLoaded = false;

    const setIsCorrectlyLoaded = value => {
      isCorrectlyLoaded = value;
    };

    const data = {
      src: `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`,
      id: '',
      callback: () => setIsCorrectlyLoaded(true),
      async: false,
    };

    const { result } = renderHook(() => useScript(data));

    expect(isCorrectlyLoaded).toBe(false);
    expect(result.current).toBeUndefined();
  });

  it('Testing if a script is removed correctly', () => {});
});
