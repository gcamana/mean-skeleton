import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class PicturesService {
    constructor(
        private _http: Http

    ) { }
}