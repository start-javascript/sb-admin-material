import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';
import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';

@NgModule({
    imports: [CommonModule, GridRoutingModule, FlexLayoutModule, MatCardModule],
    declarations: [GridComponent]
})
export class GridModule {}
