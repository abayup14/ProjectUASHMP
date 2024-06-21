import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailnewsPage } from './detailnews.page';

describe('DetailnewsPage', () => {
  let component: DetailnewsPage;
  let fixture: ComponentFixture<DetailnewsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailnewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
