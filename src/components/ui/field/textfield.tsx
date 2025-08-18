'use client';

import React, { useLayoutEffect } from 'react';
import { useRef } from 'react';
import cn from '@/utils/cn';
import type { TextFieldProps as TextFieldPropsBase } from 'react-aria-components';
import { TextField as TextFieldBase, Label, Input, FieldError } from 'react-aria-components';
import useMergedRef from '@/hooks/useMergedRef';
import type { FieldIndicator } from '@/types/component';
import FieldDescription from './field-description';
import FieldAdornment from './field-adornment';

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
  indicator?: FieldIndicator;
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
  type,
  ref,
  ...props
}: TextFieldProps) {
  const internalRef = useRef<HTMLInputElement>(null);

  // Combine internal ref with forwarded ref
  const inputRef = useMergedRef(ref, internalRef);

  // 1) Where we remember the caret *before* the toggle
  const caretRef = useRef<{ start: number | null; end: number | null }>({
    start: null,
    end: null,
  });

  // 2) Track previous `type` so we know a type flip just happened
  const prevTypeRef = useRef<string | undefined>(type);

  // 3) After render, if the `type` changed (password <-> text), restore caret
  useLayoutEffect(() => {
    const prevType = prevTypeRef.current;
    const nextType = type; // comes from ...props you pass to <Input />
    prevTypeRef.current = nextType;

    const changed = nextType !== prevType;

    if(!changed) return;

    const el = internalRef.current;
    const { start, end } = caretRef.current;

    // If we have a saved caret, restore it; otherwise put caret at end
    if(el) {
      const s = start ?? el.value.length;
      const e = end ?? s;
      // RAF helps in some browsers that apply type change slightly later
      requestAnimationFrame(() => {
        try { el.setSelectionRange(s, e); } catch {}
      });
    }

    // clear saved caret
    caretRef.current.start = caretRef.current.end = null;
  }, [type]);

  return (
    <TextFieldBase
      key="test"
      className={cn(
        'w-full flex flex-col gap-1',
        !fullWidth && 'w-auto',
      )}
      isRequired={isRequired || indicator === '*'}
      isInvalid={isInvalid}
      validationBehavior="aria"
      type={type}
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
            : 'border-gray-300 focus-within:ring-1 focus-within:ring-gray-300 focus-within:border-gray-300',
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
    </TextFieldBase>
  );
}

export default TextField;
