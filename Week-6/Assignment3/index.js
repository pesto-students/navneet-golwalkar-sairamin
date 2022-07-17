function sortArray(array){
    var temp = 0;
    var size = array.length;
    while(size>1){
        for( var i=0; i<size-1; i++ ){
            if(array[i]>array[i+1]){
                temp       = array[i];
                array[i]   = array[i+1];
                array[i+1] = temp;
            }
        }
        size--;
    }
    
    console.log(array);
}
sortArray([0, 2, 1, 2, 0]);