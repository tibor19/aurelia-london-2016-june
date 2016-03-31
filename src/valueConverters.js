export class CurrencyValueConverter {
    
    toView(value){
        if(value){
            return '$'+value.toString();
        }
    }
    
    // fromView(){
        
    // }
}

export class ImageValueConverter{
    toView(value){
        return `content/images/food/${value}.jpg`;
    }
}