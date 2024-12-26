import { Component } from '@angular/core';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";

@Component({
  selector: 'app-recipe-book',
  standalone: true,
  imports: [
    RecipeListComponent,
    RecipeDetailComponent
  ],
  templateUrl: './recipe-book.component.html',
  styleUrl: './recipe-book.component.css'
})
export class RecipeBookComponent {

}
