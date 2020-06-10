import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomdataComponent } from './customdata.component';

describe('CustomdataComponent', () => {
  let component: CustomdataComponent;
  let fixture: ComponentFixture<CustomdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
