import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../recipe-book/recipe.service";
import {Recipe} from "../recipe-book/recipe.model";


@Injectable({
  providedIn: 'root', // This registers the service globally
})
export class DataStorageService {
  recipes!: Recipe[];

  constructor(private http: HttpClient, private recipesService: RecipeService) {

  }
  saveRecipes() {
    this.recipes = this.recipesService.getRecipes()

    this.http.put('https://angularecipe-default-rtdb.firebaseio.com/recipes.json', this.recipes)
      .subscribe(
        response => {
          console.log(response);
        });
  }
}
