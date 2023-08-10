import { ReactElement } from 'react';
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Spacer
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { AddPortfolioModal } from '../AddPortfolioModal/AddPortfolioModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  portfolioActions,
  portfolioSearchSelector
} from '../../portfolio.store';

export function PortfolioActionBar(): ReactElement {
  const dispatch = useDispatch();
  const searchValue = useSelector(portfolioSearchSelector);

  return (
    <Flex>
      <div className="space-x-2">
        <AddPortfolioModal
          triggerButton={props => (
            <Button
              colorScheme="blue"
              variant="outline"
              className="space-x-2"
              {...props}
            >
              <FontAwesomeIcon icon={faPlus} />
              <span>Add portfolio</span>
            </Button>
          )}
        />
      </div>

      <Spacer />

      <Flex className="space-x-2">
        <InputGroup>
          <Input
            placeholder="Search ..."
            value={searchValue}
            onChange={e =>
              dispatch(
                portfolioActions.set({ key: 'search', data: e.target.value })
              )
            }
          />
          <InputRightElement pointerEvents="none">
            <FontAwesomeIcon icon={faSearch} />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Flex>
  );
}
