import cn from '@/utils/cn';
import { createLink } from '@tanstack/react-router';
import { Link as ReactAriaLink } from 'react-aria-components';

const LinkBase = createLink(ReactAriaLink);

const Link = ({ className, ...props }: React.ComponentProps<typeof LinkBase>) => {
  return (
    <LinkBase
      className={cn(
        'text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded',
        className,
      )}
      {...props}
    />
  );
};

export default Link;