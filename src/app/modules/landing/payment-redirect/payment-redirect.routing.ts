import { Route } from '@angular/router';
import { PaymentRedirectComponent } from './payment-redirect.component';

export const paymentRedirectRoutes: Route[] = [
    {
        // path     : ':name/:email/:phone/:amount/:hash/:status_id/:order_id/:transaction_id/:msg',
        path     : '',
        component: PaymentRedirectComponent
    }
];
