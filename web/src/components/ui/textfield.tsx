'use client';

import type React from 'react';
import { useRef } from 'react';
import cn from '@/utils/cn';
import type { TextFieldProps as TextFieldPropsBase } from 'react-aria-components';
import { TextField as TextFieldBase, Label, Input, FieldError, Text } from 'react-aria-components';
import type { LooseEnum } from '@/types/generics';

type RequirementIndicator = LooseEnum<'*' | '(optional)'>;

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
  errorMessage?: string;
  description?: string;
  fullWidth?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  requirementIndicator?: RequirementIndicator;
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
  requirementIndicator,
  isRequired,
  ref,
  ...props
}: TextFieldProps) {
  const internalRef = useRef<HTMLInputElement>(null);

  // Combine internal ref with forwarded ref
  const inputRef = (node: HTMLInputElement | null) => {
    if(internalRef.current !== node) {
      internalRef.current = node;
    }
    if(typeof ref === 'function') {
      ref(node);
    } else if(ref) {
      ref.current = node;
    }
  };

  return (
    <TextFieldBase
      className={cn('w-full', !fullWidth && 'w-auto')}
      isRequired={isRequired || requirementIndicator === '*'}
      isInvalid={isInvalid}
      validationBehavior="aria"
      {...props}
    >
      {label && (
        <Label className={cn(
          'block font-medium mb-2',
          isInvalid ? 'text-red-600' : 'text-primary',
        )}>
          {label}
          {requirementIndicator === '*' && (
            <span className="text-red-500 ml-1">*</span>
          )}
          {requirementIndicator && requirementIndicator !== '*' && (
            <span className="text-gray-400 ml-1">{requirementIndicator}</span>
          )}
        </Label>
      )}

      <div className={cn(
        'flex items-center border rounded-md bg-white',
        isInvalid
          ? 'border-red-500 focus-within:ring-1 focus-within:ring-red-500 focus-within:border-red-500'
          : 'border-divider focus-within:ring-1 focus-within:ring-primary/30 focus-within:border-primary/30',
        'disabled:bg-gray-100',
      )}>
        {startAdornment && (
          <div
            className="flex items-center pl-3 text-gray-400 cursor-text"
            onClick={() => internalRef.current?.focus()}
            aria-hidden="true"
          >
            {startAdornment}
          </div>
        )}

        <Input
          ref={inputRef}
          className={cn(
            'flex-1 py-2.5 bg-transparent border-0 focus:outline-none focus:ring-0',
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
            className="flex items-center pr-3 text-gray-400 cursor-text"
            onClick={() => internalRef.current?.focus()}
            aria-hidden="true"
          >
            {endAdornment}
          </div>
        )}
      </div>

      {description && (
        <Text slot="description" className="mt-1.5 text-sm text-gray-400">
          {description}
        </Text>
      )}

      {isInvalid && errorMessage && (
        <FieldError className="mt-1.5 text-sm text-red-600">
          {errorMessage}
        </FieldError>
      )}
    </TextFieldBase>
  );
}

export default TextField;