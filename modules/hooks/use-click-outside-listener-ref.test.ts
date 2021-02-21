import React, { FC } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

import useClickOutsideListenerRef from './use-click-outside-listener-ref';

describe('useClickOutsideListenerRef hook', () => {
  const div = document.createElement('div');
  div.id = 'div';
  div.textContent = 'rodax';

  function createHtmlElement(div: HTMLElement) {
    document.body.appendChild(div);
  }

  function removeHtmlElement(div: HTMLElement) {
    document.body.removeChild(div);
  }

  beforeEach(() => {
    createHtmlElement(div);
  });

  afterEach(() => {
    removeHtmlElement(div);
  });

  it('should call mockClick on detecting the Escape key', () => {
    const mockClick = jest.fn();

    const { result } = renderHook(() => useClickOutsideListenerRef(mockClick));

    fireEvent.keyUp(screen.getByText('rodax'), { key: 'Escape', code: 'Escape' });
    expect(mockClick).toHaveBeenCalled();
  });

  // This will never get called
  // because the custom hook does not have
  // a ref element
  // instead, the ref is set to null.
  it('should NOT CALL mockClick, on detecting mouseClick', () => {
    const mockClick = jest.fn();

    const { result  } = renderHook(() => useClickOutsideListenerRef(mockClick));

    fireEvent.click(document.body);
    expect(mockClick).not.toHaveBeenCalled();
  });
});
