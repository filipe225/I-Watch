import { Component } from '@angular/core';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    series: Array<{name: string, review: string, rating: Number}>;

    constructor() {
        this.series = [
            {
                name: 'Breaking Bad',
                review: 'salk wjeqwjas, dqhwpodasncaspod odj sd qwjd doasj d jowd skdkash dqwhdq bda.',
                rating: 5
            },
            {
                name: 'Better Call Saul',
                review: '',
                rating: 4.5
            },
            {
                name: 'sons of Anarchy',
                review: 'ksadnq doqwjeoqw o eqwopeuqwo uou ashd hqwih qdh sj dbqiwhiqheq.',
                rating: 3.5
            }
        ];
    }

}
