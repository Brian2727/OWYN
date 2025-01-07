import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../recipe-book/recipe.service";
import {Recipe} from "../recipe-book/recipe.model";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root', // Makes the service globally available
})
export class DataStorageService {
  recipes!: Recipe[];

  constructor(private http: HttpClient, private recipesService: RecipeService) {

  }
  saveRecipes() {
    this.recipes = this.recipesService.getRecipes()
    this.recipesService.recipesChanged.subscribe(index => {
      this.recipes = this.recipesService.getRecipes()
    })
    console.log(this.recipes)
    this.http.put('https://angularecipe-default-rtdb.firebaseio.com/recipes.json', this.recipes)
      .subscribe(
        response => {
            console.log(response)
        });
  }

  fetchRecipes() {
    this.http.get<Recipe[]>('https://angularecipe-default-rtdb.firebaseio.com/recipes.json').pipe(
      map(recipes =>{
        return recipes.map(recipe => {
          return {...recipe,ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      })
    ).subscribe(
      response => {
        this.recipesService.setRecipes(response)
      }
    )
  }
}
