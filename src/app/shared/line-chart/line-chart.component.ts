import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label, Color} from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  lineChartData: ChartDataSets[] = [
    {
      data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81],
      label: 'Course Visit',
      // fill: 1,
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90, 40, 19, 75],
      label: 'Course Sale',
      // fill: 1,
    },
  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
  ];

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true,
    elements: {
      point: {
        pointStyle: 'star',
      },
    },
    legend: {
      align: 'end',
    },
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [
    {
      backgroundColor: '#6d5cb336',
      borderColor: '#6d5cb3',
    },
    {
      backgroundColor: '#ff553836',
      borderColor: '#ff5538',
    },
  ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  lineChartType: ChartType = 'line';

  lineChartPlugins = [];

  constructor() {}

  ngOnInit(): void {}

  // events
  chartClicked(event: any): void {
    console.log(event);
  }

  chartHovered({event, active}: {event: MouseEvent; active: {}[]}): void {
    console.log(event, active);
  }
}
