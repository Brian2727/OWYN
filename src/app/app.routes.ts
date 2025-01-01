import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeBookComponent} from "./recipe-book/recipe-book.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {path: '',redirectTo: '/shoppingList' ,pathMatch: 'full' },
  {path:'shoppingList', component: ShoppingListComponent},
  {path:'recipesBook', component: RecipeBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
