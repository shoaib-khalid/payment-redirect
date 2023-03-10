import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize, Subject, takeUntil, takeWhile, tap, timer } from 'rxjs';
import { AppConfig } from "app/config/service.config";

@Component({
    selector     : 'thankyou',
    templateUrl  : './thankyou.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ThankYouComponent
{

    countdown       : number = 5;
    countdownMapping: any = {
        '=1'   : '# second',
        'other': '# seconds'
    };
    params : {
        serviceType     : string;
        completionStatus: string;
        paymentType     : string;
        status          : string;
    }

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        @Inject(DOCUMENT) private _document: Document,
        private _activatedRoute: ActivatedRoute,
        private _apiServer: AppConfig
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
        this.params = this._activatedRoute.snapshot.paramMap['params']

        // Redirect after the countdown
        timer(1000, 1000)
            .pipe(
                finalize(() => {
                    
                    if (this.params.serviceType === 'DINEIN')
                    {
                        this._document.location.href = 'https://' + this._apiServer.settings.dineInDomain + '/order-history';
                    }
                    else if (this.params.serviceType === 'DELIVERIN')
                    {
                        this._document.location.href = 'https://' + this._apiServer.settings.marketplaceDomain;
                    }
                }),
                takeWhile(() => this.countdown > 0),
                takeUntil(this._unsubscribeAll),
                tap(() => this.countdown--)
            )
            .subscribe();
        
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

    redirectToDineIn()
    {
        this._document.location.href = 'https://' + this._apiServer.settings.dineInDomain + '/order-history';
    }

    redirectToDeliverIn()
    {
        this._document.location.href = 'https://' + this._apiServer.settings.marketplaceDomain;
    }
}
