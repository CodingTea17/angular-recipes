import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Recipes!</h1>
  <ul>
    <li *ngFor="let theRecipe of recipes">
      {{theRecipe.name}}
      <ol>
        <li *ngFor="let theStep of theRecipe.steps">
          {{theStep}}
        </li>
      </ol>
    </li>
  </ul>
  `
})

export class AppComponent {
  recipes = RECIPES;
}

export class Recipe {
  constructor(public name: string, public ingredients: string[], public steps: string[]) {}
}

const RECIPES: Recipe[] = [
  new Recipe("Cookies", ["Flour", "Sugar", "Brown Sugar", "Eggs", "Butter", "Salt", "Baking Soda", "Vanilla", "Chocolate Chips"], ["In a medium sized bowel mix flour, baking soda, and salt. Set aside.", "In a large bowl mix butter, egg, vanilla, and sugars.", "Slowly combine the flour mixture into the large bowl.", "Add chocolate chips and bake at 350 for 9-12 minutes or until golden brown."]),
  new Recipe("Yellow Thai Curry", ["Chicken", "Curry Paste", "Coconut Milk", "Curry Paste (Mae Ploy)", "Onion", "Carrots/Parsnips", "Potatos", "Fish Sauce (optional)"], ["Saute onions in olive oil until translucent.", "Toss in chicken and cook until white.", "Add yellow curry paste.", "Add coconut milk.", "Bring mixture up to heat and toss in potatos and carrots.", "For additional flavor add a few drops of fish sauce.", "Cook for 25 minutes or until potatoes are tender."])
];
