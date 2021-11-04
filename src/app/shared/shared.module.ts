import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {ChartsModule} from 'ng2-charts';
import {LineChartComponent} from './line-chart/line-chart.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BarChartComponent,
    LineChartComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule, ChartsModule],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BarChartComponent,
    LineChartComponent,
  ],
})
export class SharedModule {}
