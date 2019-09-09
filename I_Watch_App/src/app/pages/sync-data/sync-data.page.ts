import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserReviewsStore } from "../../store/user-reviews-store";
import { ToastController } from "@ionic/angular";

@Component({
    selector: 'app-sync-data',
    templateUrl: './sync-data.page.html',
    styleUrls: ['./sync-data.page.scss'],
})
export class SyncDataPage implements OnInit {

    constructor(
        private router: Router,
        private store: UserReviewsStore,
        private toastController: ToastController) { }

    ngOnInit() {

        let user_reviews_result = this.store.getUserReviews();

        if(user_reviews_result["success"]) {
            this.router.navigateByUrl('/i-watched-list');
        } else {
            this.presentToast({
                message: "Error retrieving data!. Please try again or contact support."
            });
            this.router.navigateByUrl('home');
        }

        
        // setTimeout(function () {
        //     this.router.navigateByUrl('/i-watched-list');
        // }.bind(this), 2000)
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
