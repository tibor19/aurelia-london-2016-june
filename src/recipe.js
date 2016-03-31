import {RecipeService} from 'services/recipe-service';

export class Recipe{
    constructor(){
        // super();
        
        this.recipeService = new RecipeService();
    }
    
    activate(params){
        return this.recipeService
            .getRecipe(params.id)
            .then(r => this.recipe = r);
    }
    
}