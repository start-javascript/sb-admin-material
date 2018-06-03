import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-snack-bar',
    templateUrl: './snack-bar.component.html',
    styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {
    constructor(public snackBar: MatSnackBar) {}

    openSnackBar() {
        this.snackBar.openFromComponent(PizzaPartyComponent, {
            duration: 500
        });
    }

    ngOnInit() {}
}

@Component({
    selector: 'app-pizza-party',
    template: `
        <span class="example-pizza-party">
            Pizza party!!! 🍕
        </span>
    `,
    styles: [`.example-pizza-party { color: hotpink; }`]
})
export class PizzaPartyComponent {}
