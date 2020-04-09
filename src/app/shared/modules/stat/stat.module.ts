import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [CommonModule, MatCardModule, MatGridListModule, MatIconModule],
    declarations: [StatComponent],
    exports: [StatComponent]
})
export class StatModule {}
