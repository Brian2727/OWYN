import { Component } from '@angular/core';
import {DropdownDirective} from "../../shared/dropdown.directive";
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {IngredientComponent} from "../../shopping-list/ingredient/ingredient.component";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../shopping-list/ShoppingList.Service";

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [
    DropdownDirective,
    IngredientComponent
  ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  recipe!: Recipe;

  constructor(private recipeService: RecipeService,private shoppingListService: ShoppingListService) {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipe = recipe;
      }
    )
  }
  addToShoppingList(ingredients: Ingredient[] ){
    console.log(ingredients);
    this.shoppingListService.addIngredients(ingredients);
  }
}
