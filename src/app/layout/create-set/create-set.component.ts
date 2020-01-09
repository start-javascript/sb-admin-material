import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
    selector: 'app-create-set',
    templateUrl: './create-set.component.html',
    styleUrls: ['./create-set.component.scss']
})
export class CreateSetComponent implements OnInit {
    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
