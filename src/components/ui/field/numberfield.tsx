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
import { Plus, Minus } from 'lucide-react';
import IconButton from '../icon-button';

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

      <div
        className={cn(
          'flex items-center border rounded-md bg-white overflow-clip cursor-text h-10',
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
            'pr-2',
            'disabled:text-gray-400 disabled:cursor-not-allowed',
            'placeholder:text-gray-400',
            className,
          )}
        />

        {endAdornment && (
          <>
            <FieldAdornment
              textInputRef={internalRef}
              caretRef={caretRef}
              className="pr-3"
            >
              {endAdornment}
            </FieldAdornment>
            <div className="h-5 w-[1px] bg-gray-200"/>
          </>
        )}

        <FieldAdornment
          textInputRef={internalRef}
          caretRef={caretRef}
          className={cn(
            'pr-3',
            endAdornment && 'pl-3',
          )}
        >
          <IconButton slot="decrement">
            <Minus size={16}/>
          </IconButton>
        </FieldAdornment>

        <div className="h-5 w-[1px] bg-gray-200"/>

        <FieldAdornment
          textInputRef={internalRef}
          caretRef={caretRef}
          className="pr-3 pl-3"
        >
          <IconButton slot="increment">
            <Plus size={16}/>
          </IconButton>
        </FieldAdornment>
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
