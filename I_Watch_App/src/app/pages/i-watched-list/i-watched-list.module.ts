import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IWatchedListPage } from './i-watched-list.page';

const routes: Routes = [
    {
        path: '',
        component: IWatchedListPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [IWatchedListPage]
})
export class IWatchedListPageModule { }
