import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgButtonComponent } from './ng-button.component';

describe('NgButtonComponent', () => {
  let component: NgButtonComponent;
  let fixture: ComponentFixture<NgButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgButtonComponent]
    });
    fixture = TestBed.createComponent(NgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
