import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IWatchedReviewDetailPage } from './i-watched-review-detail.page';

const routes: Routes = [
  {
    path: '',
    component: IWatchedReviewDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IWatchedReviewDetailPage]
})
export class IWatchedReviewDetailPageModule {}
