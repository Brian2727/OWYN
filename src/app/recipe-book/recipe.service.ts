import {Injectable, EventEmitter, Output} from '@angular/core';
import { Recipe } from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root', // This registers the service globally
})
export class RecipeService {

   @Output() recipesChanged = new EventEmitter<Recipe[]>();

   recipeSelected = new EventEmitter<Recipe>();

   constructor(private http: HttpClient) {
   }

  private recipes:Recipe[] = []

   getRecipes(){
     console.log(this.recipes)
     return this.recipes.slice();
   }

   getRecipeById(id:number){
     return this.recipes[id];
   }

  addRecipe(newRecipe: Recipe) {
    this.recipes = [...this.recipes, newRecipe];
    //this.recipes.push(newRecipe);
    this.recipesChanged.emit(this.recipes.slice());
  }

  updateRecipe(recipe: Recipe, index: number) {
    this.recipes[index] = recipe;
    this.recipesChanged.emit(this.recipes.slice());
  }

  setRecipes(response: Recipe[]) {
    this.recipes = response
    this.recipesChanged.emit(this.recipes.slice())
  }

  saveToDb() {
    this.http.put('https://angularecipe-default-rtdb.firebaseio.com/recipes.json', this.recipes)
      .subscribe(
        response => {
            console.log(response)
        });
  }


  fetchRecipes() {
    this.http
      .get<Recipe[]>('https://angularecipe-default-rtdb.firebaseio.com/recipes.json')
      .pipe(
      map(recipes =>{
        return recipes.map(recipe => {
          return {...recipe,ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      })
    ).subscribe(
      response => {
        this.recipes = response
        this.recipesChanged.emit(this.recipes.slice())
      }
    )


    return this.recipes.slice()
  }
}
