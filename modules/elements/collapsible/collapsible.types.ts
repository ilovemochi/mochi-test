import { FC, ReactNode } from 'react';

export interface CollapsibleProps {
  opened?: boolean;
  content: ReactNode;
  Icon?: FC;
  inline?: boolean;
  title: string;
}

export interface RenderCollapsiblesProps {
  data: ReadonlyArray<CollapsibleProps>;
}
