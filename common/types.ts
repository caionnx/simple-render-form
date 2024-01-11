export const enum ElementRenderTypes {
  DIVIDER = 'DIVIDER',
  NUMBER = 'NUMBER',
  INPUT = 'INPUT',
  CHECKBOX = 'CHECKBOX'
}
  
export type Element = {
  _id: string;
  type: ElementRenderTypes;
  content: ElementContent;
}

export type ElementContent = {
  id: string;
  itemName: string;
  default: string;
  isRequired: Boolean;
  elementType?: string;
}