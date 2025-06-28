import cn from '@/utils/cn';
import { Button } from 'react-aria-components';

interface ChipProps {
  className?: string;
  label: string;
  variant?: 'solid' | 'outlined';
  size?: 'sm' | 'base';
  onDelete?: () => void;
  onClick?: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
);

export default function Chip({
  className,
  label,
  variant = 'solid',
  size = 'base',
  onDelete,
  onClick,
  startIcon,
  endIcon,
}: ChipProps) {
  const baseClasses = 'inline-flex items-center gap-1.5 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500';

  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs rounded-full',
    base: 'px-3 py-1.5 text-sm rounded-full',
  };

  const variantClasses = {
    solid: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outlined: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
  };

  // Determine the end content: endIcon takes priority, then delete button if onDelete is provided
  const endContent = endIcon || (onDelete && (
    <Button
      onPress={onDelete}
      className="ml-1 p-0.5 rounded-full hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
      aria-label="Delete"
    >
      <XIcon className={cn(
        size === 'sm' ? 'w-3 h-3' : 'w-4 h-4',
      )} />
    </Button>
  ));

  const chipContent = (
    <>
      {startIcon && (
        <span className={cn(
          'flex-shrink-0',
          size === 'sm' ? '[&>*]:w-3 [&>*]:h-3' : '[&>*]:w-4 [&>*]:h-4',
        )}>
          {startIcon}
        </span>
      )}
      <span className="truncate">{label}</span>
      {endContent && (
        <span className={cn(
          'flex-shrink-0',
          // Only apply icon sizing if it's not the delete button (which has its own sizing)
          !onDelete || endIcon ? (size === 'sm' ? '[&>*]:w-3 [&>*]:h-3' : '[&>*]:w-4 [&>*]:h-4') : '',
        )}>
          {endContent}
        </span>
      )}
    </>
  );

  // If there's an onClick handler, wrap in a Button for better accessibility
  if (onClick) {
    return (
      <Button
        onPress={onClick}
        className={cn(
          baseClasses,
          sizeClasses[size],
          variantClasses[variant],
          'cursor-pointer',
          className,
        )}
      >
        {chipContent}
      </Button>
    );
  }

  // Otherwise, render as a div
  return (
    <div
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      {chipContent}
    </div>
  );
}