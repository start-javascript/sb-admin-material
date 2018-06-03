import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetOverviewComponent } from './bottom-sheet-overview.component';

describe('BottomSheetOverviewComponent', () => {
    let component: BottomSheetOverviewComponent;
    let fixture: ComponentFixture<BottomSheetOverviewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BottomSheetOverviewComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BottomSheetOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
