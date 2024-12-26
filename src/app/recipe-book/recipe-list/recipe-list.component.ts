import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeItemComponent} from "../recipe-item/recipe-item.component";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeItemComponent
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("Spaghetti Carbonara", "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.", "images/spaghetti-carbonara.jpg"),
    new Recipe("Chicken Alfredo", "Creamy pasta with grilled chicken, parmesan, and a garlic cream sauce.", "images/chicken-alfredo.jpg"),
    new Recipe("Vegetable Stir-Fry", "A mix of fresh vegetables stir-fried with soy sauce, garlic, and ginger.", "images/vegetable-stir-fry.jpg"),
    new Recipe("Beef Tacos", "Ground beef seasoned with Mexican spices, served in taco shells with toppings.", "images/beef-tacos.jpg")
  ];

}
