import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';

@NgModule({
    imports: [CommonModule, ChartsRoutingModule],
    declarations: [ChartsComponent]
})
export class ChartsModule {}
