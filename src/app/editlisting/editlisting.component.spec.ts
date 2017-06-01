/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EDITListingComponent } from './editlisting.component';

describe('EDITListingComponent', () => {
  let component: EDITListingComponent;
  let fixture: ComponentFixture<EDITListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDITListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDITListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
