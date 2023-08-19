'use client';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { useEffect, useRef } from 'react';

am4core.useTheme(am4themes_animated);
am4core.addLicense('ch-custom-attribution');

const PieChartComponent = ({ data }: { data: {}[] }) => {
  const chart = useRef<am4charts.PieChart | null>(null);

  useEffect(() => {
    let pieChart = am4core.create('chartdiv', am4charts.PieChart);

    pieChart.fontSize = 13;
    pieChart.data = data;

    // Add and configure Series
    var pieSeries = pieChart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'value';
    pieSeries.dataFields.category = 'name';

    // Disable ticks and labels
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;

    // Let's cut a hole in our Pie chart the size of 40% the radius
    pieChart.innerRadius = am4core.percent(40);

    // Add a legend
    pieChart.legend = new am4charts.Legend();

    chart.current = pieChart;

    return () => {
      pieChart.dispose();
    };
  }, [data]);

  return <div id='chartdiv' style={{ width: '100%', height: '240px' }}></div>;
};

export default PieChartComponent;
