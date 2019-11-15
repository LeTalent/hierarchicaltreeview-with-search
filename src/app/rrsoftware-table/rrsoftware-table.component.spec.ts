/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RrsoftwareTableComponent } from './rrsoftware-table.component';

describe('RrsoftwareTableComponent', () => {
  let component: RrsoftwareTableComponent;
  let fixture: ComponentFixture<RrsoftwareTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrsoftwareTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrsoftwareTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
