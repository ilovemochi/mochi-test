import { render, screen } from '@test-utils';

import DateField from './index';

describe('Date field render tests', () => {
  const props = {
    center: true,
    required: true,
    labelLess: false,
    width: '35rem',
    disabled: false,
    label: 'data de nascimento',
    name: 'birthdate',
  };

  it('render default placeholder', () => {
    render(<DateField {...props} />);

    expect(screen.getByPlaceholderText('DD/MM/YYYY')).toBeInTheDocument();
  });
  it('render a default date', () => {
    render(<DateField defaultValues="12/13/2020" {...props} required={false} />);

    expect(screen.getByPlaceholderText('13/12/2020')).toBeInTheDocument();
  });
});
