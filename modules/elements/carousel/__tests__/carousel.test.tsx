import { render, screen } from '@test-utils';
import { map } from 'ramda';
import { v4 } from 'uuid';

import Carousel from '..';
import Card from '../../card';

describe('Carousel testing', () => {
  it('should render arrows and allow click', () => {
    render(
      <Carousel>
        {map(() => (
          <Card
            key={v4()}
            image={{
              small: 'absolut-300w.png',
              medium: 'absolut-600w.png',
            }}
            storeName="Mochi Store"
            productName="Amicone"
            onClick={() => {}}
            variant="essential"
          />
        ))([1, 2, 3, 4, 5, 6, 7, 8, 9])}
      </Carousel>,
      { newTheme: true }
    );

    const arrows = screen.getAllByRole('button', { name: /items/i });

    expect(arrows).toHaveLength(2);
  });
});
