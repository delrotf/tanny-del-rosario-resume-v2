import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CspComponent } from './csp.component';

describe('CspComponent', () => {
  let component: CspComponent;
  let fixture: ComponentFixture<CspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
