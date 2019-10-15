import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlackPageComponent } from './black-page.component';

const routes: Routes = [
    {
        path: '',
        component: BlackPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlackPageRoutingModule {}
