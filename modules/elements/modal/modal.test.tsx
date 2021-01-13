import { render, screen, userEvent } from '@test-utils';

import Text from '../text';
import Modal from './index';

describe('Modal render test', () => {
  const onClick = jest.fn();
  const props = {
    isOpen: true,
    children: <Text variant="h1">Default</Text>,
    ariaHideApp: false,
  };
  it('shows the right UI if the modal is opened', () => {
    render(<Modal {...props} />);

    expect(screen.getByText('Default')).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
  it('shows the right UI if the modal is closed', () => {
    render(<Modal {...props} isOpen={false} />);

    expect(screen.queryByText('Default')).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
  it('has a button if it receives the prop onClose', () => {
    render(<Modal onClose={onClick} {...props} />);

    expect(screen.getByText('Default')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('Default')).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
