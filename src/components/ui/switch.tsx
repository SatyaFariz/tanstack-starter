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
      <div className="indicator" />
      {children}
    </SwitchBase>
  );
};

export default Switch;