import {Component, Input} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import internal from "node:stream";
import {ShoppingListService} from "../ShoppingList.Service";

@Component({
  selector: 'app-ingredient',
  standalone: true,
  imports: [],
  templateUrl: './ingredient.component.html',
  styleUrl: './ingredient.component.css'
})
export class IngredientComponent {
  @Input({required:true}) index!: number;
  @Input({required:true}) ingredient!: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {

  }

  onIngredientClicked(index: number) {
    console.log(index);
    this.shoppingListService.startedEditing.next(index);
  }
}
