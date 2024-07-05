import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListdraftnewsPageRoutingModule } from './listdraftnews-routing.module';

import { ListdraftnewsPage } from './listdraftnews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListdraftnewsPageRoutingModule
  ],
  declarations: [ListdraftnewsPage]
})
export class ListdraftnewsPageModule {}
