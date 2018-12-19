import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LastActivityComponent } from './last-activity.component';

const routes: Routes = [
    {
        path: '',
        component: LastActivityComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LastActivityRoutingModule {}
