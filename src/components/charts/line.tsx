'use client';
import React, { useEffect, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { list_color_realization } from '../../utils/variables/const';

am4core.useTheme(am4themes_animated);
am4core.addLicense('ch-custom-attribution');

const LineChartComponent = ({ data }: { data: {}[] }) => {
  const chart = useRef<am4charts.XYChart | null>(null);

  useEffect(() => {
    let lineChart = am4core.create('chartdiv', am4charts.XYChart);

    lineChart.paddingRight = 20;
    lineChart.fontSize = 13;

    lineChart.data = data;

    const categoryAxis = lineChart.xAxes.push(new am4charts.DateAxis());
    categoryAxis.dataFields.date = 'date';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    const valueAxis = lineChart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.line.disabled = true;

    let series = lineChart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = 'value';
    series.dataFields.dateX = 'date';
    series.strokeWidth = 2;

    // Add simple bullet
    let circleBullet = series.bullets.push(new am4charts.CircleBullet());
    circleBullet.circle.stroke = am4core.color('#fff');
    circleBullet.circle.strokeWidth = 2;
    circleBullet.tooltipText = 'Value: [bold]{value}[/]';

    chart.current = lineChart;

    return () => {
      lineChart.dispose();
    };
  }, [data]);

  return <div id='chartdiv' style={{ width: '100%', height: '240px' }}></div>;
};

export default LineChartComponent;
