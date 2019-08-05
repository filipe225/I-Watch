import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-sync-data',
    templateUrl: './sync-data.page.html',
    styleUrls: ['./sync-data.page.scss'],
})
export class SyncDataPage implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
        setTimeout(function () {
            this.router.navigateByUrl('/i-watched-list');
        }.bind(this), 2000)
    }

}
