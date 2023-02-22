function solution(n) {
    var answer = 0;
    return convert(n);
}

function convert(num){
    var result = [];
    var sum = 0;
    if(num < 3){
        return result.push(num);
    } else {
        while(num>=3){
            
            result.push(num%3);
            if((num/3) < 3){
                result.push(Math.floor(num/3));
            }
            num = Math.floor(num/3);
        }    
    }
    for (let i = 0 ; i < result.length ; i++){
        sum += result[i]*Math.pow(3,(result.length-1-i));
    }
    
    return sum;
}