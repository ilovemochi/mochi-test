import { fontSizes } from '@design-system';
import { render, screen, userEvent } from '@test-utils';
import { FaUserCircle } from 'react-icons/fa';

import Text from '../text';
import Button from './index';

describe('Button render tests', () => {
  it('allows clicking', () => {
    const onClick = jest.fn();
    render(<Button variant="primary" onClick={onClick} />);
    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(button).not.toBeDisabled();
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not allow clicking', () => {
    const onClick = jest.fn();
    render(<Button variant="primary" disabled onClick={onClick} />);
    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(button).toBeDisabled();
    expect(onClick).not.toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('properly renders children', () => {
    render(
      <Button variant="primary" disabled onClick={jest.fn}>
        <Text variant="buttonTextSmall">Price</Text>
      </Button>
    );

    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });
  it('properly renders icons', () => {
    const { container } = render(
      <Button variant="icon" aria-label="price-icon" onClick={jest.fn}>
        <FaUserCircle data-testid="icon" aria-hidden="true" focusable="false" size={fontSizes.H4} />
      </Button>
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it('properly renders a label and a text', () => {
    const { container } = render(
      <Button variant="icon" aria-label="user" onClick={jest.fn}>
        <>
          <FaUserCircle
            data-testid="icon"
            aria-hidden="true"
            focusable="false"
            size={fontSizes.H4}
          />
          <Text variant="buttonText">Labelled Button</Text>
        </>
      </Button>
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByText('Labelled Button')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
