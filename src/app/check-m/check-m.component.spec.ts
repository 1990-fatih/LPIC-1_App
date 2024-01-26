import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMComponent } from './check-m.component';

describe('CheckMComponent', () => {
  let component: CheckMComponent;
  let fixture: ComponentFixture<CheckMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
