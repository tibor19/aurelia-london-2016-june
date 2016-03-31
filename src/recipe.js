import {inject} from 'aurelia-framework';

import {RecipeService} from 'services/recipe-service';

@inject(RecipeService)
export class Recipe{
    constructor(recipeService){
        // super();
        
        this.recipeService = recipeService;
    }
    
    activate(params){
        return this.recipeService
            .getRecipe(params.id)
            .then(r => this.recipe = r);
    }
    
}