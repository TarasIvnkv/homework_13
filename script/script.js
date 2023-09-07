class Bulka {
    constructor(name, size){
        this.name = name;
        this.size = size;
        this.ingredients = [`cutlet`, `salada`, `tomato`];
        this.setAdditionalIngredients = function(ingredients){
            this.ingredients = this.ingredients.concat(ingredients);
        }
        this.getInfo = function(){
            return `Name: ${this.name}\nSize: ${this.size}\nIngredients: ${this.ingredients.join(', ')}`;
        }
    }
}

let Humburger = new Bulka(`Humburger`, `small`);
let Cheeseburger = new Bulka(`Cheeseburger`, `big`);

Humburger.setAdditionalIngredients([`avocado`, `mushrooms`]);
Cheeseburger.setAdditionalIngredients([`onion`, `black pepper`])

console.log(Humburger.getInfo());
console.log(Cheeseburger.getInfo());