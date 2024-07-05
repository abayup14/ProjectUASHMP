import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DraftnewsPage } from './draftnews.page';

const routes: Routes = [
  {
    path: '',
    component: DraftnewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DraftnewsPageRoutingModule {}
