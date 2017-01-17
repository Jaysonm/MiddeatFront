/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RestoListComponent } from './resto-list.component';

describe('RestoListComponent', () => {
  let component: RestoListComponent;
  let fixture: ComponentFixture<RestoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
