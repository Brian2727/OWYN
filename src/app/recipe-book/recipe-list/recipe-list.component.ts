import { Component } from '@angular/core';
import { Recipe } from "../recipe.model";
import {RecipeItemComponent} from "../recipe-item/recipe-item.component";
import {RecipeService} from "../recipe.service";
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeItemComponent,
    RouterOutlet
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [];
  selectedRecipe!: Recipe

  constructor(private recipeService: RecipeService,) {

  }

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipesChanged.subscribe(
        (index:number) => {
          this.recipes = this.recipeService.getRecipes();
        }
    )
  }

  getSelectedRecipe(){

  }

}
