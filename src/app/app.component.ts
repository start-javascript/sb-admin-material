import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';
    promise1: Promise<number>;
    promise2: Promise<number>;

    emit(promise1: Promise<number>, promise2: Promise<number>) {
        Promise.all([promise1, promise2]).then(
            res => {
                console.log(res);
            },
            err => {
                console.log(err);
            }
        );
    }
}
