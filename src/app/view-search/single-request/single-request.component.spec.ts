import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRequestComponent } from './single-request.component';

describe('SingleRequestComponent', () => {
  let component: SingleRequestComponent;
  let fixture: ComponentFixture<SingleRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
