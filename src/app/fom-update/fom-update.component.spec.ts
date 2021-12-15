import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FomUpdateComponent } from './fom-update.component';

describe('FomUpdateComponent', () => {
  let component: FomUpdateComponent;
  let fixture: ComponentFixture<FomUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FomUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FomUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
