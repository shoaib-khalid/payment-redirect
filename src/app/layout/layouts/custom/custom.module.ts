import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseLoadingBarModule } from '@fuse/components/loading-bar';
import { SharedModule } from 'app/shared/shared.module';
import { CustomLayoutComponent } from './custom.component';

@NgModule({
    declarations: [
        CustomLayoutComponent
    ],
    imports     : [
        RouterModule,
        FuseLoadingBarModule,
        SharedModule
    ],
    exports     : [
        CustomLayoutComponent
    ]
})
export class CustomLayoutModule
{
}
