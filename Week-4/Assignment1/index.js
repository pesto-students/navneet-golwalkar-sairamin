var getNumber = (enumb) => {
    if(enumb){
        return enumb;
    }
    var num = Math.floor(Math.random()*100);
    return num;
}
var state = '';
function res(val){
    state = 'resolved';
    return val;
}
function rej(val){
    state = 'rejected';
    return val;
}
var num = getNumber();
var Promp = function(argsFunc){
    argsFunc(res, rej, num);
    return {
        pthen : function(tfunc){
            if(state == 'resolved'){
                console.log(`Number is : ${num}`);
                tfunc(state);
            }
            return new Promp(argsFunc);
        },
        pcatch : function(cfunc){
            if(state == 'rejected'){
                console.log(`Number is : ${num}`);
                cfunc(state);
            }
            return new Promp(argsFunc);
        }
    }

}
var p = new Promp(function(res, rej, num){
    if(num%5==0){
        rej(num);
    }
    else{
        res(num);
    }
});

p.pthen(function(val){
    console.log(`This is ${val}`);
}).pcatch(function(val){
    console.log(`This is ${val}`);
});