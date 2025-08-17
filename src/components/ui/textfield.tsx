'use client';

import React, { useLayoutEffect, useMemo } from 'react';
import { useRef, type PropsWithChildren } from 'react';
import cn from '@/utils/cn';
import type { TextFieldProps as TextFieldPropsBase } from 'react-aria-components';
import { TextField as TextFieldBase, Label, Input, FieldError, Text } from 'react-aria-components';
import useMergedRef from '@/hooks/useMergedRef';
import IconButton from './icon-button';
import type { FieldIndicator } from '@/types/component';

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
    onMouseDown: (e) => {
      e.preventDefault();
      const inputElement = inputRef.current;
      caretRef.current.start = inputElement?.selectionStart ?? null;
      caretRef.current.end = inputElement?.selectionEnd ?? null;
    },
  });
}

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

  const handleFieldMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(e.target === internalRef.current) return;
    e.preventDefault();
    internalRef.current?.focus();
  };

  const endIconButton = useMemo(() => {
    if(!isIconButton(endAdornment)) return null;

    return cloneIconButton(endAdornment, internalRef, caretRef);
  }, [endAdornment]);

  const startIconButton = useMemo(() => {
    if(!isIconButton(startAdornment)) return null;

    return cloneIconButton(startAdornment, internalRef, caretRef);
  }, [startAdornment]);

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
          startAdornment && 'pl-3',
          endAdornment && 'pr-3',
          startIconButton && 'pl-1',
          endIconButton && 'pr-1',
        )}
        onMouseDown={handleFieldMouseDown}
      >
        {startAdornment && (
          <div
            className="flex items-center text-gray-400 text-base"
            aria-hidden="true"
          >
            {startIconButton || startAdornment}
          </div>
        )}

        <Input
          ref={inputRef}
          className={cn(
            'flex-1 text-base placeholder:text-base h-full bg-transparent border-0 focus:outline-none focus:ring-0',
            startAdornment ? 'pl-2' : 'pl-3',
            endAdornment ? 'pr-2' : 'pr-3',
            startIconButton ? 'pl-1' : 'pl-3',
            endIconButton ? 'pr-1' : 'pr-3',
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
            {endIconButton || endAdornment}
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
        <FieldError className={cn('text-xs text-red-600', description && 'mt-1')}>
          {errorMessage}
        </FieldError>
      )}
    </TextFieldBase>
  );
}

export const FieldDescription = ({ children }: PropsWithChildren) => {
  return (
    <Text slot="description" className="text-xs text-gray-400">
      {children}
    </Text>
  );
};

export default TextField;
