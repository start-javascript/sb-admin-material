import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlackPageRoutingModule } from './black-page-routing.module';
import { BlackPageComponent } from './black-page.component';

@NgModule({
    imports: [CommonModule, BlackPageRoutingModule],
    declarations: [BlackPageComponent]
})
export class BlackPageModule {}
