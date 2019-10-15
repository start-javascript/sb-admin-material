import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialComponentsComponent } from './material-components.component';

describe('MaterialComponentsComponent', () => {
    let component: MaterialComponentsComponent;
    let fixture: ComponentFixture<MaterialComponentsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MaterialComponentsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MaterialComponentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
