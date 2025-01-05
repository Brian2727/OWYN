import { Component } from '@angular/core';
import {DropdownDirective} from "../../shared/dropdown.directive";
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {IngredientComponent} from "../../shopping-list/ingredient/ingredient.component";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../shopping-list/ShoppingList.Service";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [
    DropdownDirective,
    IngredientComponent,
    RouterLink
  ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  index!:number
  recipe!: Recipe;

  constructor(private recipeService: RecipeService,private shoppingListService: ShoppingListService,private router: ActivatedRoute) {
    router.params.subscribe(params => {
      this.index = params['id'];
      this.recipe = this.recipeService.getRecipeById(this.index);
    })
  }
  ngOnInit(){
    this.recipe = this.recipeService.getRecipeById(this.index);
  }
  addToShoppingList(ingredients: Ingredient[] ){
    console.log(ingredients);
    this.shoppingListService.addIngredients(ingredients);
  }
}
