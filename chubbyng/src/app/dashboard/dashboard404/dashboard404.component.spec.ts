import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard404Component } from './dashboard404.component';

describe('Dashboard404Component', () => {
  let component: Dashboard404Component;
  let fixture: ComponentFixture<Dashboard404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
