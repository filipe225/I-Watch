import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Store } from './store';
import { Review } from '../_models/Review';

@Injectable({
    providedIn: 'root'
})
export class ReviewStore extends Store<Review[]>{

    constructor() {
        super();
    }

    init() {
        if(this.getAll()) return;

        // TODO implement review service
        
    }
}
