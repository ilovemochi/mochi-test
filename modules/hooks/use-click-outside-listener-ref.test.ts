import React, { FC } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

import useClickOutsideListenerRef from './use-click-outside-listener-ref';

describe('useClickOutsideListenerRef hook', () => {
  it('it should create a script element for the google script', () => {
    let div = document.createElement('div');
    div.id = 'div';
    div.textContent = 'rodax';
    document.body.appendChild(div);

    const mockClick = jest.fn();

    const { result, unmount, rerender } = renderHook(() => useClickOutsideListenerRef(mockClick));
    // expect(document.querySelectorAll('script').length).toBe(1);

    // Simulate a click on a element
    // Check if the click was from Mouse or from pressing the Escape Keyboard

    // expect(mockClick).toHaveBeenCalled();
    // expect(document.querySelectorAll('#div')).

    console.debug(document.body);

    fireEvent.click(screen.getByText('rodax'));

    expect(mockClick).not.toHaveBeenCalled();
  });
});
