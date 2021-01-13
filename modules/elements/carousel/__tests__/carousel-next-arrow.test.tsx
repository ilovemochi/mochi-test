import { render, screen, userEvent } from '@test-utils';

import { NextArrow } from '../carousel-arrows';

describe('Carousel next arrow testing', () => {
  const onClick = jest.fn();
  it('allows clicking', () => {
    render(<NextArrow onClick={onClick} />, { newTheme: true });

    const button = screen.getByRole('button', { name: /next items/i });

    expect(onClick).not.toHaveBeenCalled();
    expect(screen.getByRole('img', { name: /next items/i })).toBeInTheDocument();

    userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
