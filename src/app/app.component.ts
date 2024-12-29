import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {RecipeBookComponent} from "./recipe-book/recipe-book.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeListComponent} from "./recipe-book/recipe-list/recipe-list.component";
import {RecipeService} from "./recipe-book/recipe.service";
import {ShoppingListService} from "./shopping-list/ShoppingList.Service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RecipeBookComponent, ShoppingListComponent, RecipeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[RecipeService,ShoppingListService]
})
export class AppComponent {
  title = 'OWYN';

  constructor(recipeService: RecipeService) {
  }
}
