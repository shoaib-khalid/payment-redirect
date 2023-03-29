import { Component } from '@angular/core';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{

    favIcon16: HTMLLinkElement = document.querySelector('#appIcon16');
    favIcon32: HTMLLinkElement = document.querySelector('#appIcon32');

    /**
     * Constructor
     */
    constructor()
    {
        // set favicon
        this.favIcon16.href = 'assets/icons/fav-icon-symplified.png';
        this.favIcon32.href = 'assets/icons/fav-icon-symplified.png';
    }
}
