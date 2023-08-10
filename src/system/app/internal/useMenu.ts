import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { HeaderMenuItem } from '../../domain/entities/menu.types';
import { useQueryMenu } from './useQueryMenu';
import { toSidebarMenu } from './mappers/menu.mapper';

export function useMenu() {
  const { push, pathname } = useRouter();
  const { menus } = useQueryMenu();

  const items = useMemo(() => toSidebarMenu(menus ?? []), [menus]);
  const activeItem = useMemo(
    () =>
      items.find(item => item.accessLink === pathname) ??
      ({} as HeaderMenuItem),
    [items, pathname]
  );

  const navigate = useCallback(
    (item: HeaderMenuItem) => {
      if (!item.accessLink) return;

      push(item.accessLink);
    },
    [push]
  );

  return {
    items,
    activeItem,
    navigate
  };
}
