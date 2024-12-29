import { Component } from '@angular/core';
import { Recipe } from "../recipe.model";
import {RecipeItemComponent} from "../recipe-item/recipe-item.component";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeItemComponent
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [];
  selectedRecipe = new Recipe("Spaghetti Carbonara", "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.", "images/spaghetti-carbonara.jpg");

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeSelected.subscribe(recipe => {
        this.selectedRecipe = recipe;
    })
  }

  getSelectedRecipe(){

  }

}
