import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DraftnewsPage } from './draftnews.page';

describe('DraftnewsPage', () => {
  let component: DraftnewsPage;
  let fixture: ComponentFixture<DraftnewsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftnewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
