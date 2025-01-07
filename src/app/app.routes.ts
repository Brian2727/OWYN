import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeBookComponent} from "./recipe-book/recipe-book.component";
import {NgModule} from "@angular/core";
import {RecipeEditComponent} from "./recipe-book/recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-book/recipe-detail/recipe-detail.component";

export const routes: Routes = [
  {path: '',redirectTo: '/shoppingList' ,pathMatch: 'full' },
  {path:'shoppingList', component: ShoppingListComponent},
  {path:'recipesBook', component: RecipeBookComponent, children:[
      {path:'new', component: RecipeEditComponent},
      {path:':id', component: RecipeDetailComponent},
      {path:':id/edit', component: RecipeEditComponent},
    ]},
  {path:'', redirectTo: '/shoppingList' ,pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
