'use client';

import type React from 'react';
import { useRef } from 'react';
import cn from '@/utils/cn';
import { TextField, Label, Input, FieldError, Text } from 'react-aria-components';

type RequirementIndicator = 'required' | 'optional' | 'none';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement>,
                                 React.RefAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  defaultValue?: string;
  isInvalid?: boolean;
  errorMessage?: string;
  description?: string;
  fullWidth?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  requirementIndicator?: RequirementIndicator;
}

function TextInput({
  label,
  type = 'text',
  className,
  isInvalid = false,
  errorMessage,
  description,
  fullWidth = true,
  startAdornment,
  endAdornment,
  requirementIndicator = 'none',
  required,
  disabled,
  value,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  name,
  id,
  ref,
  ...props
}: TextInputProps) {
  const internalRef = useRef<HTMLInputElement>(null);

  // Combine internal ref with forwarded ref
  const inputRef = (node: HTMLInputElement | null) => {
    if (internalRef.current !== node) {
      internalRef.current = node;
    }
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  return (
    <TextField
      className={cn('w-full', !fullWidth && 'w-auto')}
      isRequired={required || requirementIndicator === 'required'}
      isDisabled={disabled}
      isInvalid={isInvalid}
      value={value}
      defaultValue={defaultValue}
      name={name}
    >
      {label && (
        <Label className={cn(
          'block font-medium mb-2',
          isInvalid ? 'text-red-600' : 'text-primary',
        )}>
          {label}
          {requirementIndicator === 'required' && (
            <span className="text-red-500 ml-1">*</span>
          )}
          {requirementIndicator === 'optional' && (
            <span className="text-gray-400 ml-1">(optional)</span>
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
          id={id}
          type={type}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          className={cn(
            'flex-1 py-2.5 bg-transparent border-0 focus:outline-none focus:ring-0',
            startAdornment ? 'pl-2' : 'pl-3',
            endAdornment ? 'pr-2' : 'pr-3',
            isInvalid ? 'text-red-600' : 'text-primary',
            'disabled:text-gray-400 disabled:cursor-not-allowed',
            'placeholder:text-gray-400',
            className,
          )}
          onChange={onChange}
          {...props}
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
    </TextField>
  );
}

export default TextInput;