import { PropsWithChildren, ReactNode } from 'react';

export type OverviewCardProps = PropsWithChildren<{
  title: ReactNode;
  mainContent: ReactNode;
  description: ReactNode;
}>;
