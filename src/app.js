export class App {
    configureRouter(config, router){
        
        config.map([
            {name: 'default', 
                route:['', 'home'],
                moduleId: './home', 
                nav: true, title: 'Home'}, // settings: {}
            {name: 'weekly-menu', 
                route:['weekly-menu'],
                moduleId: './weekly-menu',
                nav: true, title: 'Weekly Menu'},
            {name: 'recipe',
                route:['recipe/:id'],
                moduleId: './recipe',
                nav: false, title: 'Recipe'}
        ]);        
        this.router = router;
    }
}