import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule as FormModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule
} from '@angular/material';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
    imports: [
        CommonModule,
        FormsRoutingModule,
        MatAutocompleteModule,
        FlexLayoutModule,
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
        MatSliderModule
    ],
    declarations: [
        FormsComponent,
        CheckboxComponent,
        DatePickerComponent,
        FormFieldComponent,
        SliderComponent,
        AutoCompleteComponent
    ]
})
export class FormsModule {}
