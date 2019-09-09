import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './pages/home/home.module#HomePageModule'
    },
    {
        path: 'list',
        loadChildren: './pages/list/list.module#ListPageModule'
    },
    {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginPageModule'
    },
    {
        path: 'register',
        loadChildren: './pages/register/register.module#RegisterPageModule'
    },
    {
        path: 'i-watched-list',
        loadChildren: './pages/i-watched-list/i-watched-list.module#IWatchedListPageModule'
    },
    {
        path: 'add-new-item',
        loadChildren: './pages/add-new-item/add-new-item.module#AddNewItemPageModule'
    },
    {
        path: 'i-watched-review-detail/:review_id',
        loadChildren: './pages/i-watched-review-detail/i-watched-review-detail.module#IWatchedReviewDetailPageModule'
    },
    { 
        path: 'user-profile', 
        loadChildren: './pages/user-profile/user-profile.module#UserProfilePageModule' 
    },
    { 
        path: 'friends-list', 
        loadChildren: './pages/friends-list/friends-list.module#FriendsListPageModule' 
    },
    { 
        path: 'review-detail', 
        loadChildren: './pages/review-detail/review-detail.module#ReviewDetailPageModule' 
    },
    { 
        path: 'friend-i-watched-list', 
        loadChildren: './pages/friend-i-watched-list/friend-i-watched-list.module#FriendIWatchedListPageModule' 
    },
    { 
        path: 'sync-data', 
        loadChildren: './pages/sync-data/sync-data.module#SyncDataPageModule' 
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

// http://meumobi.github.io/ionic/2018/10/19/login-flow-ionic4.html