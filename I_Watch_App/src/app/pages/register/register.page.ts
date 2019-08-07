import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from "@ionic/angular";

import { UserMainServiceService } from "../../services/user-main-service.service";
import { InputValidationErrorsComponent } from '../../_components/input-validation-errors/input-validation-errors.component';
import { User } from '../../_models/User';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
    providers: [InputValidationErrorsComponent, UserMainServiceService]
})
export class RegisterPage implements OnInit {
    newUserData: any;
    registrationForm: FormGroup;
    validationMessages: Object;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userMainService: UserMainServiceService,
        private toastController: ToastController
    ) { 
        this.newUserData = {} as User;
    }

    ngOnInit() {
        if(!navigator.onLine) {
            this.presentToast({
                message: 'No internet connection!'
            });
        }

        let email_regexp = new RegExp("[^@]+@[^\.]+\..+", "gi");
        let myFormGroup = new FormGroup({
            username: new FormControl('', {
                validators: [Validators.required, Validators.minLength(5)],
                updateOn: 'change'
            }),
            password: new FormControl('', {
                validators: [Validators.required, Validators.minLength(6), Validators.maxLength(20)],
                updateOn: 'change'
            }),
            repeat_password: new FormControl('', {
                validators: [Validators.required, Validators.maxLength(20)], 
                updateOn: 'change'
            }),
            user_email: new FormControl('', {
                validators: [Validators.required, Validators.pattern(email_regexp)],
                updateOn: 'change'
            
            }),
            first_name: new FormControl('', {
                validators: [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
                updateOn: 'change'
            }),
            last_name: new FormControl('', {
                validators: [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
                updateOn: 'change'
            })
        });

        this.registrationForm = this.formBuilder.group(myFormGroup.controls);
        console.log("TCL: RegisterPage -> ngOnInit -> registrationForm", this.registrationForm);

        this.validationMessages = {
            'email': [
                { type: 'required', message: 'Email is Required' },
                { type: 'pattern', message: 'Email does not fit a valid pattern' }
            ],
            'username': [
                { type: 'required', message: 'Username is required.' },
                { type: 'minlength', message: 'Minimun length is 5.' },
                { type: 'maxlength', message: 'Maximum length is 20' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Minimum length is 6' },
                { type: 'maxlength', message: 'Maximum length is 20' }
            ],
            'repeat_password': [
                { type: 'required', message: 'Repeat password is required' },
                { type: 'comparison', message: 'Passwords do not match!' },
                { type: 'maxlength', message: 'Maximum length is 20' }
            ],           
            'first_name': [
                { type: 'required', message: 'First name is required' },
                { type: 'minlength', message: 'First name must have at leat 3 characters.'},
                { type: 'maxlength', message: 'Maximum length is 10' }
            ],
            'last_name': [
                { type: 'required', message: 'Last name is required' },
                { type: 'minlength', message: 'Last name must have at leat 3 characters.'},
                { type: 'maxlength', message: 'Maximum length is 10' }
            ]
        }
    }

    getFieldErrorType(field: string) {
        let coiso = Object.entries(this.registrationForm.get(field).errors)
                    .filter( ([key, value]) => value === true)
                    .map( ([key, value]) => key);

        console.log(coiso);
        return coiso;
    }

    isFieldValid(field: string) {
        return !this.registrationForm.get(field).valid && this.registrationForm.get(field).touched;
    }

    registerNewUser() {    
        console.log(this.registrationForm);
        if (this.registrationForm.valid) {
            console.log('registrationForm submitted', this.registrationForm);
            
            const values = this.registrationForm.value;

            console.log("user", this.newUserData);

            this.newUserData.first_name = values.first_name;
            this.newUserData.last_name = values.last_name;
            this.newUserData.email = values.user_email;
            this.newUserData.username = values.username;
            this.newUserData.friend_code = '';
            this.newUserData.birthday = null;
            this.newUserData.token = '';
            this.newUserData.friends = [];

            let passwordData = {
                password: values.password,
                repeat_password: values.repeat_password
            };

            console.log("user data", this.newUserData, passwordData);
            const resp = this.userMainService.registerUser(this.newUserData, passwordData).toPromise();
            resp
                .then( respData => {
                    console.log(respData);
                    this.presentToast({
                        message: respData["message"],
                        duration: 3000
                    });
                    this.router.navigateByUrl('/login');
                })
                .catch( error => {
                    console.log(error)
                });

        } else {
            // validate all form fields
            Object.keys(this.registrationForm.controls).forEach(field => {
                const control = this.registrationForm.get(field);
                control.markAsTouched({ onlySelf: true }); // mark as touched to activate validation
            });
        }
    }

    cancel() {
        this.router.navigateByUrl('/home');
    }

    async presentToast(obj) {
        const toast = await this.toastController.create({
            header: obj.header ? obj.header : '',
            message: obj.message ? obj.message : 'erro',
            duration: obj.duration ? obj.duration : 2000,
            position: 'bottom'
        });
        toast.present();
    }

}
