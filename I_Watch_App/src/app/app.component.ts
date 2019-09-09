import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Login',
            url: '/login',
            icon: 'list'
        },
        {
            title: 'Sign Up',
            url: '/register',
            icon: 'list'
        },
        {
            title: 'I Watched',
            url: '/i-watched-list',
            icon: 'list'
        },
        {
            title: 'Add New Item',
            url: '/add-new-item',
            icon: 'add'
        }
    ];

    public loggedMenu = [
        {
            title: 'I Watched',
            url: '/i-watched-list',
            icon: 'list'
        },
        {
            title: 'Add New Item',
            url: '/add-new-item',
            icon: 'add'
        },
        {
            title: 'Profile',
            url: '/user-profile',
            icon: 'list'
        },
        {
            title: 'Friends List',
            url: '/friends-list',
            icon: 'list'
        },     
        {
            title: 'Logout',
            url: '/logout',
            icon: 'list'
        },

    ];


    public main_menu: [];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });

        // TODO
        // add profile link if user is connected
    }
}
