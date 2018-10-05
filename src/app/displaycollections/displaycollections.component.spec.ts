import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycollectionsComponent } from './displaycollections.component';

describe('DisplaycollectionsComponent', () => {
  let component: DisplaycollectionsComponent;
  let fixture: ComponentFixture<DisplaycollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaycollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaycollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
