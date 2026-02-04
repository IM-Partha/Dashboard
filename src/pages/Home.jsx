import React from 'react'
import BarChartOne from '../charts/barchat/Barchat'
import LineChartOne from '../charts/linechart/Linechart'
import ChartTab from '../charts/ChartTab'
const Home = () => {
  return (
    <div className="space-y-6">
      {/* Header / Tabs */}
      <div className="flex justify-between items-center">
        <ChartTab />
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChartOne />
        <LineChartOne />
      </div>
    </div>
  );
};

export default Home;
