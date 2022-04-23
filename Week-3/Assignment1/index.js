function fib( num ){
    if( num < 2){
        return num ;
    }
    return fib( num - 1 ) + fib( num - 2 );
}

function time(val){
    console.time();
    console.log(val);
    console.timeEnd();
}

function memoize(fun){
    var cache = new Map();
    return function (args){
        var key = args;
        if( cache.has(key) ){
            return cache.get(key);
        }
        cache.set(key, fun(args));
        return cache.get(key);
    }
}

var fc = memoize(fib);
var out = fc(30);
time(out);
var out1 = fc(35);
time(out1);
var out2 = fc(30);
time(out2);
var out3 = fc(40);
time(out3);
var out4 = fc(30);
time(out4);