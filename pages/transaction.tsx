import * as React from 'react';
import type { NextPage } from 'next';
import { Card, CardBody } from '@chakra-ui/react';
import { TransactionActionBar } from '../src/transaction/app/internal/containers/TransactionActionBar/TransactionActionBar';
import { TransactionOverviewTable } from '../src/transaction/app/internal/containers/TransactionOverviewTable/TransactionOverviewTable';

const TransactionPage: NextPage = () => {
  return (
    <Card marginTop={'4'}>
      <CardBody>
        <TransactionActionBar />
        <TransactionOverviewTable />
      </CardBody>
    </Card>
  );
};

export default TransactionPage;
