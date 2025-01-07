import {ChangeDetectorRef, Component} from '@angular/core';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Recipe} from "../recipe.model";


@Component({
  selector: 'app-recipe-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent {
  id!: number;
  editMode = false;
  recipeForm!: FormGroup;
  recipeIngredientsForms!: FormArray;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute,private router: Router,private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.route.params.subscribe(
        (params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
    )
    this.recipeService.recipesChanged.subscribe(
        (id: number) => {
          this.id = id;
          this.editMode = true;
          this.initForm();
        }
    )
  }

  private initForm() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    let recipeIngredients: FormArray<any>;
    // @ts-ignore
    recipeIngredients = new FormArray([]);
    console.log(this.editMode)
    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipeImagePath = recipe.imagePath;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name,Validators.required),
              'amount': new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/[1-9]+[0-9]*$/)]),
              'description': new FormControl(ingredient.description,Validators.required)
            })
          )
        }
        this.recipeIngredientsForms = recipeIngredients;
      }

    }
    else{

      recipeIngredients.push(
        new FormGroup({
              'name': new FormControl(),
              'amount': new FormControl(),
              'description': new FormControl()
            }))
      this.recipeIngredientsForms= recipeIngredients
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'imagePath': new FormControl(recipeImagePath,Validators.required),
      'ingredients': recipeIngredients
    })
    console.log(this.recipeForm)
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
        new FormGroup({
          'name': new FormControl(),
          'amount': new FormControl(),
          'description': new FormControl()
        })
    )
    this.recipeIngredientsForms = <FormArray>this.recipeForm.get('ingredients')
    console.log(this.recipeForm)

  }

  onSubmit() {
    const recipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients'])

    if (this.editMode) {
      this.recipeService.updateRecipe(recipe, this.id);
      this.router.navigate(['recipesBook', this.id]).then(r => console.log(r));
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }

  }

}
