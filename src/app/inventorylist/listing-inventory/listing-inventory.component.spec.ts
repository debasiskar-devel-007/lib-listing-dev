import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingInventoryComponent } from './listing-inventory.component';

describe('ListingInventoryComponent', () => {
  let component: ListingInventoryComponent;
  let fixture: ComponentFixture<ListingInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
