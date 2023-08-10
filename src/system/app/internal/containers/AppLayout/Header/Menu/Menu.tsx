import { ReactElement } from 'react';
import { MenuButton, Menu, Button } from '@chakra-ui/react';
import { HeaderMenuItem } from '../../../../../../domain/entities/menu.types';

type MenuProps = {
  menus: HeaderMenuItem[];
  activeMenu: HeaderMenuItem;
  onMenuClick?: (menu: HeaderMenuItem) => void;
};

export function HeaderMenu({
  menus,
  activeMenu,
  onMenuClick
}: MenuProps): ReactElement {
  function handleMenuClick(menu: HeaderMenuItem) {
    return () => {
      if (menu.id === activeMenu.id || typeof onMenuClick !== 'function') {
        return;
      }

      onMenuClick(menu);
    };
  }

  return (
    <Menu>
      {menus.map(menu => {
        return (
          <MenuButton
            as={Button}
            colorScheme={activeMenu.id === menu.id ? 'blue' : 'gray'}
            paddingX={'2'}
            paddingY={'1'}
            minW="4rem"
            key={menu.id}
            onClick={handleMenuClick(menu)}
          >
            {menu.name}
          </MenuButton>
        );
      })}
    </Menu>
  );
}
