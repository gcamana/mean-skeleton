import { Injectable } from '@angular/core';

@Injectable()

export class CommonService {

    setBackgrounStyle(bgImage?: string): any {
        //-TODO:CommonImage
        bgImage = bgImage || '';
        return { 'background-image': `url(${bgImage})` };
    }
}