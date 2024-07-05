import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListdraftnewsPage } from './listdraftnews.page';

describe('ListdraftnewsPage', () => {
  let component: ListdraftnewsPage;
  let fixture: ComponentFixture<ListdraftnewsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdraftnewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
