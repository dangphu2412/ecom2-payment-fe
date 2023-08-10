import type { NextPage } from 'next';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { MetricCard } from '../src/analytics/app/internal/containers/MetricCard/MetricCard';
import { useCurrentPortfolioDetail } from '../src/portfolio/app/internal/useCurrentPortfolioDetail';
import { Insight } from '../src/portfolio/domain/portfolio.usecase';

const MetricsPage: NextPage = () => {
  const { portfolio } = useCurrentPortfolioDetail();
  const {
    sharpe_ratio,
    ulcer_index,
    beta_alpha,
    annualized_return,
    annualized_volatility,
    longest_drawdown,
    max_drawdown,
    winning_days,
    annual_turnover
  } = (portfolio?.insights ?? {}) as Insight;

  return (
    <div className="space-y-4">
      <Text fontSize="xl" fontWeight="semibold" marginTop={4}>
        Metrics
      </Text>

      <Grid templateColumns="repeat(2, 5fr)" alignItems="center" gap={4}>
        <GridItem>
          <MetricCard
            title={'Sharp ratio'}
            description={
              'Shows how well an investment has performed, considering both its returns and the level of risk it carries. A higher Sharpe Ratio indicates better risk-adjusted performance.'
            }
            value={sharpe_ratio}
          />
        </GridItem>

        <GridItem>
          <MetricCard
            title={'Ulcer Index'}
            description={
              'Quantifies the severity and duration of investment losses, helping investors understand the potential downside risk of their holdings.'
            }
            value={ulcer_index}
          />
        </GridItem>

        <GridItem>
          <MetricCard
            title={'Beta'}
            description={
              'Measures how much an investment moves with the overall market.'
            }
            value={beta_alpha}
          />
        </GridItem>

        <GridItem>
          <MetricCard
            title={'Alpha'}
            description={
              'Represents the investment excess return compared to what would be expected based on its risk level'
            }
            value={beta_alpha}
          />
        </GridItem>

        <GridItem>
          <MetricCard
            title={'Annualized Return'}
            description={
              'Calculates the average rate of return on an investment over a year'
            }
            value={annualized_return}
          />
        </GridItem>

        <GridItem>
          <MetricCard
            title={'Annualized Volatility'}
            description={
              'Measures how much an investment s returns fluctuate from its average return over time, indicating its level of risk'
            }
            value={annualized_volatility}
          />
        </GridItem>

        <GridItem>
          <MetricCard
            title={'Longest Drawdown'}
            description={
              'The period with the most extended continuous losses an investment experiences without reaching a new peak'
            }
            value={longest_drawdown}
          />
        </GridItem>

        <GridItem>
          <MetricCard
            title={'Max Drawdown'}
            description={
              'The largest percentage decline an investment experiences from its highest point to its lowest point before recovering'
            }
            value={max_drawdown}
          />
        </GridItem>

        <GridItem>
          <MetricCard
            title={'Winning Days'}
            description={
              'Refers to the number of days an investment achieved positive returns within a specific period, showing its ability to generate gains'
            }
            value={winning_days}
          />
        </GridItem>

        <GridItem>
          <MetricCard
            title={'Annual Turnover'}
            description={
              'Measure of how frequently assets in the portfolio are bought or sold'
            }
            value={annual_turnover}
          />
        </GridItem>
      </Grid>
    </div>
  );
};

export default MetricsPage;
