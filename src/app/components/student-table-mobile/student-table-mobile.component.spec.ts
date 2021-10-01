import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTableMobileComponent } from './student-table-mobile.component';

describe('StudentTableMobileComponent', () => {
  let component: StudentTableMobileComponent;
  let fixture: ComponentFixture<StudentTableMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTableMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTableMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
