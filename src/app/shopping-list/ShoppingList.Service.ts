import { Ingredient } from "../shared/ingredient.model";
import {Injectable,EventEmitter} from "@angular/core";

@Injectable()
export class ShoppingListService {


  ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
      new Ingredient("Flour", "Fine white powder made from ground wheat", 500),
      new Ingredient("Sugar", "Sweet crystalline substance", 200),
      new Ingredient("Butter", "Rich dairy product used for cooking and baking", 250),
      new Ingredient("Milk", "White liquid rich in nutrients", 1000),
      new Ingredient("Salt", "Fine grains used to enhance flavor", 10),
      new Ingredient("Eggs", "Fresh chicken eggs, high in protein", 6),
      new Ingredient("Baking Powder", "Leavening agent for baked goods", 15),
      new Ingredient("Vanilla Extract", "Liquid flavoring from vanilla beans", 5),
      new Ingredient("Chocolate Chips", "Small pieces of chocolate for desserts", 150),
      new Ingredient("Cinnamon", "Aromatic spice from bark of cinnamon trees", 10)
  ]

  getIngredients(){

      return this.ingredients;

  }

  getIngredientByName(name:string){

    return this.ingredients.filter(ingredient => ingredient.name == name);

  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
