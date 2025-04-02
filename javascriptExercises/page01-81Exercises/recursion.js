const isEven = function(even){
    if (even == 0){
        return true;
    }
    else if(even == 1 || even < 0) {
        return false;
    }
    else{
        return isEven(even - 2);
    }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));