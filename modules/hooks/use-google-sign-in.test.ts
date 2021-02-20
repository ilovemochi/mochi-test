import React, { FC } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import useGoogleSignIn from './use-google-sign-in';

const DIV = document.createElement('div');

const UseGoogleSignInProps = {
  buttonId: 'google-signin-button',
  onSuccess: () => {},
  onFailure: () => {},
};

function createHtmlElement(div) {
  div.id = UseGoogleSignInProps.buttonId;
  document.body.appendChild(div);
}

describe('useGoogleSignIn hook', () => {
  beforeEach(() => {
    createHtmlElement(DIV);
  });

  afterEach(() => {
    document.body.removeChild(DIV);
  });

  it('it should return false if there is no button with the provided #id', async () => {
    const { result, unmount, rerender } = await renderHook(() =>
      useGoogleSignIn(UseGoogleSignInProps)
    );

    expect(document.getElementById(UseGoogleSignInProps.buttonId)?.id).toBe(
      UseGoogleSignInProps.buttonId
    );

    await expect(result.current.loaded).toBe(true);
    // expect(document.querySelectorAll('#google-signin-button').length).toBe(1);
  });

  it('it should create a script element for the google script', () => {
    const { result, unmount, rerender } = renderHook(() => useGoogleSignIn(UseGoogleSignInProps));
    expect(document.querySelectorAll('script').length).toBe(1);
  });
});
