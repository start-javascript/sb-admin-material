import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
    animal: string;
    name: string;

    constructor(public dialog: MatDialog) {}

    ngOnInit() {}

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogOverviewComponent, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
}
