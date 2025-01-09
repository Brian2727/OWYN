import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSearchBarComponent } from './recipe-search-bar.component';

describe('RecipeSearchBarComponent', () => {
  let component: RecipeSearchBarComponent;
  let fixture: ComponentFixture<RecipeSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeSearchBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
