import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchnewsPageRoutingModule } from './searchnews-routing.module';

import { SearchnewsPage } from './searchnews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchnewsPageRoutingModule
  ],
  declarations: [SearchnewsPage]
})
export class SearchnewsPageModule {}
