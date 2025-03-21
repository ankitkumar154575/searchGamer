import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkRequestComponent } from './bulk-request.component';

describe('BulkRequestComponent', () => {
  let component: BulkRequestComponent;
  let fixture: ComponentFixture<BulkRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
