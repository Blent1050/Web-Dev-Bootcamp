
function isEven(num){
    if(num % 2 === 0){
        return true;
    }
    return false;
}

function factorial(num){
    if(num === 1 || num === 0){
        return 1;
    }
    for(x = num-1; x > 0; x--){
        num *= x;
    }
    return num;
}

function kebabToSnake(str){
    var newStr = str.replace(/-/g, "_");
    return newStr;
}