import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusViewComponent} from './status-view/status-view.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [StatusViewComponent],
  imports: [CommonModule, RouterModule],
  exports: [StatusViewComponent],
})
export class ComponentsModule {}
