'use client';
import React, { useEffect, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { list_color_realization } from '../../variables/const';

am4core.useTheme(am4themes_animated);
am4core.addLicense('ch-custom-attribution');

const BarChartComponent = ({ data }: { data: {}[] }) => {
  const chart = useRef<am4charts.XYChart | null>(null);

  useEffect(() => {
    let barChart = am4core.create('chartdiv', am4charts.XYChart);

    barChart.paddingRight = 20;
    barChart.fontSize = 13;

    // let data = [
    //   {
    //     type: 'Realization',
    //     litres: 501.9,
    //   },
    //   {
    //     type: 'Target Jul',
    //     litres: 301.9,
    //   },
    //   {
    //     type: 'Target Des',
    //     litres: 201.1,
    //   },
    // ];

    const updatedData = data.map((e, index) => ({
      ...e,
      open_value: 0,
      color: list_color_realization[index],
    }));

    barChart.data = updatedData;

    const categoryAxis = barChart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'name';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.grid.template.disabled = true;

    const valueAxis = barChart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.line.disabled = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.grid.template.disabled = true;

    let series = barChart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'value';
    series.dataFields.openValueY = 'open_value';
    series.dataFields.categoryX = 'name';
    series.columns.template.tooltipText = '{value_display}';
    series.columns.template.propertyFields.fill = 'color';
    series.columns.template.propertyFields.stroke = 'color';
    series.columns.template.column.cornerRadiusTopLeft = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;

    chart.current = barChart;

    return () => {
      barChart.dispose();
    };
  }, [data]);

  return <div id='chartdiv' style={{ width: '100%', height: '240px' }}></div>;
};

export default BarChartComponent;
