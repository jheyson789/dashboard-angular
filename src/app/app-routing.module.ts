import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeRoutingModule} from './home/home-routing.module';
// TODO aca viene el lazy loading de todos los routing
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  // {path: '**', component: PagesnotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
