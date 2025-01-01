import {Component, ElementRef, ViewChild} from '@angular/core';
import {ShoppingListService} from "../ShoppingList.Service";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameRef!: ElementRef;
  @ViewChild('descriptionInput') descriptionRef!: ElementRef;
  @ViewChild('amountInput') amountRef!: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  addIngredient(event: Event) {
    event.preventDefault();
    let ingredient = new Ingredient(this.nameRef.nativeElement.value, this.descriptionRef.nativeElement.value,this.amountRef.nativeElement.value);
    this.shoppingListService.addIngredient(ingredient)
  }

}
