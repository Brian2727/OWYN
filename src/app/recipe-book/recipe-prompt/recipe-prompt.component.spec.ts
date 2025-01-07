import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipePromptComponent } from './recipe-prompt.component';

describe('RecipePromptComponent', () => {
  let component: RecipePromptComponent;
  let fixture: ComponentFixture<RecipePromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipePromptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
