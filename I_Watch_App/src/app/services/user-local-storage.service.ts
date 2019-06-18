import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLocalStorageService {
    default_item_name: string = 'user-items';
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

    constructor() { }

    getStorageItem(itemName?: string) {
        return JSON.parse(localStorage.getItem(itemName || this.default_item_name)) || null;
    }

    setStorageItem(itemName: string, itemsObject) {
        try {
            if(!itemsObject) itemsObject = this.default_items_object;
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

    addNewItemToObject(itemName, newItem) {
        let items = JSON.parse(localStorage.getItem(itemName || this.default_item_name));
        if(Array.isArray(items)) {
            items.push(newItem)
        }

        this.setStorageItem(itemName, items);
    }

}
