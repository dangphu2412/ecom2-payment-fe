import { ReactElement } from 'react';
import { ArcElement, Chart as ChartJS, Tooltip } from 'chart.js';
import {
  Card,
  CardBody,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@chakra-ui/react';
import { AssetChart } from './AssetChart/AssetChart';

ChartJS.register(ArcElement, Tooltip);

export function AnalyticChart(): ReactElement {
  return (
    <>
      <Tabs variant="soft-rounded" className="space-y-4">
        <TabList>
          <Tab>Assets</Tab>
        </TabList>

        <TabPanels>
          <TabPanel p={0}>
            <Card>
              <CardBody className="space-y-8 m-6">
                <AssetChart />
              </CardBody>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
