import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgInputComponent } from './ng-input.component';

describe('NgInputComponent', () => {
  let component: NgInputComponent;
  let fixture: ComponentFixture<NgInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgInputComponent]
    });
    fixture = TestBed.createComponent(NgInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
