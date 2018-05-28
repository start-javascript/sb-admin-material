import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { StatModule } from '../../shared/modules/stat/stat.module';

@NgModule({
    imports: [CommonModule, DashboardRoutingModule, MatGridListModule, StatModule, MatCardModule],
    declarations: [DashboardComponent]
})
export class DashboardModule {}
