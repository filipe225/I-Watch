import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
    providedIn: 'root'
})
export class UserLocalStorageService {
    default_item_name: string = 'user_reviews';
    helper_object_name: string = 'actions_to_update';

    constructor() {}

    getStorageItemParsed(itemName?: string) {
        return JSON.parse(localStorage.getItem(itemName || this.default_item_name)) || null;
    }

    setStorageItemStringified(itemName: string, itemsObject) {
        try {
            if (!itemsObject) throw new Error('No object defined');
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
        this.setStorageItemStringified(this.default_item_name, items);

        let helper_items = this.getStorageItemParsed(this.helper_object_name);
        if (Array.isArray(helper_items)) {
            newItem.action_type = 'insert';
            helper_items.push(newItem);
        } else {
            helper_items = [];
            newItem.action_type = 'insert';
            helper_items.push(newItem);
        }
        this.setStorageItemStringified(this.helper_object_name, helper_items);

    }

    clearHelperItems() {
        localStorage.setItem(this.helper_object_name, null);
    }

    getHelperItems() {
        return JSON.parse(localStorage.getItem(this.helper_object_name));
    }
}
