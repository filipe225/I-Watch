import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from "@ionic/angular";

import { UserLocalStorageService } from '../../services/user-local-storage.service';
import { UserReviewsStore } from '../../store/user-reviews-store';

import { Movie } from 'src/app/_models/Movie';
import { Series } from 'src/app/_models/Series';
import { Book } from 'src/app/_models/Book';

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
    hasInternet: boolean;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private userLocalStorageService: UserLocalStorageService,
        private formBuilder: FormBuilder,
        private toastController: ToastController,
        private userStore: UserReviewsStore
    ) { }

    ngOnInit() {

        // this.router.navigateByUrl('/add-new-item', {
        //     queryParams: {
        //         type: 'movies'
        //     }
        // });

        this.hasInternet = this.userStore.hasInternet;

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
            movie_director: new FormControl('', Validators.nullValidator), 
            movie_release_date: new FormControl('', Validators.nullValidator),
            movie_opinion: new FormControl('', Validators.required),
            movie_rating: new FormControl('', Validators.required),
            movie_genres: new FormControl('', Validators.nullValidator),
            movie_watched: new FormControl('', Validators.requiredTrue)
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
            series_genres: new FormControl('', Validators.nullValidator),
            series_watched: new FormControl('', Validators.requiredTrue)
        });

        return this.formBuilder.group(form.controls);
    }

    buildBooksForm() {
        let form = new FormGroup({
            book_name: new FormControl('', Validators.required),
            book_release_date: new FormControl('', Validators.nullValidator),
            book_opinion: new FormControl('', Validators.required),
            book_rating: new FormControl('', Validators.required),
            book_genres: new FormControl('', Validators.nullValidator),
            book_read: new FormControl('', Validators.requiredTrue)
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

        let movie_review: Movie = {
            type: 'Movie',
            name: VALUES.movie_name,
            director: '',
            released_in: VALUES.movie_release_date,
            opinion: VALUES.movie_opinion,
            rating: VALUES.movie_rating,
            genres: [],
            watched: true // TODO
        }

        this.userLocalStorageService.addNewItemToObject(movie_review);

    }

    formSeriesSubmit() {
        console.log(this.seriesForm);
        const VALUES = this.seriesForm.value;

        let series_review: Series = {
            type: 'Series',
            name: VALUES.series_name,
            released_in: VALUES.series_released_in,
            opinion: VALUES.series_opinion,
            rating: VALUES.series_rating,
            seasons: VALUES.series_total_seasons,
            active: true, // TODO
            watched: true, // TODO
            genres: []
        }

        this.userLocalStorageService.addNewItemToObject(series_review);
    }

    formBookSubmit() {
        console.log(this.booksForm);
        const VALUES =  this.booksForm.value;

        let book_review: Book = {
            type: 'Book',
            name: VALUES.books_name,
            released_in: VALUES.books_released_in,
            opinion: VALUES.books_opinion,
            rating: VALUES.books_rating,
            author: '', // TODO
            read: true, // TODO
            genres: []
        }

        this.userLocalStorageService.addNewItemToObject(book_review);
    }

    addNewReview(obj_to_add: any) {
        const result = this.userStore.postUserReview(obj_to_add);
    }

    cancel() {
        this.router.navigateByUrl('/i-watched-list');
    }

    cancelForm() {
        this.itemType = null;
    }

    async presentToast(obj) {
        const toast = await this.toastController.create({
            header: obj.header ? obj.header : '',
            message: obj.message ? obj.message : 'Error',
            duration: obj.duration ? obj.duration : 2000,
            position: 'bottom'
        });
        toast.present();
    }
}
