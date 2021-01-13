import { ImageProps } from 'next/image';
import { HTMLAttributes } from 'react';
import { BorderProps, ColorProps, LayoutProps, ShadowProps, SpaceProps } from 'styled-system';

interface CustomProps {
  alt: string;
  width: string;
  height: string;
}

export type MochiImageProps = CustomProps & {
  imageProps: Omit<Omit<ImageProps, 'width'>, 'height'>;
} & BorderProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  ShadowProps &
  HTMLAttributes<HTMLDivElement>;
