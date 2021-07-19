import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContactFormComponent } from './dynamic-contact-form.component';

describe('DynamicContactFormComponent', () => {
  let component: DynamicContactFormComponent;
  let fixture: ComponentFixture<DynamicContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicContactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
