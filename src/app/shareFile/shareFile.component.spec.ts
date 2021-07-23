/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShareFileComponent } from './shareFile.component';

describe('ShareFileComponent', () => {
  let component: ShareFileComponent;
  let fixture: ComponentFixture<ShareFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
