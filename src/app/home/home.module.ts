import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {PagesModule} from './pages/pages.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule, SharedModule, PagesModule],
})
export class HomeModule {}
