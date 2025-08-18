import type { PropsWithChildren } from 'react';
import { Text } from 'react-aria-components';

const FieldDescription = ({ children }: PropsWithChildren) => {
  return (
    <Text slot="description" className="text-xs text-gray-400">
      {children}
    </Text>
  );
};

export default FieldDescription;