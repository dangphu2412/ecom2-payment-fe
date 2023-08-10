import { Grid, GridItem, Heading } from '@chakra-ui/react';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement, useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useAnalyticChart } from '../../../useAnalyticChart';
import { computeChartDescriptors } from '../../../services/chart-computer';

export function AssetChart(): ReactElement {
  const data = useAnalyticChart();
  const descriptors = useMemo(() => computeChartDescriptors(data), [data]);

  return (
    <>
      <Heading fontSize="xl">{'All holdings'}</Heading>

      <Grid templateColumns="repeat(2, 1fr)" alignItems="center">
        <GridItem height={350} width="auto">
          <Doughnut data={data} />
        </GridItem>

        <GridItem>
          {descriptors.map(({ label, percentage, color }) => {
            return (
              <Grid
                key={label}
                templateColumns="repeat(2, 1fr)"
                alignItems={'center'}
              >
                <GridItem>
                  <FontAwesomeIcon
                    width={12}
                    height={12}
                    icon={faCircle}
                    color={color}
                  />
                  <span className="ml-2">{label}</span>
                </GridItem>

                <GridItem>
                  <Grid key={label} templateColumns="repeat(4, 1fr)">
                    <GridItem colSpan={1}>
                      <div>{percentage} %</div>
                    </GridItem>
                  </Grid>
                </GridItem>
              </Grid>
            );
          })}
        </GridItem>
      </Grid>
    </>
  );
}
