import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import type { Size, Variant, BaseComponentProps } from '../../types';
import { cn } from '../../utils/cn';
import './Button.css';

export interface ButtonProps
  extends
    BaseComponentProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'style'> {
  /** The visual style variant of the button */
  variant?: Variant;
  /** The size of the button */
  size?: Size;
  /** Whether the button takes the full width of its container */
  fullWidth?: boolean;
  /** Content to render inside the button */
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      disabled = false,
      className,
      children,
      type = 'button',
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          'nex-button',
          `nex-button--${variant}`,
          `nex-button--${size}`,
          fullWidth && 'nex-button--full-width',
          disabled && 'nex-button--disabled',
          className,
        )}
        aria-disabled={disabled || undefined}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
