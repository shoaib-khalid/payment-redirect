import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { PaymentRedirectComponent } from './payment-redirect.component';
import { paymentRedirectRoutes } from './payment-redirect.routing';

@NgModule({
    declarations: [
        PaymentRedirectComponent,
    ],
    imports     : [
        RouterModule.forChild(paymentRedirectRoutes),
        SharedModule
    ]
})
export class PaymentRedirectModule
{
}
