function findDiff(array, val){
    var size = array.length;
    var found = 0;
    var counter = 0;
    while(size>1){
        for( var i=counter+1; i<array.length; i++ ){
            if(Math.abs(array[counter]-array[i])==val){
                console.log(`${array[counter]} and ${array[i]} substraction with each other results ${val}`);
                found = 1;
                break;
            }
        }
        counter++;
        size--;
    }
    return found;
}
console.log(findDiff([2,3,6,3,76,12,45,67], 6));