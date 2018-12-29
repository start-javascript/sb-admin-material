import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule as FormModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatStepperModule,
  MatButtonModule,
} from '@angular/material';

import { CreateSetModuleRoutingModule } from './create-set-routing.module';
import { CreateSetComponent } from './create-set.component';

@NgModule({
  imports: [
    CommonModule,
    CreateSetModuleRoutingModule,
    MatAutocompleteModule,
    FormModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    MatStepperModule,
    MatButtonModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false })
  ],
  declarations: [CreateSetComponent]
})
export class CreateSetModule {}
