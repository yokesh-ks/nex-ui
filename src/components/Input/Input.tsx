import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes } from 'react';
import type { Size, BaseComponentProps } from '../../types';
import { cn } from '../../utils/cn';
import './Input.css';

export interface InputProps
  extends
    BaseComponentProps,
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'className' | 'style' | 'size'
    > {
  /** Label text displayed above the input */
  label: string;
  /** Whether to visually hide the label (still accessible to screen readers) */
  hideLabel?: boolean;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error message displayed below the input (replaces helperText) */
  error?: string;
  /** The size of the input */
  size?: Size;
  /** Whether the input takes the full width of its container */
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hideLabel = false,
      helperText,
      error,
      size = 'md',
      fullWidth = false,
      disabled = false,
      className,
      style,
      id: providedId,
      'aria-describedby': ariaDescribedBy,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = providedId ?? generatedId;
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;

    const hasError = Boolean(error);
    const descriptionId = hasError
      ? errorId
      : helperText
        ? helperId
        : ariaDescribedBy;

    return (
      <div
        className={cn(
          'nex-input-wrapper',
          fullWidth && 'nex-input-wrapper--full-width',
          className,
        )}
        style={style}
      >
        <label
          htmlFor={inputId}
          className={cn('nex-input-label', hideLabel && 'nex-sr-only')}
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          aria-invalid={hasError || undefined}
          aria-describedby={descriptionId || undefined}
          className={cn(
            'nex-input',
            `nex-input--${size}`,
            hasError && 'nex-input--error',
            disabled && 'nex-input--disabled',
          )}
          {...rest}
        />
        {hasError && (
          <p id={errorId} className="nex-input-error" role="alert">
            {error}
          </p>
        )}
        {!hasError && helperText && (
          <p id={helperId} className="nex-input-helper">
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
