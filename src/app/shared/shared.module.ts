import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [HeaderComponent, SidebarComponent],
})
export class SharedModule {}
