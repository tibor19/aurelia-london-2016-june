import {recipe} from '../data/recipe';

export class Recipe{
    constructor(){
        // super();
        
        this.recipe = recipe;
    }
    
    activate(params){
        console.log(params);
    }
    
}