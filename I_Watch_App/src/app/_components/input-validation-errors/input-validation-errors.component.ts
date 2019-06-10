import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-input-validation-errors',
    templateUrl: './input-validation-errors.component.html',
    styleUrls: ['./input-validation-errors.component.scss'],
})
export class InputValidationErrorsComponent implements OnInit {
    @Input() errorList: []

    constructor() { }

    ngOnInit() { }

}
