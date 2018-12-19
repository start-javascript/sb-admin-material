import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSetComponent } from './create-set.component';

describe('FormsComponent', () => {
    let component: CreateSetComponent;
    let fixture: ComponentFixture<CreateSetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreateSetComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateSetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
