import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonScriptFixComponent } from './non-script-fix.component';

describe('NonScriptFixComponent', () => {
  let component: NonScriptFixComponent;
  let fixture: ComponentFixture<NonScriptFixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonScriptFixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonScriptFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
