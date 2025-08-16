import type React from 'react';
import { Switch as SwitchBase } from 'react-aria-components';

type SwitchProps = Omit<React.ComponentProps<typeof SwitchBase>, 'children'> & {
  children?: React.ReactNode;
};

const Switch = ({
  children,
}: SwitchProps) => {
  return (
    <SwitchBase>
      <div className="w-12 h-7 bg-blue-500 rounded-full px-1 inline-flex items-center justify-start">
        <span className="w-5 h-5 bg-white rounded-full shadow-small"/>
      </div>
      {children}
    </SwitchBase>
  );
};

export default Switch;