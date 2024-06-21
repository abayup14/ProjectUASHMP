import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddnewsPage } from './addnews.page';

describe('AddnewsPage', () => {
  let component: AddnewsPage;
  let fixture: ComponentFixture<AddnewsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
