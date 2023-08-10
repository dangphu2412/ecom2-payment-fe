import { ReactElement } from 'react';
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Spacer
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AddTransactionModal } from './AddTransactionModal/AddTransactionModal';

export function TransactionActionBar(): ReactElement {
  return (
    <Flex>
      <div className="space-x-2">
        <AddTransactionModal />
      </div>

      <Spacer />

      <Flex className="space-x-2">
        <InputGroup>
          <Input placeholder="Search ..." />
          <InputRightElement pointerEvents="none">
            <FontAwesomeIcon icon={faSearch} />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Flex>
  );
}
