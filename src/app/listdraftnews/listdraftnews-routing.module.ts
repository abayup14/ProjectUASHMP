import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListdraftnewsPage } from './listdraftnews.page';

const routes: Routes = [
  {
    path: '',
    component: ListdraftnewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListdraftnewsPageRoutingModule {}
