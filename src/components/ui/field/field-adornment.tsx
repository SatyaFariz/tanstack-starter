import React from 'react';
import IconButton from '../icon-button';
import cn from '@/utils/cn';

type FieldAdornmentProps = React.PropsWithChildren & {
  className?: string;
  textInputRef: React.RefObject<HTMLInputElement | null>;
  caretRef: React.RefObject<{
    start: number | null;
    end: number | null;
  }>;
};

function isIconButton(element: React.ReactNode) {
  if(!element || typeof element === 'string' || (React.isValidElement(element) && element.type !== IconButton)) return false;

  return true;
}

function cloneIconButton(element: React.ReactNode, inputRef: React.RefObject<HTMLInputElement | null>, caretRef: React.RefObject<{
    start: number | null;
    end: number | null;
}>) {
  const original = element as React.ReactElement<React.ComponentProps<typeof IconButton>>;
  return React.cloneElement(original, {
    ...original.props,
    size: 'sm',
    inline: true,
    onMouseDown: (e) => {
      e.preventDefault();
      const inputElement = inputRef.current;
      caretRef.current.start = inputElement?.selectionStart ?? null;
      caretRef.current.end = inputElement?.selectionEnd ?? null;
    },
  });
}

const FieldAdornment = ({
  className,
  children,
  caretRef,
  textInputRef,
}: FieldAdornmentProps) => {
  return (
    <div className={cn('flex items-center text-gray-400 text-base', className)}>
      {isIconButton(children) ? cloneIconButton(children, textInputRef, caretRef) : children}
    </div>
  );
};

export default FieldAdornment;