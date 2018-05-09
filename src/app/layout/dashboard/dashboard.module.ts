import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [CommonModule, DashboardRoutingModule],
    declarations: [DashboardComponent]
})
export class DashboardModule {}
