import { useClickOutsideListenerRef } from '../index';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

describe('Testing a useClickOutsideListenerRef hook', () => {
  it('Testing hook return null as expected', () => {
    const { result } = renderHook(() => useClickOutsideListenerRef(() => {}));

    expect(result.current.current).toBeFalsy();
  });

  it('Testing when user press Escape', () => {
    render(<SimpleView />);

    const escapeEvent = screen.getByText(/simple test component/i);

    const isEscaped = fireEvent.keyUp(escapeEvent, { key: 'Escape', code: 'Escape' });

    expect(isEscaped).toBe(true);
  });
});

const SimpleView = () => {
  useClickOutsideListenerRef(() => {
    return true;
  });

  return (
    <div id="test">
      <h1>Simple Test Component</h1>
    </div>
  );
};
