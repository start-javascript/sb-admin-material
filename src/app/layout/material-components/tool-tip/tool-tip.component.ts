import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material';

@Component({
    selector: 'app-tool-tip',
    templateUrl: './tool-tip.component.html',
    styleUrls: ['./tool-tip.component.scss']
})
export class ToolTipComponent implements OnInit {
    positionOptions: TooltipPosition[] = [
        'after',
        'before',
        'above',
        'below',
        'left',
        'right'
    ];
    position = new FormControl(this.positionOptions[0]);

    constructor() {}

    ngOnInit() {}
}
