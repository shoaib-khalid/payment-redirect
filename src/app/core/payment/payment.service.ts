import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppConfig } from "app/config/service.config";
import { BehaviorSubject, catchError, map, Observable, of, switchMap } from "rxjs";
import { LogService } from "../logging/log.service";
import { Store } from "./payment.types";

@Injectable({
    providedIn: 'root'
})
export class PaymentService 
{
    // private _order: BehaviorSubject<Order | null> = new BehaviorSubject(null);
    private _store: BehaviorSubject<Store | null> = new BehaviorSubject(null);

    constructor(
        private _httpClient: HttpClient,
        private _apiServer: AppConfig,
        private _logging: LogService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /** Getter for order **/
    // get order$(): Observable<Order> { return this._order.asObservable(); }

    /** Getter for store */
    get store$(): Observable<Store> { return this._store.asObservable(); }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the Order Info
     */
    getOrderById(orderId: string): Observable<any>
    {
        let orderService = this._apiServer.settings.apiServer.orderService;
        let accessToken = "accessToken";

        const header = {  
            headers: new HttpHeaders().set("Authorization", `Bearer ${accessToken}`)
        };

        return this._httpClient.get<any>(orderService + '/orders/' + orderId, header)
            .pipe(
                catchError(() =>
                    // Return false
                    of(false)
                ),
                switchMap(async (response: any) => {
                    this._logging.debug("Response from Payment Redirect (getOrderById)",response);

                    return response["data"];
                })
            );
    }

    getOrderGroupsById(orderId: string): Observable<any>
    {
        let orderService = this._apiServer.settings.apiServer.orderService;
        let accessToken = "accessToken";

        const header = {  
            headers: new HttpHeaders().set("Authorization", `Bearer ${accessToken}`)
        };

        return this._httpClient.get<any>(orderService + '/ordergroups/' + orderId, header).pipe(
            catchError(() =>
                // Return false
                of(false)
            ),
            switchMap(async (response: any) => {
                this._logging.debug("Response from Payment Redirect (getOrderGroupsById)",response);

                return response["data"];
            })
        );
    }

    getStoreById(id: string): Observable<Store>
    {
        let productService = this._apiServer.settings.apiServer.productService;
        let accessToken = "accessToken";

        const header = {
            headers: new HttpHeaders().set("Authorization", `Bearer ${accessToken}`),
        };
        
        return this._httpClient.get<Store>(productService + '/stores/' + id , header)
        .pipe(
            map((response) => {
                this._logging.debug("Response from StoresService (getStoreById)",response);
                this._store.next(response["data"]);

                return response["data"];
            })
        )
    }
}