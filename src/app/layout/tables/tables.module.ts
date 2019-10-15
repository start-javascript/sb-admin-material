import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';

@NgModule({
    imports: [
        CommonModule,
        TablesRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule
    ],
    declarations: [TablesComponent]
})
export class TablesModule {}
