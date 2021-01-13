import { fireEvent, render, screen } from '@test-utils';

import CardEssential from './index';

describe('Card render tests', () => {
  test('Essential card render text and allows click', () => {
    const onClick = jest.fn();
    const { container } = render(
      <CardEssential
        image={{ small: 'img-300w.png', medium: 'img-600w.png' }}
        storeName="MochiStore"
        productName="nocal"
        onClick={onClick}
      />,
      { newTheme: true }
    );
    const card = screen.getByRole('article');
    expect(card).toBeInTheDocument();

    fireEvent.click(card);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(screen.getByText('nocal')).toBeInTheDocument();
    expect(screen.getByText('MochiStore')).toBeInTheDocument();
    expect(screen.getByRole('figure')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
