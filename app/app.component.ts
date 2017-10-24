import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="row">
      <h1>Recipes!</h1>
    </div>
    <div class="row">
      <ul class="list-group">
        <li class="list-group-item" *ngFor="let theRecipe of recipes"
        [class.selected]="theRecipe === selectedRecipe"
        (click)="onSelect(theRecipe)">
          {{theRecipe.name}}
        </li>
      </ul>
    </div>
    <div *ngIf="selectedRecipe">
      <div class="row">
        <div class="col-3">
          <h4>Ingredients:</h4>
        </div>
        <div class="col-9">
          <h4>Steps:</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <ul class="list-group">
            <li class="list-group-item" *ngFor="let theIngredient of selectedRecipe.ingredients">
              {{theIngredient}}
            </li>
          </ul>
        </div>
        <div class="col-9">
          <ol class="list-group">
            <li class="list-group-item" *ngFor="let theStep of selectedRecipe.steps">
              {{theStep}}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  recipes = RECIPES;

  selectedRecipe: Recipe;

  onSelect(theRecipe: Recipe): void {
   this.selectedRecipe = theRecipe;
  }
}

export class Recipe {
  constructor(public name: string, public ingredients: string[], public steps: string[]) {}
}

const RECIPES: Recipe[] = [
  new Recipe("Cookies", ["Flour", "Sugar", "Brown Sugar", "Eggs", "Butter", "Salt", "Baking Soda", "Vanilla", "Chocolate Chips"], ["In a medium sized bowel mix flour, baking soda, and salt. Set aside.", "In a large bowl mix butter, egg, vanilla, and sugars.", "Slowly combine the flour mixture into the large bowl.", "Add chocolate chips and bake at 350 for 9-12 minutes or until golden brown."]),
  new Recipe("Yellow Thai Curry", ["Chicken", "Curry Paste", "Coconut Milk", "Curry Paste (Mae Ploy)", "Onion", "Carrots/Parsnips", "Potatos", "Fish Sauce (optional)"], ["Saute onions in olive oil until translucent.", "Toss in chicken and cook until white.", "Add yellow curry paste.", "Add coconut milk.", "Bring mixture up to heat and toss in potatos and carrots.", "For additional flavor add a few drops of fish sauce.", "Cook for 25 minutes or until potatoes are tender."])
];
