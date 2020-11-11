import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtextboxComponent } from './searchtextbox.component';

describe('SearchtextboxComponent', () => {
  let component: SearchtextboxComponent;
  let fixture: ComponentFixture<SearchtextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchtextboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchtextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
