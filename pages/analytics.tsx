import type { NextPage } from 'next';
import { OverviewAnalyticsPanel } from '../src/analytics/app/internal/containers/OverviewAnalyticsPanel/OverviewAnalyticsPanel';
import { AnalyticTable } from '../src/analytics/app/internal/containers/AnalyticTable/AnalyticTable';
import { AnalyticChart } from '../src/analytics/app/internal/containers/AnalyticChart/AnalyticChart';
import { TrendingPanel } from '../src/analytics/app/internal/containers/TrendingPanel/TrendingPanel';

const AnalyticsPage: NextPage = () => {
  return (
    <div className="space-y-4">
      <OverviewAnalyticsPanel />
      <AnalyticTable />
      <TrendingPanel />
      <AnalyticChart />
    </div>
  );
};

export default AnalyticsPage;
