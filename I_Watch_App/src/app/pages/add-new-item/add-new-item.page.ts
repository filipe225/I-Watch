import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLocalStorageService } from '../../services/user-local-storage.service';
import { Review } from '../../_models/Review';

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

    formMovieSubmit() {
        console.log(this.moviesForm);
        const VALUES = this.moviesForm.value;

        let review: Review = {
            type: 'Movie',
            name: VALUES.movie_name,
            created_in: VALUES.movie_release_date,
            opinion: VALUES.movie_opinion,
            rating: VALUES.movie_rating,
            seasons_watched: 0,
            total_seasons: 0,
            status: 'finished'
        }

        this.userLocalStorageService.addNewItemToObject(review);

    }

    formSeriesSubmit() {
        console.log(this.seriesForm);
        const VALUES = this.seriesForm.value;

        let review: Review = {
            type: 'Movie',
            name: VALUES.series_name,
            created_in: VALUES.series_released_in,
            opinion: VALUES.series_opinion,
            rating: VALUES.series_rating,
            total_seasons: VALUES.series_total_seasons,
            seasons_watched: VALUES.series_seasons_watched,
            status: 'finished'
        }

        this.userLocalStorageService.addNewItemToObject(review);
    }

    formBookSubmit() {
        console.log(this.booksForm);
        const VALUES =  this.booksForm.value;

        let review: Review = {
            type: 'Movie',
            name: VALUES.books_name,
            created_in: VALUES.books_released_in,
            opinion: VALUES.books_opinion,
            rating: VALUES.books_rating,
            total_seasons: 0,
            seasons_watched: 0,
            status: 'finished'
        }

        this.userLocalStorageService.addNewItemToObject(review);
    }

    cancel() {
        this.router.navigateByUrl('/i-watched-list');
    }

    cancelForm() {
        this.itemType = null;
    }
}
