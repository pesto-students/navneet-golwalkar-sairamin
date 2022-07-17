function Market(array){
    this.stocks = array;
    this.buyday = 0;
}
Market.prototype.buy = function(day) {
    this.buyday = day-1;
    console.log( this.stocks[day-1] );
}
Market.prototype.sell = function(day){
    if(day>this.buyday){
        var profit = this.stocks[day-1] - this.stocks[this.buyday];
        if(profit>0){
            console.log(`Profit for day ${day} is ${profit}`);
        }
        else{
            console.log(`You are in loss`);
        }

    }
    else{
        console.log(`You can't sell the stock backdate`);
    }
}

var buystock = new Market([2,3,86,4,95,90]);
buystock.buy(4);
buystock.sell(5);
