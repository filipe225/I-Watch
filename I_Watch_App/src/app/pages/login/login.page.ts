import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from "@ionic/angular";

import { UserMainServiceService } from "../../services/user-main-service.service";
import { UserReviewsStore } from "../../store/user-reviews-store";


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    loginForm: FormGroup;
    submitted: false;
    mockUsers: Array<{username: string, password: string}> = [
        { username: 'filipe', password: '12345' },
        { username: 'ruben_neves', password: 'starwars' },
        { username: 'cristiano_ronaldo', password: 'qwerty' }
    ];
    loginFormInput = {
        username: '',
        password: ''
    }

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private toastController: ToastController,
        private store: UserReviewsStore
    ) {}

    ngOnInit() {

        const hasInternet = navigator.onLine;
        if(!hasInternet) {
            this.presentToast({
                message: 'No internet connection!'
            });
        }

        this.loginForm = this.formBuilder.group( {
            username: ['', Validators.required],
            password: ['', Validators.required, Validators.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,}$'))]
        });

    }

    async loginSubmit() {
        // let username = this.loginFormInput.username;
        // let password = this.loginFormInput.password;
        
        // console.log('username & password: ', username, password);

        // let exists = this.mockUsers.some( obj => obj.username === username && obj.password === password);
        // console.log("exists", exists);

        let result = await this.store.loginUser(this.loginFormInput.username, this.loginFormInput.password);
        console.log("RESULT CLIENT ",  result);
        if(result["status"] === 200) {
            console.log(" RESPONSE FROM SERVER", result);
            this.router.navigateByUrl('/sync-data');
        } else {
            console.log("  RESULT FROM SERVER", result);
        }
        
    }

    async presentToast(obj) {
        const toast = await this.toastController.create({
            header: obj.header ? obj.header : '',
            message: obj.message ? obj.message : 'erro',
            duration: obj.duration ? obj.duration : 2000,
            position: 'bottom',
            ...obj.extras
        });
        toast.present();
    }

}
