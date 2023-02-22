function solution(n) {
    // var answer = 0;
    var temp = Math.sqrt(n);
    
    if (Number.isInteger(temp)){
        return (temp+1)*(temp+1);
    } else {
        return -1;    
    }
        
    
}