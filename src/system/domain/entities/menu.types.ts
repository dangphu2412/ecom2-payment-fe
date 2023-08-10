import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type MenuItem = {
  id: string;
  name: string;
  accessLink?: string;
  iconCode?: string;
  subMenus?: MenuItem[];
};

export type HeaderMenuItem = {
  id: string;
  name: string;
  accessLink?: string;
  icon: IconDefinition | undefined;
  subMenus: HeaderMenuItem[];
};
