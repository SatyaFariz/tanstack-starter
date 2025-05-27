import { Checkbox as CheckboxBase, type CheckboxProps as CheckboxPropsBase } from 'react-aria-components';
import cn from '@/utils/cn';

interface CheckboxProps extends Omit<CheckboxPropsBase, 'children'> {
  children?: React.ReactNode;
  className?: string;
}

export function Checkbox(
  { children, className, ...props }: CheckboxProps,
) {
  return (
    <CheckboxBase
      className={cn(
        'group flex items-center gap-3 text-sm font-medium text-gray-900',
        'disabled:text-gray-400 disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    >
      {({ isIndeterminate, isSelected, isDisabled }) => (
        <>
          <div className={cn(
            'flex items-center justify-center w-5 h-5 rounded border-2 transition-all duration-200',
            'focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
            isSelected || isIndeterminate
              ? 'bg-blue-600 border-blue-600'
              : 'bg-white border-gray-300 group-hover:border-gray-400',
            isDisabled && 'opacity-50 cursor-not-allowed',
            !isDisabled && 'cursor-pointer',
          )}>
            <svg
              viewBox="0 0 18 18"
              aria-hidden="true"
              className={cn(
                'w-3.5 h-3.5 text-white transition-opacity duration-200',
                isSelected || isIndeterminate ? 'opacity-100' : 'opacity-0',
              )}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isIndeterminate
                ? <line x1="4" y1="9" x2="14" y2="9" />
                : <polyline points="4,9 7.5,12.5 14,5.5" />}
            </svg>
          </div>
          {children && (
            <span className={cn(
              'select-none',
              isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
            )}>
              {children}
            </span>
          )}
        </>
      )}
    </CheckboxBase>
  );
}

export default Checkbox;