import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptFixComponent } from './script-fix.component';

describe('ScriptFixComponent', () => {
  let component: ScriptFixComponent;
  let fixture: ComponentFixture<ScriptFixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptFixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
