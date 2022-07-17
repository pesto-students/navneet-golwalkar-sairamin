var car = {
    name : 'Toyota',
    presshorn: function (horn){
        return `${this.name} honks ${horn}`;
    }
}

var pressHorn = car.presshorn.apply(car, ['beep!']);
var changecarHorn = car.presshorn.apply(car, ['hoooonk!']);
console.log(pressHorn);
console.log(changecarHorn);