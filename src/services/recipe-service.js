import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class RecipeService{
    // static inject = [HttpClient];
    constructor(http){
        this.http = http;
    }
    
    
    getRecipe(id){
        console.log('Getting recipe ' + id);
        return this.http.get('/data/recipe.json')
                        .then(r => r.content);
    }
    
    saveRecipe(recipe){
        return this.http.put('/data/recipe.json', {data : recipe});
    }
}