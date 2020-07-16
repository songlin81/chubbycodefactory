import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolFileComponent } from './tool-file.component';

describe('ToolFileComponent', () => {
  let component: ToolFileComponent;
  let fixture: ComponentFixture<ToolFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
