import type { LooseEnum } from './generics';

export type ComponentWithName = {
  name: string;
};

export type FieldIndicator = LooseEnum<'*' | '(optional)'>;