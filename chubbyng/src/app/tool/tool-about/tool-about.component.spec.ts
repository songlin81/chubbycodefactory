import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolAboutComponent } from './tool-about.component';

describe('ToolAboutComponent', () => {
  let component: ToolAboutComponent;
  let fixture: ComponentFixture<ToolAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
