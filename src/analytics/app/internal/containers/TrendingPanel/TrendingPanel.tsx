import { useDisclosure } from '@chakra-ui/hooks';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { ReactElement, useState } from 'react';
import { SummarizeModal } from 'src/system/app/internal/containers/SummarizeConcept/Modal/SummarizeModal/SummarizeModal';
import { SummarizeCard } from '../../../../../system/app/internal/containers/SummarizeConcept/Card/SummarizeCard/SummarizeCard';
import { SummarizeItem } from '../../../../../system/domain/ui-models/summarize.model';
import { useTrendingItems } from '../../useTrendingItems';

export function TrendingPanel(): ReactElement {
  const { tag, crypto } = useTrendingItems();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<SummarizeItem | undefined>();

  function openDetail(item: SummarizeItem) {
    setSelectedItem(item);
    onOpen();
  }

  return (
    <>
      <div className="cursor-pointer">
        {isOpen && (
          <SummarizeModal
            isOpen={isOpen}
            onClose={onClose}
            {...(selectedItem as SummarizeItem)}
          />
        )}

        <Text fontSize="2xl" fontWeight="bold">
          Trending crypto
        </Text>

        <Grid
          marginTop={'4'}
          templateColumns={`repeat(${crypto.length}, 1fr)`}
          className="space-x-4"
        >
          {crypto.map(item => {
            return (
              <GridItem key={item.tag}>
                <SummarizeCard {...item} onClick={openDetail} />
              </GridItem>
            );
          })}
        </Grid>
      </div>

      <div className="cursor-pointer">
        <Text fontSize="2xl" fontWeight="bold">
          Trending topics
        </Text>

        <Grid
          marginTop={'4'}
          templateColumns={`repeat(${tag.length}, 1fr)`}
          className="space-x-4"
        >
          {tag.map(item => {
            return (
              <GridItem key={item.tag}>
                <SummarizeCard {...item} onClick={openDetail} />
              </GridItem>
            );
          })}
        </Grid>
      </div>
    </>
  );
}
