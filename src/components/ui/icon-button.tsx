import cn from '@/utils/cn';
import type React from 'react';
import { Button as ButtonBase } from 'react-aria-components';

interface IconButtonProps extends React.PropsWithChildren, Omit<React.ComponentProps<typeof ButtonBase>, 'onClick' | 'children'> {
  size?: 'sm' | 'md' | 'lg';
  inline?: boolean;
}

const IconButton = ({
  children,
  className = '',
  size = 'md',
  inline = false,
  ...props
}: IconButtonProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  const baseClasses = [
    // Base styling
    'relative inline-flex items-center justify-center',
    'rounded-full border-0 outline-none cursor-pointer',
    'transition-all duration-200 ease-in-out',
    'overflow-hidden',

    // Color and background
    'text-gray-600 bg-transparent',

    // Hover effects
    'hover:bg-gray-100 hover:text-gray-800',

    // Active/pressed state
    'pressed:bg-gray-200 pressed:scale-95',

    // Focus states
    'focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',

    // Disabled state
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent',

    // Ripple effect preparation
    'before:content-[""] before:absolute before:inset-0',
    'before:bg-current before:opacity-0 before:rounded-full',
    'before:scale-0 before:transition-all before:duration-300',
    'active:before:scale-100 active:before:opacity-10',

    // Size classes
    sizeClasses[size],

    // Custom classes
    className,
  ].filter(Boolean).join(' ');

  if(inline) {

    return (
      <div className="relative h-fit">
        <ButtonBase
          className={cn(
            baseClasses,
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0',
          )}
          {...props}
        />
        <div className="pointer-events-none relative z-10">
          {children}
        </div>
      </div>
    );
  }

  return (
    <ButtonBase
      className={baseClasses}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

export default IconButton;