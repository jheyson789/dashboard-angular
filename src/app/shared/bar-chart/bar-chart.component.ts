import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartType, ChartOptions} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  @Input('title') title: string = '';

  barChartOptions: ChartOptions = {
    responsive: true,
    aspectRatio: 1,
    maintainAspectRatio: false,
    scales: {xAxes: [{}], yAxes: [{}]},
  };
  barChartLabels: Label[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {
      data: [2500, 5900, 11000, 8100, 8600, 8050],
      label: 'Visitors',
      barPercentage: 0.2,
      backgroundColor: '#6d5cb3',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
