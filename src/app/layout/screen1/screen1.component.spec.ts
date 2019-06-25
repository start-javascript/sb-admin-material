import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen1Component } from './screen1.component';

describe('Screen1Component', () => {
  let component: Screen1Component;
  let fixture: ComponentFixture<Screen1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
