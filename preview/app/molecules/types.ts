import type { ReactNode } from "react";

export type SectionNavigation = {
  id: string;
  title: string;
};

export type SectionProps = {
  className?: string;
  children: ReactNode;
  nav: SectionNavigation;
};

export type SlotProps = {
  className?: string;
  children: ReactNode;
};
