import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchnewsPage } from './searchnews.page';

describe('SearchnewsPage', () => {
  let component: SearchnewsPage;
  let fixture: ComponentFixture<SearchnewsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchnewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
