import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
    selector: 'app-bottom-sheet-overview',
    templateUrl: './bottom-sheet-overview.component.html',
    styleUrls: ['./bottom-sheet-overview.component.scss']
})
export class BottomSheetOverviewComponent implements OnInit {
    constructor(
        private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewComponent>
    ) {}

    openLink(event: MouseEvent): void {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    }
    ngOnInit() {}
}
