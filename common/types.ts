export enum ElementRenderTypes {
  DIVIDER = 'DIVIDER',
  NUMBER = 'NUMBER',
  INPUT = 'INPUT',
  CHECKBOX = 'CHECKBOX'
}
  
export type Element = {
  _id: Number;
  type: ElementRenderTypes;
  id: String;
  itemName: String;
  default: String;
  isRequired: Boolean;
}