function solution(absolutes, signs) {
    var answer = 123456789;
    var sum = 0;
    absolutes.forEach((element,index) => {
        sum += (signs[index] == 1 ? 1 : -1) * element;
    })
    answer = sum;
    
    return answer;
}