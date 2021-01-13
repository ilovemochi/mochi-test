import { fireEvent, render, screen } from '@test-utils';

import SelectField from './index';

describe('Select Field Testing', () => {
  const props = {
    center: true,
    required: true,
    disabled: false,
    noBorder: false,
    readonly: false,
    noPadding: false,
    labelLess: false,
    defaultOptionDescription: undefined,
    width: '35rem',
    label: 'Gênero',
    name: 'gender',
    options: ['male', 'female', 'other'],
  };
  it('On change', () => {
    const onChange = jest.fn();

    render(<SelectField onChange={onChange} {...props} />);

    const select = screen.getByTestId('select');
    fireEvent.change(select);

    expect(select).toBeInTheDocument();
    expect(screen.getByText('Gênero *')).toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
