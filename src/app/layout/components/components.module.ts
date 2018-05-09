import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';

@NgModule({
    imports: [CommonModule, ComponentsRoutingModule],
    declarations: [ComponentsComponent]
})
export class ComponentsModule {}
