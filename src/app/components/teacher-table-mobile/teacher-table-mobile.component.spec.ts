import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTableMobileComponent } from './teacher-table-mobile.component';

describe('TeacherTableMobileComponent', () => {
  let component: TeacherTableMobileComponent;
  let fixture: ComponentFixture<TeacherTableMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherTableMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTableMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
