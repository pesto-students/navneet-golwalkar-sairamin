var car = {
    horn:'beep!',
    presshorn: function (){
        return this.horn;
    }
}

var presshorn = car.presshorn(); // let log beep!
console.log(presshorn); // log beep!
var pressHorn = car.presshorn; // do not let log beep!
console.log(pressHorn()); // log undefined
var pressHornAgain = pressHorn.bind(car); // again let log beep!
console.log(pressHornAgain());// log beep!