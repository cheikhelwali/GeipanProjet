import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasDetailComponent } from './cas-detail.component';

describe('CasDetailComponent', () => {
  let component: CasDetailComponent;
  let fixture: ComponentFixture<CasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
