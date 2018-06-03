import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialComponentsComponent } from './material-components.component';

const routes: Routes = [
    {
        path: '',
        component: MaterialComponentsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MaterialComponentsRoutingModule {}
