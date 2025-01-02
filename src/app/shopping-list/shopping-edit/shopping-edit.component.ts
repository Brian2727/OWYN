import {Component, ElementRef, ViewChild,OnInit,OnDestroy} from '@angular/core';
import {ShoppingListService} from "../ShoppingList.Service";
import {Ingredient} from "../../shared/ingredient.model";
import {FormsModule, NgForm} from "@angular/forms";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('f') slForm!: NgForm;
  subscription!: Subscription;
  editMode = false;
  editIndex!: number;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
        (index: number) => {
          this.slForm.setValue({

            name: this.shoppingListService.getIngredients()[index].name,
            description: this.shoppingListService.getIngredients()[index].description,
            amount: this.shoppingListService.getIngredients()[index].amount
          })
          this.editMode = true
          this.editIndex = index
        }
    )
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onAddIngredient(form: NgForm) {
    const val = form.value;
    let ingredient = new Ingredient(val.name, val.description,val.amount);
    if (this.editMode) {
      console.log("update")
      this.shoppingListService.updateIngredient(this.editIndex,ingredient);
      this.editMode = false;
      this.slForm.reset();
    }
    else {
      console.log("add")
      this.shoppingListService.addIngredient(ingredient);
      this.slForm.reset();
    }

  }
  onDelete() {
    this.shoppingListService.deleteIngredient(this.editIndex);
    this.slForm.reset();
    this.editMode = false;
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
}
