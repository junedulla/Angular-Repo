import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingDataComponent } from './rating-data.component';

describe('RatingDataComponent', () => {
  let component: RatingDataComponent;
  let fixture: ComponentFixture<RatingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
