import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
        private router: Router
    ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group( {
            username: ['', Validators.required],
            password: ['', Validators.required, Validators.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,}$'))]
        });

    }

    loginSubmit() {
        let username = this.loginFormInput.username;
        let password = this.loginFormInput.password;
        
        console.log('username & password: ', username, password);

        let exists = this.mockUsers.some( obj => obj.username === username && obj.password === password);
        console.log("exists", exists);

        //this.router.navigateByUrl('/i-watched-list');
    }

}
