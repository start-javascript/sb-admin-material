import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';

@NgModule({
    imports: [CommonModule, FormsRoutingModule],
    declarations: [FormsComponent]
})
export class FormsModule {}
