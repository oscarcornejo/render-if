import { ReactElement } from 'react';

interface RenderIfProps {
  children: ReactElement | null;
  isTrue: boolean;
}

export const RenderIf = ({ children, isTrue }: RenderIfProps) =>
  isTrue ? children : null;
