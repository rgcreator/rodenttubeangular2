import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Audio2Component } from './audio2.component';

describe('Audio2Component', () => {
  let component: Audio2Component;
  let fixture: ComponentFixture<Audio2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Audio2Component]
    });
    fixture = TestBed.createComponent(Audio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
