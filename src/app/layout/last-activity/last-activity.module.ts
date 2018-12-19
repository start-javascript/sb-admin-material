import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { LastActivityRoutingModule } from './last-activity-routing.module';
import { LastActivityComponent } from './last-activity.component';

@NgModule({
    imports: [
        CommonModule,
        LastActivityRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule
    ],
    declarations: [LastActivityComponent]
})
export class LastActivityModule {}
