import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolTipComponent } from './tool-tip.component';

describe('ToolTipComponent', () => {
  let component: ToolTipComponent;
  let fixture: ComponentFixture<ToolTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
