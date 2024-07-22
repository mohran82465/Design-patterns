// this abstract method used to force me to immplement in a simple way 

class Pizza {
    getDescription() {
        throw Error("implement the description of the pizza");    }

    cost() {
        throw Error("implement the cost of the pizza");
    }
}
class ToppingDecorator extends Pizza {
    constructor(pizza) {
        super();
        this.pizza = pizza;
    }

    getDescription() {
        return this.pizza.getDescription();
    }

    cost() {
        return this.pizza.cost();
    }
}
//================================================================
// this the two kind of pizza implemented here 
//================================================================
class MargheritaPizza extends Pizza {
    // here implement the abstract methods of the pizza 
    getDescription() {
        return "Margherita Pizza";
    }

    cost() {
        return 8.00;
    }
}

class PepperoniPizza extends Pizza {
    // here implement the abstract methods of the pizza 
    getDescription() {
        return "Pepperoni Pizza";
    }
    
    cost() {
        return 10.00;
    }
}
//================================================================
// this the topping of the pizza implemented here 
//================================================================

/**
  *     NOTE : 
  *     here i am used to add each class form 
  *     the super class and update the Cost and Description
*/

class TomatoTopping extends ToppingDecorator {
    constructor(pizza) {
        super(pizza);
    }
    
    getDescription() {
        return this.pizza.getDescription() + ', Tomato';
    }
    
    cost() {
        return this.pizza.cost() + 0.50;
    }
}

class CheeseTopping extends ToppingDecorator {
    constructor(pizza) {
        super(pizza);
    }
    
    getDescription() {
        return this.pizza.getDescription() + ', Cheese';
    }
    
    cost() {
        return this.pizza.cost() + 1.00;
    }
}
//================================================================
//  Here  i am applying the decorators of the pizza class 
//================================================================


let margherita = new MargheritaPizza(); 
console.log(margherita.getDescription());
console.log("Cost : "+ margherita.cost()+"$");

margherita = new TomatoTopping(margherita);
console.log(margherita.getDescription());
console.log("Cost : "+ margherita.cost()+"$");

margherita = new CheeseTopping(margherita);
console.log(margherita.getDescription());
console.log("Cost : "+ margherita.cost()+"$");

let pepperoni = new PepperoniPizza(); 
console.log(pepperoni.getDescription());
console.log("Cost : "+ pepperoni.cost()+"$");

pepperoni = new TomatoTopping(pepperoni); 
console.log(pepperoni.getDescription());
console.log("Cost : "+ pepperoni.cost()+"$");


pepperoni = new CheeseTopping(pepperoni); 
console.log(pepperoni.getDescription());
console.log("Cost : "+ pepperoni.cost()+"$");


/*
    OUTPUT : 
        node decorator.js
        Margherita Pizza
        Cost : 8$
        Margherita Pizza, Tomato
        Cost : 8.5$
        Margherita Pizza, Tomato, Cheese
        Cost : 9.5$
        Pepperoni Pizza
        Cost : 10$
        Pepperoni Pizza, Tomato
        Cost : 10.5$
        Pepperoni Pizza, Tomato, Cheese
        Cost : 11.5$
*/






