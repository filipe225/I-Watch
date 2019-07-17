import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FriendIWatchedListPage } from './friend-i-watched-list.page';

const routes: Routes = [
  {
    path: '',
    component: FriendIWatchedListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FriendIWatchedListPage]
})
export class FriendIWatchedListPageModule {}
