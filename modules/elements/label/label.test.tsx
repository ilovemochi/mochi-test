import { render, screen } from '@test-utils';

import Label from './index';

describe('Testing label render', () => {
  it('should render a input label', () => {
    render(<Label label="label" />);
    expect(screen.getByText('label')).toBeInTheDocument();
  });
  it('should render a required input label', () => {
    render(<Label label="label" required />);
    expect(screen.getByText('label *')).toBeInTheDocument();
  });
  it('should not render a input label', () => {
    render(<Label label="label" labelLess required />);
    expect(screen.queryByText('label')).not.toBeInTheDocument();
    expect(screen.queryByText('label *')).not.toBeInTheDocument();
  });
});
