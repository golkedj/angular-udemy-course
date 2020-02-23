import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  recipesUrl: string = 'https://ng-course-recipe-book-golkedj.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.recipesUrl, recipes).subscribe(response => {
      console.log(response);
    });
  }

  fetchRecipes() {
    this.http
      .get<Recipe[]>(this.recipesUrl)
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      }))
      .subscribe(recipes => {
        console.log(recipes);
        this.recipeService.setRecipes(recipes);
      });
  }
}