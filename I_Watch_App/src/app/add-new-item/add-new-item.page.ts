import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLocalStorageService } from '../services/user-local-storage.service';

@Component({
    selector: 'app-add-new-item',
    templateUrl: './add-new-item.page.html',
    styleUrls: ['./add-new-item.page.scss'],
    providers: [UserLocalStorageService]
})
export class AddNewItemPage implements OnInit {
    itemType: string = null;
    moviesForm: FormGroup;
    seriesForm: FormGroup;
    booksForm: FormGroup;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private userLocalStorageService: UserLocalStorageService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {

        // this.router.navigateByUrl('/add-new-item', {
        //     queryParams: {
        //         type: 'movies'
        //     }
        // });

        this.activatedRoute.queryParams.subscribe( data => {
            if(data.type) this.itemType = data.type;
            else this.itemType = null;
        });

        switch(this.itemType) {
            case 'movie':
                break;
            case 'series':
                break;
            case 'book':
                break;
            default: 
                break;
        }

        this.moviesForm = this.buildMoviesForm();
        this.seriesForm = this.buildSeriesForm();
        this.booksForm = this.buildBooksForm();

        this.randomStuff();

    }

    buildMoviesForm() {
        let form = new FormGroup({
            movie_name: new FormControl('', Validators.required),
            movie_release_date: new FormControl('', Validators.nullValidator),
            movie_opinion: new FormControl('', Validators.required),
            movie_rating: new FormControl('', Validators.required),
            movie_categories: new FormControl('', Validators.nullValidator)
        });

        return this.formBuilder.group(form.controls);
    }

    buildSeriesForm() {
        let form = new FormGroup({
            series_name: new FormControl('', Validators.required),
            series_release_date: new FormControl('', Validators.nullValidator),
            series_number_of_seasons: new FormControl('', Validators.required),
            series_number_of_seasons_watched: new FormControl('', Validators.required),
            series_opinion: new FormControl('', Validators.required),
            series_rating: new FormControl('', Validators.required),
            series_categories: new FormControl('', Validators.nullValidator)
        });

        return this.formBuilder.group(form.controls);
    }

    buildBooksForm() {
        let form = new FormGroup({
            book_name: new FormControl('', Validators.required),
            book_release_date: new FormControl('', Validators.nullValidator),
            book_opinion: new FormControl('', Validators.required),
            book_rating: new FormControl('', Validators.required),
            book_categories: new FormControl('', Validators.nullValidator)
        });

        return this.formBuilder.group(form.controls);
    }

    addTypeMovie() {
        this.itemType = 'movie';
    }

    addTypeSeries() {
        this.itemType = 'series';
    }

    addTypeBook() {
        this.itemType = 'book';
    }

    formMoviewSubmit() {
        console.log(this.moviesForm);
    }

    formSeriesSubmit() {
        console.log(this.seriesForm);
    }

    formBookSubmit() {
        console.log(this.booksForm);
    }

    // TO DELETE AFTER BACKEND IS IMPLEMENTED
    randomStuff() {
        this.userLocalStorageService.setStorageItem(null, [
            {
                type: 'Series',
                name: 'Breaking Bad',
                rating: 20,
                opinion: 'The best',
                total_seasons: 5,
                seasons_watched: 5,
                status: 'Finished',
                created_in: new Date().toLocaleString()
            },
            {
                type: 'Series',
                name: 'Legion',
                rating: 15,
                opinion: 'Great with, with some worse moments.',
                total_seasons: 2,
                seasons_watched: 2,
                status: 'Running',
                created_in: new Date().toLocaleString()
            },
            {
                type: 'Movie',
                name: 'Mad Max',
                rating: 17,
                opinion: 'What an action movie!',
                total_seasons: -1,
                seasons_watched: -1,
                status: 'Finished',
                created_in: new Date().toLocaleString()
            },
            {
                type: 'Book',
                name: '12 Rules for life',
                rating: 14,
                opinion: 'Very good book.',
                total_seasons: -1,
                seasons_watched: -1,
                status: 'Finished',
                created_in: new Date().toLocaleString()
            }
        ])
    }
}
