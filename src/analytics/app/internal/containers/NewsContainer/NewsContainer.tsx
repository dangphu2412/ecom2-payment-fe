import { ReactElement, useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';
import { SummarizeItem } from '../../../../../system/domain/ui-models/summarize.model';
import { SummarizeModal } from '../../../../../system/app/internal/containers/SummarizeConcept/Modal/SummarizeModal/SummarizeModal';
import { useNewItems } from '../../useNewsItems';
import { SummarizeCard } from '../../../../../system/app/internal/containers/SummarizeConcept/Card/SummarizeCard/SummarizeCard';

export function NewsContainer(): ReactElement {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<SummarizeItem | undefined>();
  const items = useNewItems();

  function openDetail(item: SummarizeItem) {
    setSelectedItem(item);
    onOpen();
  }

  return (
    <div className="cursor-pointer">
      {isOpen && (
        <SummarizeModal
          isOpen={isOpen}
          onClose={onClose}
          {...(selectedItem as SummarizeItem)}
        />
      )}

      <Grid marginTop={'4'} templateColumns={'repeat(4, 1fr)'} gap={4}>
        {items.map(item => {
          return (
            <GridItem key={item.tag}>
              <SummarizeCard {...item} onClick={openDetail} />
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
}
