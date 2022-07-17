function maxCsaOfArray(array){
    console.time();
    var sub_arr = [];
    for( var i=0; i<array.length; i++ ){
        for( var j=i; j<array.length; j++ ){
            var sum = 0;
            for( var val of array.slice(i,j+1) ){
                sum = sum+parseInt(val);
            }
            sub_arr.push(sum);
        }
    }
    console.log(Math.max(...sub_arr));
    console.timeEnd();
}

function maxCsaOfArray1(array){
    console.time();
    var maxsum = 0;
    var sum = 0;
    for( var i=0; i<array.length; i++ ){
        sum = sum+array[i];
        if(sum<0){
            sum = 0;
        }
        if(sum>maxsum){
            maxsum = sum;
        }
    }
    console.log(maxsum);
    console.timeEnd();
}

//maxCsaOfArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
//maxCsaOfArray1([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

//maxCsaOfArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

maxCsaOfArray([-2, 1, -3, 4, -1, 2, 1, -5, 4, 2, 1, -5]);
maxCsaOfArray1([-2, 1, -3, 4, -1, 2, 1, -5, 4, 2, 1, -5]);