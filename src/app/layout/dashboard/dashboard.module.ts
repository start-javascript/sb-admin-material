import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';

import { StatModule } from '../../shared/modules/stat/stat.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatGridListModule,
        StatModule,
        MatCardModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule {}
