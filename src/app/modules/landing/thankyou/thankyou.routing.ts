import { Route } from '@angular/router';
import { ThankYouComponent } from 'app/modules/landing/thankyou/thankyou.component';

export const thankyouRoutes: Route[] = [
    {
        path     : ':status/:paymentType/:completionStatus/:serviceType',
        component: ThankYouComponent
    },
    {
        path        : '',
        pathMatch   : 'full',
        redirectTo  : '/not-found'
    }
];
