import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLocalStorageService {
    default_item_name: string = 'user-items';

    constructor() { }

    getStorageItem(itemName: string) {
        return JSON.parse(localStorage.getItem(itemName || this.default_item_name)) || null;
    }

    setStorageItem(itemName: string, itemObject) {
        try {
            Object.defineProperty(itemObject, 'edited', { value: new Date().toISOString() });
            localStorage.setItem(itemName || this.default_item_name, JSON.stringify(itemObject))
            return 200;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    deleteStorageItem(itemName) {
        return localStorage.removeItem(itemName || this.default_item_name);
    }
}