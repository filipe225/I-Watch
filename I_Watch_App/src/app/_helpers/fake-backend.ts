import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';

let users = JSON.parse(localStorage.getItem('users')) || [];

@Injectable()
export class FakeBackend {
    
}