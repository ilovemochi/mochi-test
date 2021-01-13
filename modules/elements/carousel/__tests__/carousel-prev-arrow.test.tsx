import { render, screen, userEvent } from '@test-utils';

import { PrevArrow } from '../carousel-arrows';

describe('Carousel prev arrow testing', () => {
  const onClick = jest.fn();
  it('allows clicking', () => {
    render(<PrevArrow onClick={onClick} />, { newTheme: true });

    const button = screen.getByRole('button', { name: /previous items/i });

    expect(onClick).not.toHaveBeenCalled();
    expect(screen.getByRole('img', { name: /previous items/i })).toBeInTheDocument();

    userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
