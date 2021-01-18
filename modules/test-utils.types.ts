// eslint-disable-next-line import/no-extraneous-dependencies
import { RenderOptions } from '@testing-library/react';

export interface CustomRenderOptions extends Omit<RenderOptions, 'queries'> {
  initialState?: Record<string, unknown>;
  newTheme?: boolean;
}
