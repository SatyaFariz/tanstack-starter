import cn from '@/utils/cn';
import type React from 'react';
import { Switch as SwitchBase } from 'react-aria-components';

type SwitchProps = Omit<React.ComponentProps<typeof SwitchBase>, 'children'> & {
  children?: React.ReactNode;
};

const Switch = ({
  className,
  children,
  ...props
}: SwitchProps) => {
  return (
    <SwitchBase
      className={cn(
        className,
        'flex items-center gap-3 text-sm font-medium text-gray-900 cursor-pointer',
        'disabled:text-gray-400 disabled:cursor-not-allowed',
      )}
      {...props}
    >
      {({ isSelected }) => (
        <>
          <div
            className={`w-10 h-6 rounded-full px-1 inline-flex items-center transition-colors duration-200 ${
              isSelected
                ? 'bg-blue-500'
                : 'bg-gray-300'
            }`}
          >
            <span
              className={`w-4 h-4 bg-white rounded-full shadow-small transition-transform duration-200 ${
                isSelected ? 'translate-x-4' : 'translate-x-0'
              }`}
            />
          </div>
          {children}
        </>
      )}
    </SwitchBase>
  );
};

export default Switch;