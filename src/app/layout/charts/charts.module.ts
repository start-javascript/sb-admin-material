import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';

@NgModule({
    imports: [CommonModule, ChartsRoutingModule, Ng2Charts, MatCardModule, MatGridListModule],
    declarations: [ChartsComponent]
})
export class ChartsModule {}
