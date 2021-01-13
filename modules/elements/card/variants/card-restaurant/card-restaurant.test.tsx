import { act, fireEvent, render, screen, waitFor } from '@test-utils';

import CardRestaurant from './index';

describe('Restaurant card testing', () => {
  it('properly renders the mini restaurant card', async () => {
    const storeName = 'store name';
    const { container } = render(
      <CardRestaurant
        compressed
        image={{ small: 'img-300w.png', medium: 'img-600w.png' }}
        onClick={jest.fn()}
        logo="/img-300w.png"
        storeName={storeName}
        isOpen
        limitHour={10}
        distanceMin={10}
        likes={10}
      />,
      { newTheme: true }
    );

    await waitFor(() =>
      expect(screen.getByRole('article', { name: /restaurant/i })).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.getByRole('figure', { name: storeName })).toBeInTheDocument()
    );
    await waitFor(() => expect(screen.getByAltText(storeName)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByAltText(`${storeName} logo`)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(storeName)).toBeInTheDocument());

    expect(container).toMatchSnapshot();
  });
  it('properly renders the restaurant card', async () => {
    const storeName = 'store name';
    const { container } = render(
      <CardRestaurant
        onClick={jest.fn()}
        logo="/img-300w.png"
        storeName="store name"
        isOpen
        limitHour={10}
        distanceMin={10}
        likes={10}
        image={{ small: 'img-300w.png', medium: 'img-600w.png' }}
      />,
      { newTheme: true }
    );

    await waitFor(() =>
      expect(screen.getByRole('article', { name: /restaurant/i })).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.getByRole('figure', { name: storeName })).toBeInTheDocument()
    );
    await waitFor(() => expect(screen.getByAltText(storeName)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByAltText(`${storeName} logo`)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(storeName)).toBeInTheDocument());
    expect(container).toMatchSnapshot();
  });
  it('allows restaurant card click', async () => {
    const onClick = jest.fn();
    render(
      <CardRestaurant
        isOpen
        onClick={onClick}
        logo="/img-300w.png"
        storeName="store name"
        limitHour={10}
        distanceMin={10}
        likes={10}
        image={{ small: 'img-300w.png', medium: 'img-600w.png' }}
      />,
      { newTheme: true }
    );

    await act(async () => {});

    const card = screen.getByRole('article', { name: /restaurant/i });
    expect(card).toBeInTheDocument();

    fireEvent.click(card);
    await waitFor(() => expect(onClick).toHaveBeenCalledTimes(1));
  });
});
