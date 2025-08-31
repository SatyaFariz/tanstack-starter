'use client';

import React from 'react';
import { useRef } from 'react';
import cn from '@/utils/cn';
import type { NumberFieldProps as NumberFieldPropsBase } from 'react-aria-components';
import { NumberField as NumberFieldBase, Label, Input, FieldError } from 'react-aria-components';
import useMergedRef from '@/hooks/useMergedRef';
import type { FieldIndicator } from '@/types/component';
import FieldDescription from './field-description';
import FieldAdornment from './field-adornment';
import { Button } from 'react-aria-components';
import { Plus, Minus } from 'lucide-react';

interface NumberFieldProps extends Omit<
  NumberFieldPropsBase,
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
  indicator?: FieldIndicator;
}

function NumberField({
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
}: NumberFieldProps) {
  const internalRef = useRef<HTMLInputElement>(null);

  // Combine internal ref with forwarded ref
  const inputRef = useMergedRef(ref, internalRef);

  // 1) Where we remember the caret *before* the toggle
  const caretRef = useRef<{ start: number | null; end: number | null }>({
    start: null,
    end: null,
  });

  return (
    <NumberFieldBase
      key="test"
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

      <div className="flex w-full">
        <div
          className={cn(
            'flex flex-1 items-center border rounded-md bg-white overflow-clip cursor-text h-10',
            'border-r-0 rounded-r-none',
            isInvalid
              ? 'border-red-500 [&:focus-within:not(:has(button:focus))]:ring-1 [&:focus-within:not(:has(button:focus))]:ring-red-500 [&:focus-within:not(:has(button:focus))]:border-red-500'
              : 'border-gray-300 [&:focus-within:not(:has(button:focus))]:ring-1 [&:focus-within:not(:has(button:focus))]:ring-gray-300 [&:focus-within:not(:has(button:focus))]:border-gray-300',
            'disabled:bg-gray-100',
          )}
        >
          {startAdornment && (
            <FieldAdornment
              textInputRef={internalRef}
              caretRef={caretRef}
              className="pl-3"
            >
              {startAdornment}
            </FieldAdornment>
          )}

          <Input
            ref={inputRef}
            className={cn(
              'flex-1 text-base placeholder:text-base h-full bg-transparent border-0 focus:outline-none focus:ring-0',
              startAdornment ? 'pl-2' : 'pl-3',
              endAdornment ? 'pr-2' : 'pr-3',
              'disabled:text-gray-400 disabled:cursor-not-allowed',
              'placeholder:text-gray-400',
              className,
            )}
          />

          {endAdornment && (
            <FieldAdornment
              textInputRef={internalRef}
              caretRef={caretRef}
              className="pr-3"
            >
              {endAdornment}
            </FieldAdornment>
          )}
        </div>

        <Button
          slot="decrement"
          className={cn(
            'h-10 aspect-square bg-slate-200 flex items-center cursor-pointer justify-center',
          )}
        >
          <Minus size={18}/>
        </Button>

        <Button
          slot="increment"
          className={cn(
            'h-10 aspect-square bg-slate-200 flex items-center cursor-pointer justify-center rounded-r-md',
          )}
        >
          <Plus size={18}/>
        </Button>
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
        <FieldError className={cn('text-xs text-red-600', description && 'mt-1')}>
          {errorMessage}
        </FieldError>
      )}
    </NumberFieldBase>
  );
}

export default NumberField;
