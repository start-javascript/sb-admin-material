import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent {
    isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
        Breakpoints.Handset
    );
    constructor(private breakpointObserver: BreakpointObserver) {}
}
