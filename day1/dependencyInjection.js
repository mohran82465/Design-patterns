class Engine {
    start() {
        console.log("start the engine !!! ");

    }
  }
  
  class Car {
    constructor(engine) {
      this.engine = engine;
    }
    start() {
      this.engine.start(); 
    }
  }  

  const engine = new Engine();
  const car = new Car(engine);
  car.start(); 
