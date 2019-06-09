import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
 
import { User } from '../_models/User';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
    user: User;
    registrationForm: FormGroup;
    validationMessages: Object;

    constructor(
        private formBuilder: FormBuilder,
    
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
            email: new FormControl('', Validators.required),
            first_name: new FormControl('', Validators.required),
            last_name: new FormControl('', Validators.required)
        });

        this.registrationForm = this.formBuilder.group(myFormGroup.controls);
        console.log("TCL: RegisterPage -> ngOnInit -> registrationForm", this.registrationForm);

        this.validationMessages = {
            'username': [
                { type: 'required', message: 'Username is required.' },
                { type: 'minLength', message: 'Minimun length is 5.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minLength', message: 'Minimum length is 6' },
                { type: 'maxLength', message: 'Maximum length is 20' }
            ]
        }
    }

    onSubmit() {
        console.log("REGISTRATION FORM STATUS", this.registrationForm.status);
    }

}
