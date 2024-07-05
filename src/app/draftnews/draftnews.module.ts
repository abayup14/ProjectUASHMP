import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DraftnewsPageRoutingModule } from './draftnews-routing.module';

import { DraftnewsPage } from './draftnews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DraftnewsPageRoutingModule
  ],
  declarations: [DraftnewsPage]
})
export class DraftnewsPageModule {}
