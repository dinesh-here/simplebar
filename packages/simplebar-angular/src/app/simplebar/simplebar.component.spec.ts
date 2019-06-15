import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplebarComponent } from './simplebar.component';

describe('SimplebarComponent', () => {
  let component: SimplebarComponent;
  let fixture: ComponentFixture<SimplebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
