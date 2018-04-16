import { Recipe } from './../recipes/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from './../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes : Recipe[] = [
        new Recipe('A test 1 recipe',
                  'test recipe description',
                  'https://vignette.wikia.nocookie.net/theamazingworldofgumball/images/a/ae/Capture_11272013_154033.png/revision/latest/scale-to-width-down/185?cb=20131127235736',
                [
                new Ingredient('Meat',4),
                new Ingredient('Brocoli',1)
                 ]),
        new Recipe('A test 2 recipe',
                  'test recipe description',
                  'https://i0.wp.com/tealnotes.com/wp-content/uploads/2017/11/cheap-meals-cover-image-2-01.png?fit=1811%2C1226&ssl=1',
                  [
                    new Ingredient('Bean',24),
                    new Ingredient('Ketchup',1)
                     ]),
        new Recipe('A test 3 recipe',
                  'test recipe description',
                  'https://cdn.pixabay.com/photo/2018/02/23/17/12/spaghetti-3176060_1280.jpg',
                  [
                    new Ingredient('Bread',1),
                    new Ingredient('Butter',1)
                     ]),
      ];

      constructor(private slService:ShoppingListService){}
      getRecipes(){
          return this.recipes.slice();
      }
      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
    
}