function solution(num) {
    
    var answer = '';
    if( num < 0 ){
        num *= -1;
    }
    if( num % 2 == 1 && num != 0){
        answer = "Odd";
    } else if( num % 2 == 0 || num == 0){
        answer = "Even";
    }
    return answer;
}