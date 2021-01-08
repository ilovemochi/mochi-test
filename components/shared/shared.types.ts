import { TRoute } from '@constants/routes';
import { SocialMediaLinks } from '@ilovemochi/types';
import { LinkProps } from 'next/link';
import { ReactNode } from 'react';

export interface IRenderMenuOptionsFn {
  name: string;
  route: TRoute | SocialMediaLinks | string;
  id: string;
  located?: boolean;
}

export interface IMenuOption extends IRenderMenuOptionsFn {}

export interface ILink extends LinkProps {
  children: ReactNode;
}
