import {recipe} from '../../data/recipe';

export class RecipeService{
    
    getRecipe(id){
        console.log('Getting recipe ' + id);
        return Promise.resolve(recipe);            
    }
}