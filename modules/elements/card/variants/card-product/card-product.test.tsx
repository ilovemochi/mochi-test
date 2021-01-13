import { render, screen, userEvent } from '@test-utils';

import ProductCard from './index';

jest.mock('uuid', () => {
  let counter = 0;
  return {
    v4: jest.fn().mockImplementation(() => {
      counter += 1;
      return counter;
    }),
  };
});

describe('Product card element testing', () => {
  it('properly renders the mini product card', () => {
    const btnText = 'add to cart';
    const { container } = render(
      <ProductCard
        compressed
        description="tomates 20g, cebola 15g, alface 5g, 1 fatia de pão e molho janonês."
        image={{ small: 'img-300w.png', medium: 'img-600w.png' }}
        productName="nocal"
        price={1000}
        onClick={jest.fn()}
        prepareTime="20min"
        btnText={btnText}
        key="test"
      />,
      { newTheme: true }
    );
    expect(screen.getByText('nocal')).toBeInTheDocument();
    expect(screen.getByAltText('nocal')).toBeInTheDocument();
    expect(screen.getByText('Included:')).toBeInTheDocument();
    expect(screen.queryByText('Time to prepare:')).not.toBeInTheDocument();
    expect(screen.queryByText('Price per unit:')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: btnText })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /add item/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /remove item/i })).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it('properly renders the product card', () => {
    const btnText = 'add to cart';
    const { container } = render(
      <ProductCard
        description="tomates 20g, cebola 15g, alface 5g, 1 fatia de pão e molho janonês."
        image={{ small: 'img-300w.png', medium: 'img-600w.png' }}
        productName="nocal"
        price={1000}
        onClick={jest.fn()}
        prepareTime="20min"
        btnText={btnText}
        key="test"
      />,
      { newTheme: true }
    );
    expect(screen.getByText('nocal')).toBeInTheDocument();
    expect(screen.getByAltText('nocal')).toBeInTheDocument();
    expect(screen.getByText('Included:')).toBeInTheDocument();
    expect(screen.getByText('Time to prepare:')).toBeInTheDocument();
    expect(screen.getByText('Price per unit:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: btnText })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add item/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /remove item/i })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it('allows add, remove and add items to cart', () => {
    const onClick = jest.fn();
    const btnText = 'add to cart';
    render(
      <ProductCard
        description="tomates 20g, cebola 15g, alface 5g, 1 fatia de pão e molho janonês."
        image={{ small: 'img-300w.png', medium: 'img-600w.png' }}
        productName="nocal"
        price={1000}
        onClick={onClick}
        prepareTime="20min"
        btnText={btnText}
        key="test"
      />,
      { newTheme: true }
    );
    const addToCartButton = screen.getByRole('button', { name: btnText });
    const incrementButton = screen.getByRole('button', { name: /add item/i });
    const decrementButton = screen.getByRole('button', { name: /remove item/i });

    userEvent.click(addToCartButton);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(1);

    userEvent.click(incrementButton);
    userEvent.click(incrementButton);
    userEvent.click(incrementButton);
    userEvent.click(decrementButton);

    userEvent.click(addToCartButton);
    expect(onClick).toHaveBeenCalledTimes(2);
    expect(onClick).toHaveBeenCalledWith(3);
  });
});
