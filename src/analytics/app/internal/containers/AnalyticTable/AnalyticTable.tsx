import { ReactElement } from 'react';
import { useAnalyticColumns } from '../../useAnalyticColumns';
import { Table } from '../../../../../system/app/internal/ui/Table';
import { Card, CardBody } from '@chakra-ui/react';
import { useAssetOverviewItems } from '../../useAssetOverviewItems';
import { useIsFetching } from 'react-query';
import { QUERY_PORTFOLIO_DETAIL_KEY } from '../../../../../portfolio/app/internal/useQueryPortfolioDetail';

export function AnalyticTable(): ReactElement {
  const columns = useAnalyticColumns();
  const items = useAssetOverviewItems();
  const isLoading = useIsFetching(QUERY_PORTFOLIO_DETAIL_KEY);

  return (
    <Card>
      <CardBody>
        <Table columns={columns} items={items} isLoading={isLoading > 0} />
      </CardBody>
    </Card>
  );
}
