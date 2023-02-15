// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

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