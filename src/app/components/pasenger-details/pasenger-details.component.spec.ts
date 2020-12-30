import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasengerDetailsComponent } from './pasenger-details.component';

describe('PasengerDetailsComponent', () => {
  let component: PasengerDetailsComponent;
  let fixture: ComponentFixture<PasengerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasengerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasengerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
