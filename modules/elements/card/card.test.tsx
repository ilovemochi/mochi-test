import { render, screen, waitFor } from '@test-utils';

import Card from './index';

jest.mock('uuid', () => {
  let counter = 0;
  return {
    v4: jest.fn().mockImplementation(() => {
      counter += 1;
      return counter;
    }),
  };
});

describe('Card render tests', () => {
  it('should render essential card', async () => {
    const { container } = render(
      <Card
        variant="essential"
        image={{ small: 'img-300w.png', medium: 'img-600w.png' }}
        storeName="MochiStore"
        productName="nocal"
        onClick={jest.fn()}
      />,
      { newTheme: true }
    );

    await waitFor(() => expect(screen.getByRole('figure', { name: /nocal/i })).toBeInTheDocument());
    await waitFor(() => expect(screen.getByRole('article')).toBeInTheDocument());
    expect(container).toMatchSnapshot();
  });
  it('should render mini product card', async () => {
    const { container } = render(
      <Card
        variant="miniProduct"
        description="tomates 20g, cebola 15g, alface 5g, 1 fatia de pão e molho janonês."
        image={{ small: 'img-300w.png', medium: 'img-600w.png' }}
        productName="nocal"
        price={1000}
        onClick={jest.fn()}
        prepareTime="20min"
        btnText="add to cart"
      />,
      { newTheme: true }
    );
    await waitFor(() =>
      expect(screen.getByRole('article', { name: /product/i })).toBeInTheDocument()
    );
    expect(container).toMatchSnapshot();
  });
  it('should render product card', async () => {
    const { container } = render(
      <Card
        variant="product"
        description="tomates 20g, cebola 15g, alface 5g, 1 fatia de pão e molho janonês."
        image={{ small: 'img-300w.png', medium: 'img-600w.png' }}
        productName="nocal"
        price={1000}
        onClick={jest.fn()}
        prepareTime="20min"
        btnText="add to cart"
      />,
      { newTheme: true }
    );

    await waitFor(() =>
      expect(screen.getByRole('article', { name: /product/i })).toBeInTheDocument()
    );
    expect(container).toMatchSnapshot();
  });
  it('properly renders the mini restaurant card', async () => {
    const { container } = render(
      <Card
        variant="miniRestaurant"
        image={{ small: 'img-300w.png', medium: 'img-600w.png' }}
        onClick={jest.fn()}
        logo="/img-300w.png"
        storeName="store name"
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
    expect(container).toMatchSnapshot();
  });
  it('properly renders the restaurant card', async () => {
    const { container } = render(
      <Card
        variant="restaurant"
        image={{ small: 'img-300w.png', medium: 'img-600w.png' }}
        onClick={jest.fn()}
        logo="/img-300w.png"
        storeName="store name"
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
    expect(container).toMatchSnapshot();
  });
});
