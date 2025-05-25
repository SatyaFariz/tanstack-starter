'use client';

import type React from 'react';
import cn from '@/utils/cn';
import { TextField, Label, Input, FieldError, Text } from 'react-aria-components';

type ValidationState = 'default' | 'valid' | 'invalid';
type RequirementIndicator = 'required' | 'optional' | 'none';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  defaultValue?: string;
  validationState?: ValidationState;
  errorMessage?: string;
  description?: string;
  fullWidth?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  requirementIndicator?: RequirementIndicator;
}

export default function TextInput({
  label,
  type = 'text',
  className,
  validationState = 'default',
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
  ...props
}: TextInputProps) {
  return (
    <TextField
      className={cn('w-full', !fullWidth && 'w-auto')}
      isRequired={required || requirementIndicator === 'required'}
      isDisabled={disabled}
      isInvalid={validationState === 'invalid'}
      value={value}
      defaultValue={defaultValue}
      name={name}
    >
      {label && (
        <Label className={cn(
          'block font-medium mb-2',
          validationState === 'invalid' ? 'text-red-600' : 'text-primary',
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

      <div className="relative">
        {startAdornment && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 z-10">
            {startAdornment}
          </div>
        )}

        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          className={cn(
            'w-full py-2.5 border rounded-md focus:outline-none bg-white',
            startAdornment ? 'pl-10' : 'pl-3',
            (endAdornment || validationState === 'valid') ? 'pr-10' : 'pr-3',
            validationState === 'invalid'
              ? 'border-red-500 text-red-600 focus:ring-1 focus:ring-red-500 focus:border-red-500'
              : validationState === 'valid'
              ? 'border-success text-primary focus:ring-1 focus:ring-success focus:border-success'
              : 'border-divider text-primary focus:ring-1 focus:ring-primary/30 focus:border-primary/30',
            'disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed',
            className,
          )}
          onChange={onChange}
          {...props}
        />

        <div className="absolute inset-y-0 right-0 flex items-center gap-1">
          {endAdornment && (
            <div className="flex items-center pr-3 text-gray-400">
              {endAdornment}
            </div>
          )}
        </div>
      </div>

      {description && (
        <Text slot="description" className="mt-1.5 text-sm text-gray-400">
          {description}
        </Text>
      )}

      {validationState === 'invalid' && errorMessage && (
        <FieldError className="mt-1.5 text-sm text-red-600">
          {errorMessage}
        </FieldError>
      )}
    </TextField>
  );
}