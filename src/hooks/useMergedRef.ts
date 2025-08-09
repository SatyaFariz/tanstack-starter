import { useCallback } from 'react';

/**
 * A hook that merges multiple refs into a single ref callback.
 *
 * @param refs - An array of refs to merge (can be ref objects, ref callbacks, or undefined)
 * @returns A ref callback that will update all provided refs
 *
 * @example
 * ```tsx
 * const Component = forwardRef<HTMLInputElement, Props>((props, forwardedRef) => {
 *   const internalRef = useRef<HTMLInputElement>(null);
 *   const anotherRef = useRef<HTMLInputElement>(null);
 *   const mergedRef = useMergedRef(internalRef, forwardedRef, anotherRef);
 *
 *   return <input ref={mergedRef} {...props} />;
 * });
 * ```
 */
function useMergedRef<T>(...refs: Array<React.Ref<T> | undefined>): React.RefCallback<T> {
  return useCallback((node: T | null) => {
    refs.forEach((ref) => {
      if(ref == null) {
        return;
      }

      if(typeof ref === 'function') {
        ref(node);
      } else if(typeof ref === 'object' && 'current' in ref) {
        ref.current = node;
      }
    });
  }, refs);
}

export default useMergedRef;