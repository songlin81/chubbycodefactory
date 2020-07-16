import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolCounterComponent } from './tool-counter.component';

describe('ToolCounterComponent', () => {
  let component: ToolCounterComponent;
  let fixture: ComponentFixture<ToolCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
