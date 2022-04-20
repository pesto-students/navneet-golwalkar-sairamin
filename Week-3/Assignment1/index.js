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
    return function (...args){
        let key = args;
        if(cache.has(key)){
            time(cache.get(key));
        }
        cache.set(key, fun(...args))
        time(cache.get(key));
    }
}

var fc = memoize(fib);
fc(30);
fc(35);
fc(30);
fc(40);
fc(30);