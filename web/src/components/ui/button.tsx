import type React from 'react';
import cn from '@/utils/cn';
import { Button as ButtonBase, type PressEvent } from 'react-aria-components';
import Spinner from './spinner';

interface ButtonProps extends Omit<React.RefAttributes<HTMLButtonElement>, 'onClick'>,
                              Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  fullWidth?: boolean;
  variant?: 'primary' | 'outlined' | 'secondary' | 'text';
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  formAction?: string;
  value?: string;
  onPress?: (e: PressEvent) => void;
  onFocus?: (e: React.FocusEvent<Element, Element>) => void;
  onBlur?: (e: React.FocusEvent<Element, Element>) => void;
  onFocusChange?: (isFocused: boolean) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  fullWidth = false,
  variant = 'primary',
  loading = false,
  startIcon,
  endIcon,
  size = 'md',
  className,
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-lg';

  const sizeClasses = {
    sm: 'h-8 px-3 text-sm gap-1.5',
    md: 'h-10 px-4 text-sm gap-2',
    lg: 'h-12 px-6 text-base gap-2.5',
  };

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600',
    outlined: 'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-600',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-600',
    text: 'bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-600',
  };

  const widthClasses = fullWidth ? 'w-full' : '';

  return (
    <ButtonBase
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        widthClasses,
        className,
      )}
      isDisabled={disabled}
      isPending={loading}
      {...props}
    >
      {loading ? (
        <Spinner
          variant="ios"
          className="text-white h-6 w-6"
        />
      ) : (
        <>
          {startIcon && <span className="shrink-0">{startIcon}</span>}
          {children}
          {endIcon && <span className="shrink-0">{endIcon}</span>}
        </>
      )}
    </ButtonBase>
  );
};

export default Button;