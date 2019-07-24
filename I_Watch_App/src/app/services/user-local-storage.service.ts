import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
    providedIn: 'root'
})
export class UserLocalStorageService {
    default_item_name: string = 'user-items';
    helper_object_name: string = 'actions-to-update';

    default_items_object = [
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
    ];

    constructor() {}

    getStorageItem(itemName?: string) {
        return JSON.parse(localStorage.getItem(itemName || this.default_item_name)) || null;
    }

    setStorageItem(itemName: string, itemsObject) {
        try {
            if (!itemsObject) itemsObject = this.default_items_object;
            Object.defineProperty(itemsObject, 'edited', { value: new Date().toISOString() });
            localStorage.setItem(itemName || this.default_item_name, JSON.stringify(itemsObject))
            return 200;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    deleteStorageItem(itemName) {
        return localStorage.removeItem(itemName || this.default_item_name);
    }

    addNewItemToObject(newItem) {
        let time = new Date().toDateString();
        let new_hash = Md5.hashStr(time);
        console.log("TCL: UserLocalStorageService -> addNewItemToObject -> new_hash", new_hash)

        newItem.id = new_hash;

        let items = JSON.parse(localStorage.getItem(this.default_item_name));
        if (Array.isArray(items)) {
            items.push(newItem)
        }
        this.setStorageItem(this.default_item_name, items);

        let helper_items = this.getStorageItem(this.helper_object_name);
        if (Array.isArray(helper_items)) {
            newItem.action_type = 'insert';
            helper_items.push(newItem);
        } else {
            helper_items = [];
            newItem.action_type = 'insert';
            helper_items.push(newItem);
        }
        this.setStorageItem(this.helper_object_name, helper_items);

    }

    clearHelperItems() {
        localStorage.setItem(this.helper_object_name, null);
    }

    getHelperItems() {
        return JSON.parse(localStorage.getItem(this.helper_object_name));
    }
}
