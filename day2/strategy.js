class GameStrategy{
    applyStrategy()
    {
        throw new Error("immplement this method"); 
    }
}
class Attack extends GameStrategy 
{
    applyStrategy(){
        console.log("NOW the team is attacking .....");
    }
}
class Defense extends GameStrategy 
{
    applyStrategy(){
        console.log("NOW the team is coming back to defense .....");
    }
}
class Regular extends GameStrategy 
{
    applyStrategy(){
        console.log("NOW we playing the normal playing .....");
    }
}
class FIFAGame {
    constructor(strategy)
    {
        this.strategy = strategy; 
    }
    setStrategy(strategy)
    {
        this.strategy= strategy; 
    }
    applyCurrentStrategy()
    {
        this.strategy.applyStrategy();
    }
}

let attacking = new Attack(); 
let defense = new Defense(); 
let regular = new Regular();

let fifa = new FIFAGame(regular);

fifa.applyCurrentStrategy();

fifa.setStrategy(attacking);
fifa.applyCurrentStrategy(); 

fifa.setStrategy(defense);
fifa.applyCurrentStrategy(); 
