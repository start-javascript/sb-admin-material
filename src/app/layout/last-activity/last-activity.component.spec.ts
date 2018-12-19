import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastActivityComponent } from './last-activity.component';

describe('LastActivityComponent', () => {
    let component: LastActivityComponent;
    let fixture: ComponentFixture<LastActivityComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LastActivityComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LastActivityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
