import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrackingComponent } from './list-tracking.component';

describe('ListTrackingComponent', () => {
  let component: ListTrackingComponent;
  let fixture: ComponentFixture<ListTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
