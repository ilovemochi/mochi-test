type TFlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';

type TFlexJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial'
  | 'inherit';

type TFlexAlignItems =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit';

type TFlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse' | 'inherit' | 'initial' | 'unset';

export interface IFlexTypes {
  direction: TFlexDirection;
  justifyContent: TFlexJustifyContent;
  alignItems: TFlexAlignItems;
  flexWrap: TFlexWrap;
}

export type TFlexStyles = (flexProps: {
  direction?: TFlexDirection;
  justifyContent?: TFlexJustifyContent;
  alignItems?: TFlexAlignItems;
  flex?: number | string;
  flexWrap?: TFlexWrap;
}) => Array<string>;
