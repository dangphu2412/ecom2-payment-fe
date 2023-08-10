import { Grid, GridItem } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { OverviewCard } from '../../ui/OverviewCard/OverviewCard';
import { useAnalyticOverviewItems } from '../../useAnalyticOverviewItems';

export function OverviewAnalyticsPanel(): ReactElement {
  const items = useAnalyticOverviewItems();

  return (
    <Grid
      marginTop={'4'}
      templateColumns={`repeat(${items.length}, 1fr)`}
      className="space-x-4"
    >
      {items.map(({ key, ...item }) => {
        return (
          <GridItem key={key}>
            <OverviewCard {...item} />
          </GridItem>
        );
      })}
    </Grid>
  );
}
