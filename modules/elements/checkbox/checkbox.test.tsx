import { render, screen, userEvent } from '@test-utils';

import Checkbox from './index';

describe('Checkbox testing', () => {
  it('allows checkbox click', () => {
    let active = true;
    const onClick = jest.fn().mockImplementation(() => {
      active = !active;
    });
    render(<Checkbox variant="rounded" active={active} label="label" onClick={onClick} />);

    const checkbox = screen.getByRole('checkbox');
    expect(active).toBeTruthy();

    userEvent.click(checkbox);
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(active).toBeFalsy();

    userEvent.click(checkbox);
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(2);
    expect(active).toBeTruthy();
  });
  it('doesnt allow checkbox click', () => {
    const onClick = jest.fn();
    render(<Checkbox variant="rounded" disabled label="label" onClick={onClick} />);
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);
    expect(onClick).not.toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
