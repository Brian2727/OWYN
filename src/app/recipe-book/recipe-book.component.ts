import { Component } from '@angular/core';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeService} from "./recipe.service";
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipe-book',
  standalone: true,
  imports: [
    RecipeListComponent,
    RecipeDetailComponent
  ],
  templateUrl: './recipe-book.component.html',
  styleUrl: './recipe-book.component.css'
})
export class RecipeBookComponent {
  recipeSelected: boolean = false;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipeSelected = true;
      }
    )
  }
}
