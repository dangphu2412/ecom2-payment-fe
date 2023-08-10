import { useDisclosure } from '@chakra-ui/react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement } from 'react';
import { useQueryClient } from 'react-query';
import { CellProps } from 'react-table';
import { PortfolioOverviewColumn } from '../../../app-models/portfolio.model';
import { useDeletePortfolioMutation } from '../../../useDeletePortfolioMutation';
import { QUERY_MY_PORTFOLIOS_KEY } from '../../../useQueryMyPortfolios';
import { DeletePortfolioDialog } from '../../PortfolioActionBar/DeletePortfolioDialog/DeletePortfolioDialog';

export function ActionCell({
  value
}: CellProps<PortfolioOverviewColumn, number>): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deletePortfolioById } = useDeletePortfolioMutation();
  const queryClient = useQueryClient();

  function handleConfirm() {
    deletePortfolioById(value, {
      onSuccess: () => queryClient.invalidateQueries(QUERY_MY_PORTFOLIOS_KEY)
    });
    onClose();
  }

  return (
    <div className="space-x-4">
      <FontAwesomeIcon icon={faTrash} cursor="pointer" onClick={onOpen} />

      {isOpen && (
        <DeletePortfolioDialog
          isOpen={isOpen}
          onClose={onClose}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
}
