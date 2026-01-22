// Implement the Car class that adheres to the Vehicle interface
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implement the start method for Car
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Create an instance of the Car class
var myCar = new Car("Toyota", "Corolla", 2022);
// Call the start method to verify functionality
console.log("Vehicle Info: ".concat(myCar.year, " ").concat(myCar.make, " ").concat(myCar.model));
myCar.start();
