import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartsComponent } from './barcharts.component';

describe('BarchartsComponent', () => {
  let component: BarchartsComponent;
  let fixture: ComponentFixture<BarchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
