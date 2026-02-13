import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { Input } from './Input';

describe('Input', () => {
  it('renders with a label', () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('associates label with input via htmlFor/id', () => {
    render(<Input label="Username" />);
    const input = screen.getByLabelText('Username');
    expect(input.tagName).toBe('INPUT');
  });

  it('uses provided id over generated id', () => {
    render(<Input label="Name" id="custom-id" />);
    expect(screen.getByLabelText('Name')).toHaveAttribute('id', 'custom-id');
  });

  it('renders helper text', () => {
    render(<Input label="Password" helperText="Must be 8+ characters" />);
    expect(screen.getByText('Must be 8+ characters')).toBeInTheDocument();
  });

  it('links helper text via aria-describedby', () => {
    render(<Input label="Password" helperText="Must be 8+ characters" />);
    const input = screen.getByLabelText('Password');
    const helperId = input.getAttribute('aria-describedby');
    expect(helperId).toBeTruthy();
    expect(document.getElementById(helperId!)).toHaveTextContent(
      'Must be 8+ characters',
    );
  });

  it('renders error message and hides helper text', () => {
    render(
      <Input
        label="Email"
        helperText="Enter your email"
        error="Invalid email"
      />,
    );
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
    expect(screen.queryByText('Enter your email')).not.toBeInTheDocument();
  });

  it('sets aria-invalid when error is present', () => {
    render(<Input label="Email" error="Required" />);
    expect(screen.getByLabelText('Email')).toHaveAttribute(
      'aria-invalid',
      'true',
    );
  });

  it('error message has role="alert"', () => {
    render(<Input label="Email" error="Required field" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Required field');
  });

  it('does not set aria-invalid when there is no error', () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText('Email')).not.toHaveAttribute('aria-invalid');
  });

  it('visually hides label when hideLabel is true', () => {
    render(<Input label="Search" hideLabel />);
    const label = screen.getByText('Search');
    expect(label).toHaveClass('nex-sr-only');
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    render(<Input label="Name" size="lg" />);
    expect(screen.getByLabelText('Name')).toHaveClass('nex-input--lg');
  });

  it('handles user input', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(<Input label="Name" onChange={handleChange} />);
    await user.type(screen.getByLabelText('Name'), 'hello');
    expect(handleChange).toHaveBeenCalledTimes(5);
  });

  it('renders as disabled', () => {
    render(<Input label="Name" disabled />);
    expect(screen.getByLabelText('Name')).toBeDisabled();
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input label="Name" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('applies fullWidth class to wrapper', () => {
    const { container } = render(<Input label="Name" fullWidth />);
    expect(container.firstChild).toHaveClass('nex-input-wrapper--full-width');
  });
});
