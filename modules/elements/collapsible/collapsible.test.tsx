import { render, screen } from '@test-utils';
import { always } from 'ramda';
import { FaLock } from 'react-icons/fa';

import Collapsible, { renderCollapsibles } from './index';

describe('Collapsible tests', () => {
  const props = {
    Icon: always(<FaLock data-testid="icon" />),
    inline: false,
    content:
      'Nisi sunt culpa dolore enim nulla occaecat consectetur exercitation Lorem. Sunt excepteur consectetur nostrud exercitation eu velit sint laboris ad adipisicing laboris. Esse proident do aute nostrud qui consectetur. Eiusmod consectetur ex culpa minim ullamco cupidatat reprehenderit Lorem sunt.',
    title: 'Tap to collapse',
  };
  it('should render collapsible and render icon when is open or closed', () => {
    const { rerender } = render(<Collapsible {...props} />);

    expect(screen.getByText('Tap to collapse')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByText(props.content)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /show/i })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: /hide/i })).not.toBeInTheDocument();

    rerender(<Collapsible opened {...props} />);
    expect(screen.getByRole('img', { name: /hide/i })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: /show/i })).not.toBeInTheDocument();
  });
  it('should render without header icon', () => {
    render(<Collapsible {...{ ...props, Icon: undefined }} />);

    expect(screen.getByRole('img', { name: /show/i })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: /hide/i })).not.toBeInTheDocument();
    expect(screen.getByText('Tap to collapse')).toBeInTheDocument();
    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
    expect(screen.getByText(props.content)).toBeInTheDocument();
  });
  it('testing a multiple collapsible render', () => {
    render(<>{renderCollapsibles({ data: [props, props, props] })}</>);

    expect(screen.getAllByText(props.content)).toHaveLength(3);
    expect(screen.getAllByText('Tap to collapse')).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /show/i })).toHaveLength(3);
    expect(screen.queryAllByRole('img', { name: /hide/i })).toHaveLength(0);
    expect(screen.getAllByTestId('icon')).toHaveLength(3);
  });
});
