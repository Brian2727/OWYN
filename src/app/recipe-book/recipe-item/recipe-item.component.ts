import {Component, Input, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import EventEmitter from "node:events";
import {RecipeService} from "../recipe.service";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input({required:true}) recipe!: Recipe;
  isRecipeSelected: boolean = false;
  @Input() index!: number;
  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(){
    this.recipeService.recipeSelected.subscribe(recipe => {
        this.isRecipeSelected = recipe.name === this.recipe.name;
    })
  }

  onSelectedRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
