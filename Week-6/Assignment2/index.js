function spiral(array){
    var top    = 0;
    var bottom = array.length-1;
    var left   = 0;
    var right  = array[0].length-1;
    var dir    = 0;
    var newarr = [];
    while( top<=bottom && left<=right ){
        if(dir==0){
            for( var i=left; i<=right; i++ ){
                newarr.push(array[top][i]);
            }
            top += 1;
        }
        else if(dir==1){
            for( var i=top; i<=bottom; i++ ){
                newarr.push(array[i][right]);
            }
            right -= 1;
        }
        else if(dir==2){
            for( var i=right; i>=left; i-- ){
                newarr.push(array[bottom][i]);
            }
            bottom -= 1;
        }
        else if(dir==3){
            for( var i=bottom; i>=top; i-- ){
                newarr.push(array[i][left]);
            }
            left += 1;
        }
        dir = (dir+1)%4;
    }
    

    console.log(newarr);
}
spiral([[1,2,3],[4,5,6],[7,8,9],[10,11,12]]);