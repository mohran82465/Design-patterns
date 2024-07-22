class Car {
    constructor(builder) {
        this.make = builder.make;
        this.model = builder.model;
        this.year = builder.year;
        this.color = builder.color;
        this.engine = builder.engine;
        this.roof = builder.roof;
        this.gps = builder.gps;
    }

    getDescription() {
        console.log(`Car a ${this.year} ${this.make} ${this.model} `);
    }
}

class CarBuilder {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    setColor(color) {
        this.color = color;
        return this;
    }

    setEngine(engine) {
        this.engine = engine;
        return this;
    }

    setRoof(roof) {
        this.roof = roof;
        return this;
    }

    setGps(gps) {
        this.gps = gps;
        return this;
    }

    build() {
        return new Car(this);
    }
}

// Usage example
let dummyCar = new CarBuilder("BMW", "X6", 2024)
    .setColor("black")
    .setEngine("V8")
    .build();

console.log(dummyCar);
dummyCar.getDescription();
