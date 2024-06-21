import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchnewsPage } from './searchnews.page';

const routes: Routes = [
  {
    path: '',
    component: SearchnewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchnewsPageRoutingModule {}
