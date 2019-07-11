import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    user: User;
    registrationForm: FormGroup;
    validationMessages: Object;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userMainService: UserMainServiceService
    ) { }

    ngOnInit() {
        let myFormGroup = new FormGroup({
            username: new FormControl('', {
                validators: [Validators.required, Validators.minLength(5)],
                updateOn: 'change'
            }),
            password: new FormControl('', {
                validators: [Validators.required, Validators.minLength(6), Validators.maxLength(20)],
                updateOn: 'change'
            }),
            repeat_password: new FormControl('', Validators.required),
            user_email: new FormControl('', Validators.required),
            first_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
            last_name: new FormControl('', [Validators.required, Validators.minLength(3)])
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
                { type: 'minLength', message: 'Minimun length is 5.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minLength', message: 'Minimum length is 6' },
                { type: 'maxLength', message: 'Maximum length is 20' }
            ],
            'repeat_password': [
                { type: 'required', message: 'Repeat password is required' }
            ],           
            'first_name': [
                { type: 'required', message: 'First name is required' },
                { type: 'minLength', message: 'First name must have at leat 3 characters.'}
            ],
            'last_name': [
                { type: 'required', message: 'Last name is required' },
                { type: 'minLength', message: 'Last name must have at leat 3 characters.'}
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

    onSubmit(e) {
        e.preventDefault();
        
        if (this.registrationForm.valid) {
            console.log('registrationForm submitted', this.registrationForm);
            
            const values = this.registrationForm.value;

            this.user.first_name = values.first_name.value;
            this.user.last_name = values.last_name.value;
            this.user.email = values.email.value;
            this.user.username = values.username.value;
            this.user.friend_code = '';
            this.user.birthday = null;
            this.user.token = '';
            this.user.friends = [];

            let passwordData = {
                password: values.password.value,
                repeat_password: values.repeat_password.value
            };

            console.log("user data", this.user, passwordData);
            this.userMainService.registerUser(this.user, passwordData);

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

}
