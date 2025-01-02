import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {

   recipeSelected = new EventEmitter<Recipe>();


   private recipes: Recipe[] = [
     new Recipe(
       'Grilled Chicken',
       'Tender and flavorful grilled chicken marinated in lemon, herbs, and olive oil.',
       '/assets/images/grilled_chicken.jpg',
       [
         new Ingredient('Boneless, skinless chicken breasts','High-protein source for a satisfying meal.', 4 ),
         new Ingredient('Olive oil', 'Healthy fat for marinade and cooking.', 2 ),
     new Ingredient('Fresh lemon zest', 'Adds bright citrus flavor to the chicken.', 1),
    new Ingredient('Lemon juice', 'Marinade base for tanginess and tenderness.', 4)
]
),
  new Recipe(
  'Vegetable Stir-Fry',
  'Quick and easy stir-fry with colorful veggies.',
  '/assets/images/vegetable_stir_fry.jpg',
  [
    new Ingredient('Broccoli florets', 'Rich in vitamins A and C.',2 ),
  new Ingredient('Carrots', 'Adds natural sweetness and beta-carotene.', 2),
  new Ingredient('Bell peppers (mixed colors)', 'Vibrant color and crisp texture.',2 ),
  new Ingredient('Garlic cloves', 'Enhances flavor with a punch of umami.',2 )
]
),
  new Recipe(
  'Spaghetti Aglio e Olio',
  'Classic Italian spaghetti with garlic and olive oil.',
  '/assets/images/spaghetti_aglio_e_olio.jpg',
  [
    new Ingredient('Spaghetti pasta', 'Long, thin strands for a classic Italian dish.', 12),
  new Ingredient('Olive oil', 'Rich in healthy fats and essential nutrients.', 2),
  new Ingredient('Garlic cloves (6)', '(Minced) Adds aroma and depth of flavor.',2 ),
  new Ingredient('Red pepper flakes', 'Optional: Spicy kick and vibrant color.', 3 )
]
),
  new Recipe(
  'Vegetable Lasagna',
  'Hearty and comforting layered lasagna with seasonal veggies.',
  '/assets/images/vegetable_lasagna.jpg',
  [
    new Ingredient('Lasagna noodles', 'Wide, flat pasta for layers.', 12),
  new Ingredient('Ricotta cheese', 'Creamy and mild, perfect for lasagna filling.', 16),
  new Ingredient('Mozzarella cheese (shredded)', 'Melts smoothly and adds gooey texture.',2 )
]
),
  new Recipe(
  'Chicken Fajitas',
  'Sizzling skillet of sautéed chicken with colorful bell peppers and onions.',
  '/assets/images/chicken_fajitas.jpg',
  [
    new Ingredient('Boneless, skinless chicken breasts or thighs','Versatile and flavorful protein.', 2),
  new Ingredient('Bell peppers (mixed colors)', 'Add sweetness and vibrant color.', 6),
  new Ingredient('Onion', 'Sweetens the dish and adds depth of flavor.', 1)
  ])

    ]

   getRecipes(){
     return this.recipes.slice();
   }

}
