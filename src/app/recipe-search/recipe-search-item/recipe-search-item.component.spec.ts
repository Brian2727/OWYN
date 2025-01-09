import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSearchItemComponent } from './recipe-search-item.component';

describe('RecipeSearchItemComponent', () => {
  let component: RecipeSearchItemComponent;
  let fixture: ComponentFixture<RecipeSearchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeSearchItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
