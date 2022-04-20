var car = {
    horn:'beep!',
    presshorn: function (){
        return this.horn;
    }
}

var truckHorn = {
    horn:'honnnnk!',
}

var pressHorn = car.presshorn();
console.log(pressHorn); // honk car horn

var pressTruckHorn = car.presshorn.call(truckHorn);
console.log(pressTruckHorn); // honk truck horn
console.log(car.presshorn());