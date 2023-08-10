import { ReactElement } from 'react';
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList
} from '@chakra-ui/react';
import { HeaderMenu } from './Menu/Menu';
import { useMenu } from '../../../useMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useLogOut } from '../../../useLogOut';
import { useSelector } from 'react-redux';
import { userSessionSelector } from '../../../system.store';
import { useQueryMyPortfolios } from '../../../../../../portfolio/app/internal/useQueryMyPortfolios';
import { PortfolioMenu } from './Menu/PortfolioMenu';

export function Header(): ReactElement {
  const userSession = useSelector(userSessionSelector);

  const { items, activeItem, navigate } = useMenu();
  const { portfolios } = useQueryMyPortfolios();
  const logOut = useLogOut();

  return (
    <Box bgColor="white" paddingY="2">
      <Flex
        maxW={'container.xl'}
        alignItems={'center'}
        justifyContent={'space-between'}
        margin={'auto'}
      >
        <HStack>
          <Avatar src="https://bit.ly/sage-adebayo" />
          <HeaderMenu
            menus={items}
            activeMenu={activeItem}
            onMenuClick={navigate}
          />
        </HStack>

        <HStack>
          <PortfolioMenu items={portfolios} />

          <Menu>
            <MenuButton>
              <FontAwesomeIcon icon={faUser} />
            </MenuButton>

            <MenuList zIndex={99}>
              <MenuItemOption value="short">
                {userSession?.username}
              </MenuItemOption>
              <MenuDivider />
              <MenuItemOption value="sign-out" onClick={logOut}>
                Sign Out
              </MenuItemOption>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
}
