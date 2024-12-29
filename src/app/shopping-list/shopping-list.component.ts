import { Component,OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {IngredientComponent} from "./ingredient/ingredient.component";
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {ShoppingListService} from "./ShoppingList.Service";

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [
    IngredientComponent,
    ShoppingEditComponent
  ],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',

})
export class ShoppingListComponent {

  public ingredients: Ingredient[] = [];


  constructor(private shoppingListService: ShoppingListService) {

  }
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()

    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

}
