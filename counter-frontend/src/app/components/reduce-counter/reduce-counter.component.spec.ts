import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduceCounterComponent } from './reduce-counter.component';

describe('ReduceCounterComponent', () => {
  let component: ReduceCounterComponent;
  let fixture: ComponentFixture<ReduceCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReduceCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduceCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
