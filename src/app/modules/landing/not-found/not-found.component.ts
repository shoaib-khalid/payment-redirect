import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize, Subject } from 'rxjs';
import { AppConfig } from "app/config/service.config";

@Component({
    selector     : 'not-found',
    templateUrl  : './not-found.component.html',
    encapsulation: ViewEncapsulation.None
})
export class NotFoundComponent
{
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    marketplaceInfo: { phonenumber: string; email: string; address: string; reg:string };


    /**
     * Constructor
     */
    constructor(
        @Inject(DOCUMENT) private _document: Document,
        private _apiServer: AppConfig,
        private _activatedRoute: ActivatedRoute
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.marketplaceInfo = {
            email: "hello@deliverin.my",
            phonenumber: "+60125033299",
            address: "First Subang, Unit S-14-06, Level 14, Jalan SS15/4G, 47500 Subang Jaya, Selangor",
            reg: "Symple Business System Sdn Bhd (SSM Reg #: 1436952-D)"
        };
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    redirectToDeliverIn()
    {
        this._document.location.href = 'https://' + this._apiServer.settings.marketplaceDomain;
    }

    goToUrl(){
        const phonenumber = this.marketplaceInfo.phonenumber.replace(/[^0-9]/g, '');
        const message = encodeURI('Tell me more about joining DeliverIn and DineIn platform!')
        window.open("https://wa.me/" + phonenumber + '?text=' + message, "_blank");

        // this._document.location.href = "https://wa.me/" + phonenumber + '?text=' + message;
    }
}
