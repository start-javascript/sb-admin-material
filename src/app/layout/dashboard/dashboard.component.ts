import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    tiles = [
        { text: 'Three', cols: 4, rows: 1, color: 'lightpink' },
        { text: 'Three', cols: 4, rows: 1, color: 'lightpink' },
        { text: 'Three', cols: 4, rows: 1, color: 'lightpink' },
        { text: 'Three', cols: 4, rows: 1, color: 'lightpink' }
    ];
    constructor() {}

    ngOnInit() {}
}
