import { faCake, faHome } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { MenuItem, HeaderMenuItem } from '../../../domain/entities/menu.types';

const IconKeyByCode: Record<string, IconDefinition> = {
  USER_MANAGEMENT_ICON: faCake,
  CATEGORY_ICON: faHome
};

export function toSidebarMenu(menuItems: MenuItem[]): HeaderMenuItem[] {
  if (!menuItems) {
    return [];
  }

  return menuItems.map(({ iconCode, subMenus, ...item }: MenuItem) => {
    return {
      ...item,
      icon: iconCode ? IconKeyByCode[iconCode] : undefined,
      subMenus: toSidebarMenu(subMenus ?? [])
    };
  });
}
