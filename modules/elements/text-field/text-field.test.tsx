import { render, screen, userEvent } from '@test-utils';

import TextField from './index';

describe('Text field render tests', () => {
  const props = {
    center: true,
    required: true,
    disabled: false,
    noBorder: false,
    readonly: false,
    noPadding: false,
    labelLess: false,
    isPasswordField: false,
    width: '35rem',
    label: 'User name',
    placeholder: 'User placeholder',
    name: 'gender',
  };
  it('does not display the password elements', () => {
    const onChange = jest.fn();
    render(<TextField type="text" onChange={onChange} {...props} />, { newTheme: true });

    const input = screen.getByRole('textbox');
    userEvent.type(input, 'Maputo');

    expect(input).toBeInTheDocument();
    expect(screen.getByPlaceholderText('User placeholder')).toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(6);
    expect(screen.queryByRole('button', { name: /password/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /show password/i })).not.toBeInTheDocument();
  });
  it('displays the password elements', () => {
    const onChange = jest.fn();
    render(<TextField {...props} label="password" type="password" onChange={onChange} />, {
      newTheme: true,
    });

    const input = screen.getByPlaceholderText('User placeholder');
    userEvent.type(input, 'Teste123');
    expect(screen.getByRole('img', { name: /password/i })).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(8);

    const showPassword = screen.getByRole('button', { name: /show password/i });
    expect(showPassword).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /hide password/i })).not.toBeInTheDocument();

    userEvent.click(showPassword);
    expect(screen.getByRole('button', { name: /hide password/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /show password/i })).not.toBeInTheDocument();
  });
});
