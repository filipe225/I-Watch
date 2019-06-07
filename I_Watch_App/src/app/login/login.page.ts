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

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ) {

     }

    ngOnInit() {
        this.loginForm = this.formBuilder.group( {
            username: ['', Validators.required],
            password: ['', Validators.required, Validators.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,}$'))]
        })
    }

    onSubmit() {
        console.log(this.loginForm);
        
    }

}
