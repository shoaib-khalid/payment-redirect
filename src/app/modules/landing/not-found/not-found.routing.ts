import { Route } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

export const notFoundRoutes: Route[] = [
    {
        // path     : ':name/:email/:phone/:amount/:hash/:status_id/:order_id/:transaction_id/:msg',
        path     : '',
        component: NotFoundComponent
    }
];
