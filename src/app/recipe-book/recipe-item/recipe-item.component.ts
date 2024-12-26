import {Component, Input} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input({required:true}) recipe!: Recipe;
}
