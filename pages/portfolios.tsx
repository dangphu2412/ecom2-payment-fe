import type { NextPage } from 'next';
import { Card, CardBody } from '@chakra-ui/react';
import { PortfolioActionBar } from 'src/portfolio/app/internal/containers/PortfolioActionBar/PortfolioActionBar';
import { PortfolioOverviewTable } from 'src/portfolio/app/internal/containers/PortfolioOverviewTable/PortfolioOverviewTable';

const TransactionPage: NextPage = () => {
  return (
    <Card marginTop={'4'}>
      <CardBody>
        <PortfolioActionBar />
        <PortfolioOverviewTable />
      </CardBody>
    </Card>
  );
};

export default TransactionPage;
