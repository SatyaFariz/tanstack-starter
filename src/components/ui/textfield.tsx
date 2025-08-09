'use client';

import type React from 'react';
import { useRef, type PropsWithChildren } from 'react';
import cn from '@/utils/cn';
import type { TextFieldProps as TextFieldPropsBase } from 'react-aria-components';
import { TextField as TextFieldBase, Label, Input, FieldError, Text } from 'react-aria-components';
import type { LooseEnum } from '@/types/generics';
import useMergedRef from '@/hooks/useMergedRef';

interface TextFieldProps extends Omit<
  TextFieldPropsBase,
  'children' |
  'validate' |
  'validationBehavior' |
  'pattern'
>,
React.RefAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  errorMessage?: string | null;
  description?: string | React.ReactElement<typeof FieldDescription> | null;
  fullWidth?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  indicator?: LooseEnum<'*' | '(optional)'>;
}

function TextField({
  label,
  className,
  isInvalid = false,
  errorMessage,
  description,
  fullWidth = true,
  startAdornment,
  endAdornment,
  indicator,
  isRequired,
  ref,
  ...props
}: TextFieldProps) {
  const internalRef = useRef<HTMLInputElement>(null);

  // Combine internal ref with forwarded ref
  const inputRef = useMergedRef(ref, internalRef);

  const handleAdornmentMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    internalRef.current?.focus();
  };

  return (
    <TextFieldBase
      className={cn(
        'w-full flex flex-col gap-1',
        !fullWidth && 'w-auto',
      )}
      isRequired={isRequired || indicator === '*'}
      isInvalid={isInvalid}
      validationBehavior="aria"
      {...props}
    >
      {label && (
        <Label className={cn(
          'block font-medium text-sm',
          isInvalid &&'text-red-600',
        )}>
          {label}
          {indicator === '*' && (
            <span className="text-red-500 ml-1">*</span>
          )}
          {indicator && indicator !== '*' && (
            <span className="text-gray-400 ml-1">{indicator}</span>
          )}
        </Label>
      )}

      <div
        className={cn(
          'flex items-center border rounded-md bg-white overflow-clip cursor-text h-10',
          isInvalid
            ? 'border-red-500 focus-within:ring-1 focus-within:ring-red-500 focus-within:border-red-500'
            : 'border-gray-300 focus-within:ring-1 focus-within:ring-primary/30 focus-within:border-primary/30',
          'disabled:bg-gray-100',
          startAdornment && 'pl-3',
          endAdornment && 'pr-3',
        )}
        onMouseDown={handleAdornmentMouseDown}
      >
        {startAdornment && (
          <div
            className="flex items-center text-gray-400 text-base"
            aria-hidden="true"
          >
            {startAdornment}
          </div>
        )}

        <Input
          ref={inputRef}
          className={cn(
            'flex-1 text-base placeholder:text-base h-full bg-transparent border-0 focus:outline-none focus:ring-0',
            startAdornment ? 'pl-2' : 'pl-3',
            endAdornment ? 'pr-2' : 'pr-3',
            isInvalid ? 'text-red-600' : 'text-primary',
            'disabled:text-gray-400 disabled:cursor-not-allowed',
            'placeholder:text-gray-400',
            className,
          )}
        />

        {endAdornment && (
          <div
            className="flex items-center text-gray-400 text-base"
            aria-hidden="true"
          >
            {endAdornment}
          </div>
        )}
      </div>

      {description && (
        <>
          {typeof description === 'string' ? (
            <FieldDescription>
              {description}
            </FieldDescription>
          ) : (
            description
          )}
        </>
      )}

      {isInvalid && errorMessage && (
        <FieldError className="text-sm text-red-600">
          {errorMessage}
        </FieldError>
      )}
    </TextFieldBase>
  );
}

export const FieldDescription = ({ children }: PropsWithChildren) => {
  return (
    <Text slot="description" className="text-sm text-gray-400">
      {children}
    </Text>
  );
};

export default TextField;